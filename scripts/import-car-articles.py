"""Import the owner's exported workbook without changing the source file.
Usage: python3 scripts/import-car-articles.py path/to/workbook.xlsx
"""
import json
import posixpath
import re
import sys
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
NS = {'s': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
MAPPING = {'VF 2':'vf-2', 'VF 3':'vf-3', 'VF 5':'vf-5', 'VF 6':'vf-6', 'VF 7':'vf-7', 'VF 8':'vf-8', 'VF 8 Thế hệ mới':'vf-8-new', 'VF 9':'vf-9', 'VF MPV 7':'mpv-7', 'Minio Green':'minio-green', 'Limo Green':'limo-green'}
SECTION_IDS = ['tong-quan','ngoai-that','noi-that','van-hanh','thong-so','tien-nghi','an-toan']
TITLES = ['Tổng quan','Ngoại thất','Nội thất','Khả năng vận hành','Thông số kỹ thuật','Tiện nghi & công nghệ','Tính năng an toàn']

def extract(path):
    with zipfile.ZipFile(path) as book:
        strings = [''.join(t.text or '' for t in si.findall('.//s:t', NS)) for si in ET.fromstring(book.read('xl/sharedStrings.xml')).findall('s:si', NS)]
        rels = {r.attrib['Id']: posixpath.normpath('xl/' + r.attrib['Target']) for r in ET.fromstring(book.read('xl/_rels/workbook.xml.rels'))}
        sheets = {}
        for sheet in ET.fromstring(book.read('xl/workbook.xml')).findall('s:sheets/s:sheet', NS):
            target = rels[sheet.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id']]
            rows = []
            for row in ET.fromstring(book.read(target)).findall('s:sheetData/s:row', NS):
                cells = {}
                for cell in row.findall('s:c', NS):
                    value = cell.find('s:v', NS)
                    if value is not None:
                        text = strings[int(value.text)] if cell.attrib.get('t') == 's' else value.text
                        if text:
                            cells[re.sub(r'\d+', '', cell.attrib['r'])] = text
                if cells:
                    rows.append((int(row.attrib['r']), cells))
            sheets[sheet.attrib['name']] = rows
        return sheets

source = extract(sys.argv[1])
assert set(source) == set(MAPPING), 'Unexpected or missing sheet: review mapping before importing'
details = json.loads((ROOT/'lib/data/details.json').read_text())
articles = {}
for sheet, rows in source.items():
    slug = MAPPING[sheet]
    sections = []
    current = None
    for row_number, cells in rows[1:]:
        label = cells.get('A','')
        match = re.match(r'^([1-7])\.\s', label)
        if match:
            index = int(match[1])-1
            current = {'id': SECTION_IDS[index], 'title': TITLES[index], 'paragraphs': cells.get('B','').split('\n\n') if cells.get('B') else [], 'table': None, 'image': None, 'caption': None, 'sourceRow': row_number}
            sections.append(current)
        elif current and current['id'] == 'thong-so':
            values = [cells[col] for col in sorted(cells)]
            if label == 'Hạng mục':
                current['table'] = {'headers': values, 'rows': []}
            else:
                assert current['table'] and len(values) == len(current['table']['headers']), (sheet,row_number)
                current['table']['rows'].append(values)
        else:
            raise ValueError((sheet, row_number, cells))
    assert [s['id'] for s in sections] == SECTION_IDS
    assert all(s['paragraphs'] or s['table'] for s in sections)
    base_slug = 'vf-8' if slug == 'vf-8-new' else slug
    images = details[base_slug]['sections']
    for section in sections:
        title = {'ngoai-that': 'Ngoại thất', 'noi-that': 'Nội thất', 'van-hanh': 'Vận hành'}.get(section['id'])
        found = next((x for x in images if x['title'] == title), None)
        if found and not found['image'].split('/')[-1].startswith(('logo-', 'limo-green')):
            section['image'] = found['image']
            section['caption'] = f"{section['title']} {sheet}. Hình ảnh minh họa, trang bị tùy phiên bản."
    # Correct-generation images for the original VF 8; current details uses the All New gallery.
    if slug == 'vf-8':
        for section in sections:
            section['image'] = {'ngoai-that':'/images/articles/vf8-exterior.webp','noi-that':'/images/articles/vf8-interior.webp'}.get(section['id'])
            section['caption'] = f"{section['title']} VF 8. Hình ảnh minh họa, trang bị tùy phiên bản." if section['image'] else None
    # Limo's own pictures are valid; omit only the Limo image embedded in MPV 7's old data.
    if slug == 'limo-green':
        for section in sections:
            found = next((x for x in images if x['title'] == {'ngoai-that':'Ngoại thất','noi-that':'Nội thất'}.get(section['id'])),None)
            if found:
                section['image'] = found['image'];section['caption'] = f"{section['title']} Limo Green. Hình ảnh minh họa."
    articles[slug] = {'name':sheet,'sourceSheet':sheet,'sections':sections}
(ROOT/'lib/data/car-articles.json').write_text(json.dumps(articles,ensure_ascii=False,indent=2)+'\n')
print(f'Imported {len(articles)} articles, {sum(len(a["sections"]) for a in articles.values())} sections')
