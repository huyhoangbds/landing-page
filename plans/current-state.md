# Trạng thái hiện tại — đọc trước lần chỉnh sửa tiếp theo

Cập nhật: 2026-09-12. Ghi chú này ưu tiên hơn nội dung kế hoạch cũ nếu có khác biệt.

## Nhận diện đã cập nhật
- Tên hiển thị: Huy Hoàng Ôtô VinFast.
- Điện thoại: 0941 610 797; liên kết gọi: tel:0941610797.
- Nguồn cấu hình liên hệ: lib/data/site.ts.
- Đã đổi nhận diện trong header, footer, metadata, phần ưu đãi và dialog.
- Chỉ đổi chữ, không thay bố cục hay hiệu ứng trong lần cập nhật nhận diện.
- Thông tin pháp nhân trong cột Đơn vị quản lý đã cập nhật theo thông tin người dùng cung cấp (xem mục mới nhất bên dưới). Địa chỉ, email, bản đồ và ảnh chứng nhận đã cập nhật theo mục Footer mới nhất bên dưới.

## Giao diện đã thống nhất
- Nền sáng mặc định, có chuyển sáng/tối.
- Banner tràn chiều ngang sát dưới header, không có tiêu đề hero.
- Ưu đãi ngay sau banner: 8 ô chứa icon và nội dung; hover nâng nhẹ, đổi màu nền/viền/icon.
- Danh mục: CÁC DÒNG XE (8 xe), XE CHẠY DỊCH VỤ (5 xe). Không mô tả phụ hoặc ô tìm kiếm.
- Thứ tự: banner, ưu đãi, liên kết nhanh, tư vấn, xe cá nhân, xe dịch vụ, hỗ trợ mua xe, footer.
- Các phần nằm riêng trong components/sections; trang chủ ghép tại app/(marketing)/page.tsx.
- Framer Motion: reveal một lần khi cuộn, hover/tap, menu enter/exit, dialog native enter/exit, banner fade sau khi ảnh tải xong. Hỗ trợ reduced motion.

## Chạy và kiểm tra
- npm run dev; URL gần nhất: http://localhost:3000 (kiểm tra server trước khi khởi động thêm).
- npm run lint; npx next typegen; npx tsc --noEmit; npm run build.
- Build dùng Webpack vì Turbopack gặp lỗi cổng nội bộ trong sandbox.
- Bản trước thay nhận diện đã đạt lint, TypeScript, build, HTTP. Chưa có trình duyệt kết nối để nghiệm thu trực quan desktop/mobile hoặc đo FPS.

## Phạm vi và dữ liệu
- Next.js + TypeScript + Tailwind + Framer Motion; ảnh cục bộ tại public/images.
- 13 trang chi tiết xe, bảng giá, trả góp, 4 trang giới thiệu chính sách.
- lib/data/cars.ts: danh mục/giá; details.json: ảnh chi tiết và nguồn; policies.ts: giới thiệu chính sách.
- Form chỉ soạn email, chưa có backend nhận lead; không báo gửi thành công tự động.
- Giá tham khảo, chính sách có liên kết nguồn. Không có yêu cầu triển khai public.
- Mã nguồn đã lưu trên ổ đĩa; chưa tạo commit cho các thay đổi này.

## Chỉnh sửa ưu đãi mới nhất
- Tiêu đề duy nhất: Ưu đãi tháng 9 xe Vinfast. Bỏ eyebrow và mô tả dài ở đầu phần.
- Icon bên trái, nhóm tiêu đề/mô tả bên phải trong cùng một hàng trên mọi kích thước. Thu gọn padding và khoảng cách, giữ hover/reveal.

## Menu mới nhất
- Các mục điều hướng IN HOA. Header desktop 68px, mobile 62px.
- Nút header: Hotline: 0941 610 797, href tel:0941610797; trên mobile hotline nằm trong menu và thanh liên hệ cố định.

## Footer mới nhất
- Địa chỉ: Lô 18, Cụm Công Nghiệp Lại Yên, Sơn Đồng, Hanoi, Vietnam.
- Email: hoangnh.qo@gmail.com (cấu hình dùng chung với bản nháp email).
- Địa chỉ và nút chỉ đường trỏ Bing Maps theo địa chỉ người dùng gửi.
- Chứng nhận: public/images/chung-nhan-vinfast-vg-son-dong.jpg, bản thu nhỏ 2400px từ /Users/nguyenhoang/Desktop/VINFAST.jpg. Giữ nguyên nội dung ảnh; click để xem lớn.

## Đơn vị quản lý mới nhất
- VINFAST VG SƠN ĐỒNG
- Công ty TNHH Tân Phong - Lại Yên
- MST: 0104571417
- Địa chỉ: Lô 18, Cụm Công nghiệp Lại Yên, Xã Sơn Đồng (hoặc Huyện Hoài Đức), Thành phố Hà Nội.
- Đơn vị phân phối: Công ty TNHH Kinh doanh Thương mại và Dịch vụ VinFast · MST 0108926276.

## Nội dung ưu đãi tháng 9 — cập nhật mới nhất
Còn 6 ô, xếp 3 cột desktop / 2 tablet / 1 mobile; icon và text cùng hàng, giữ hiệu ứng.
1. Ưu đãi trước bạ: Miễn 100% lệ phí trước bạ.
2. An tâm sạc pin: Sạc pin miễn phí tới năm 2029.
3. Ưu đãi tiền mặt: Chính sách riêng theo dòng xe và thời điểm mua.
4. Tài chính linh hoạt: Hỗ trợ vay tới 85%, lãi suất thấp.
5. Sẵn xe và hồ sơ: Giao ngay.
6. Quà tặng: Quà tặng phụ kiện ngay khi mua.
Đã bỏ ô Tri ân khách hàng và Trải nghiệm lái thử khỏi phần ưu đãi.

## Thanh hỗ trợ sau ưu đãi — mới nhất
- Đã bỏ khối “Báo giá tốt cho chiếc xe bạn chọn” khỏi trang chủ.
- Ba mục Yêu cầu báo giá / Bảng giá VinFast / Giải pháp trả góp dùng nền xanh, chữ trắng, icon có nền riêng; giữ chức năng.
- Thu gọn khoảng trống: ưu đãi cách thanh hỗ trợ 28px desktop / 20px mobile; thanh hỗ trợ cách danh mục 40px / 32px.

## Danh mục xe cá nhân — thiết kế mới nhất
- Tiêu đề CÁC DÒNG XE VINFAST: đỏ, đậm, gạch chân theo ảnh tham khảo.
- CarGrid/CarCard có prop showcase, chỉ bật cho danh mục xe cá nhân trang chủ.
- Tên mẫu VF2/VF3… màu xám lớn phía sau ảnh xe (CSS, ảnh xe giữ nguyên).
- Giá bán tăng độ đậm/kích thước và có nền xanh nhạt; không thay dữ liệu giá, nút hay phần xe dịch vụ.

## Xe dịch vụ — thiết kế mới nhất
- Bật showcase: tiêu đề đậm/gạch chân, tên xe chìm sau ảnh, giá nổi bật giống xe cá nhân.
- Màu chủ đạo xanh lá: tiêu đề, giá, nút và điểm nhấn; hỗ trợ dark mode.
- Tên dài MinioGreen/HerioGreen… dùng cỡ chữ nhỏ hơn để không tràn ảnh. Giá và chức năng giữ nguyên.

## Trang Bảng giá — tái tạo theo nguồn
- `/bang-gia` dựng theo https://vinfastgiatothanoi.com.vn/bang-gia-xe-407566n.html.
- Cấu trúc: tiêu đề, hotline, mục lục 12 dòng xe + ảnh VF8/CTA, 12 nhóm ảnh/bảng giá, liên hệ dưới từng nhóm, CTA cuối và hỗ trợ mua xe.
- `lib/data/prices.json`: 12 nhóm / 21 phiên bản, giá nguyên VNĐ trích từ bảng giá nguồn. Nguồn không có nhóm MPV7 nên không tự thêm.
- Giá bảng giá có thể khác giá từ trang chủ (ví dụ VF5 Plus 496 triệu); không sửa dữ liệu trang chủ trong công việc này.
- `components/pricing/`: intro, nhóm bảng giá, liên hệ, CSS Module riêng để không ảnh hưởng trang chủ.
- Dùng thông tin Huy Hoàng và hotline 0941 610 797. CTA vay dùng mức 85% đã được người dùng cung cấp.
- HTTP /bang-gia 200; kiểm tra đủ 12 bảng, 21 dòng phiên bản, 12 anchor hợp lệ, tất cả ảnh có trên ổ đĩa.
- Chưa kiểm tra trực quan trong trình duyệt; responsive dựa trên CSS xếp ảnh/bảng dọc dưới 768px.

## Bảng giá — chữ chìm và lời nhắc
- Mỗi nhóm xe có tên mẫu màu xám lớn sau ảnh, tự thu cỡ chữ theo độ dài.
- Lời nhắc: Giá trên là Giá niêm yết của từng mẫu xe, để nhận báo giá và ưu đãi cho [TÊN XE], liên hệ tư vấn: 0941 610 797. Tên xe theo từng nhóm, số có link gọi.

## Khôi phục môi trường trên MacBook — 2026-09-13
- npm ci khôi phục 372 package từ package-lock.json do thiếu node_modules/.bin.
- Next.js 16.3.5, dev server localhost:3000 đã Ready; trang chủ và bảng giá trả HTTP 200.
- Lint, typegen, TypeScript đạt. Mã nguồn/nội dung/ảnh không bị thay thế.

## Trang trả góp — 2026-09-13
- Tiêu đề TRẢ GÓP XE VINFAST; thu gọn ba khung hướng dẫn, CSS Module riêng.
- Thêm công cụ tính khoản vay xe phía sau, tham khảo bố cục Techcombank: hai phương thức gốc đều/dư nợ giảm dần và tổng tiền trả hàng tháng cố định.
- Nhập giá xe, số tiền vay hoặc tỷ lệ tối đa 85%, số tháng (1–120), lãi suất năm và ngày giải ngân; kết quả cập nhật ngay, mở bảng chi tiết từng kỳ.
- Lãi suất mặc định 7,5% chỉ là ví dụ; giả định cố định toàn kỳ, lãi tháng = lãi năm/12, làm tròn VNĐ. Không gồm phí/bảo hiểm/thay đổi lãi suất; không mô phỏng cách tính theo số ngày thực tế của ngân hàng.
- Ngày trả theo ngày giải ngân, điều chỉnh cuối tháng; trang dynamic để ngày mặc định luôn cập nhật theo giờ Việt Nam.
- Mã: components/financing/, lib/loan-calculator.ts; kiểm thử: npm run test:loan.
- 7 nhóm kiểm thử đạt (công thức, lãi 0%, cuối tháng/năm nhuận, dữ liệu sai, làm tròn/tất toán), lint và production build đạt; /tra-gop HTTP 200 và số liệu mặc định đúng.
- Responsive: ba khung xếp dọc trên mobile, form/kết quả xếp dọc, bảng lịch có cuộn ngang. Chưa kiểm tra trực quan vì không có trình duyệt kết nối.

## Trả góp — logo và tỷ lệ cột
- Thêm nhận diện Huy Hoàng Ôtô VinFast (biểu tượng và chữ như header) cạnh icon ví trong khung kết quả xanh, trên nền trắng nhỏ để dễ đọc.
- Hai cột nhập liệu/kết quả bằng nhau (50/50) trên desktop; mobile vẫn xếp dọc.
- ESLint đạt, trang /tra-gop HTTP 200.

## Trả góp — thu gọn chiều cao hai khung
- Hai khung cùng hàng dùng grid stretch để bằng chiều cao; giữ tỷ lệ rộng 50/50 desktop.
- Giảm padding, khoảng cách và chiều cao input; kết quả tháng đầu/cuối đặt cạnh nhau, tổng tiền có nhãn và số cùng hàng khi đủ chỗ.
- Nút lịch trả nợ đặt ngay dưới kết quả, tránh khoảng trống tự giãn. Mobile vẫn xếp dọc và cho nội dung tự xuống dòng.
- Lint đạt; /tra-gop HTTP 200. Chưa kiểm tra trực quan bằng trình duyệt.

## Ưu đãi — tháng tự động và khung HOT
- Tiêu đề in hoa ƯU ĐÃI THÁNG [tháng hiện tại] XE VINFAST, theo Asia/Ho_Chi_Minh.
- Trang chủ render theo request để không giữ tháng lúc build; component nhỏ đồng bộ tháng khi trang đang mở và khi quay lại tab. Dọn timer/listener khi unmount.
- Khung bo góc nền xanh đậm chuyển sắc, tiêu đề trắng, nhãn HOT vàng; sáu ô nội dung nền trắng, giữ hover và responsive.
- Chỉ tiêu đề tự đổi tháng; nội dung chính sách ưu đãi không tự thay đổi.
- Lint, TypeScript/build và HTTP trang chủ đạt; chưa kiểm tra trực quan bằng trình duyệt.

## Nhãn HOT — dạng sticker
- Chuyển HOT! ra góc trên phải khung ưu đãi, nghiêng 12 độ, màu đỏ/cam/vàng và bóng nổi.
- Mobile thu nhỏ nhãn và chừa khoảng phía trên tiêu đề để tránh chồng chữ. Không dùng chuyển động lặp.
- ESLint đạt.

## Ưu đãi — nền đỏ cam
- Đổi nền khung sang gradient đỏ/cam, viền và bóng cùng tông.
- Ô ưu đãi nền kem trắng, icon đỏ cam trên nền cam nhạt; hover nền đào nhạt và icon nền đỏ/chữ trắng.
- Giữ tiêu đề trắng, nhãn HOT góc phải và bố cục hiện tại. ESLint đạt.

## Tải lại dữ liệu MacBook / Dòng xe — 2026-09-14
- Đã đọc lại trạng thái lưu, tiếp tục yêu cầu menu DÒNG XE và trang chi tiết còn dang dở.
- `components/layout/car-menu.tsx` + CSS Module: menu ảnh đủ 13 xe, desktop 6 cột (tablet 4), mở khi hover hoặc bấm; Escape đóng, Tab hoạt động; mobile mở bằng nút và xếp 2 cột trong menu cuộn.
- Mỗi mục trỏ `/xe/[slug]`; dùng ảnh/tên từ dữ liệu cars chung. Không tạo một danh sách xe riêng dễ lệch dữ liệu.
- Trang chi tiết dùng bố cục tham khảo trang VF 2: breadcrumb, gallery chọn ảnh, tên/giá/ưu đãi/hotline và nút báo giá/lái thử, thanh hỗ trợ, nội dung + sidebar tư vấn/xe khác, xe liên quan cuối trang.
- Các component mới trong `components/cars/`: detail-gallery, detail-summary, detail-sidebar, detail.module.css. Áp dụng cho đủ 13 trang.
- VF 2 có giới thiệu ngắn và bảng thông số lấy từ trang tham khảo. Giữ các nhóm ảnh sẵn có của từng dòng xe; loại ảnh logo bị dùng nhầm ở mục thông số (VF2/VF8/MPV7). Không sao chép toàn bộ bài viết dài của nguồn.
- Giữ thương hiệu Huy Hoàng, hotline 0941 610 797 và giá hiện có; nguồn: https://vinfastgiatothanoi.com.vn/vinfast-vf-2-1515905.html.
- Lint, TypeScript và production build đạt. Chưa kiểm tra trực quan do công cụ trình duyệt không có browser kết nối.
- Dev server đã khởi động lại trên localhost:3000.

## Sửa menu và bộ chọn màu ngoại thất — 2026-09-14
- Sửa lỗi menu lệch hàng: desktop nav align-items center và cao bằng header; nút DÒNG XE bỏ padding dọc riêng. Thêm TRANG CHỦ trên cả desktop/mobile. Dưới 900px dùng menu mobile để tránh tràn; hotline ẩn ở màn hình dưới 1200px.
- Gallery đầu trang chỉ hiển thị ngoại thất, vòng màu chọn và nút trước/sau. Ảnh nội thất/chi tiết vẫn ở nội dung bên dưới.
- `lib/data/car-colors.json`: 78 màu thuộc 12 mẫu, ảnh và swatch chính thức lưu tại `public/images/colors/` (109 tệp, khoảng 6,1MB). Dữ liệu lấy từ trang cấu hình shop.vinfastauto.com/vn_vi/dat-coc-o-to-dien-vinfast.html và ghi source/edition cho từng xe; giữ nguyên giá hiện có.
- VF2 8 màu, VF3 7, VF5 6, VF6 5, VF7 5, VF8 8, VF9 7, MPV7 6, Minio14, Herio4, Limo4, ECVan4. Đây là các màu của phiên bản tham khảo ghi trong dữ liệu, không khẳng định tồn kho.
- Nerio Green chưa có bộ ảnh màu trong nguồn chính thức đã kiểm tra: giữ ảnh ngoại thất và hướng dẫn liên hệ xem bảng màu, không dùng ảnh VF6 thay thế.
- Các vòng màu có aria-label/aria-pressed, tên màu hiện rõ và đọc bằng aria-live; nút trước/sau quay vòng; hiển thị lỗi nếu ảnh không tải được. Không tô màu giả bằng CSS.
- Lint/TypeScript/build đạt; 13 trang xe HTTP200, xác nhận đủ tên/mẫu màu; kiểm tra 78 ảnh khác nhau và ảnh swatch giải mã được. Chưa kiểm tra trực quan/hover/click trong trình duyệt vì không có browser kết nối.

## Bài viết xe từ Google Sheets — 2026-09-14
- Nguồn người dùng: https://docs.google.com/spreadsheets/d/1iHHeLjY7MVpRwNsUA4PxQy-hDzpRskAeuHGCyMqHUtM/edit?gid=2007#gid=2007.
- Đã xuất chỉ đọc và lưu snapshot `plans/sources/vinfast-content-2026-09-14.xlsx`. Không sửa Google Sheets.
- 11 sheet → 11 nội dung cho 10 trang xe: VF2/3/5/6/7/8/9, MPV7, Minio, Limo; VF8 và VF8 Thế hệ mới hiển thị tách biệt trong cùng `/xe/vf-8`, có liên kết đến từng thế hệ.
- `scripts/import-car-articles.py` nhập workbook vào `lib/data/car-articles.json`; giữ nguyên toàn bộ 126 đoạn và 161 dòng thông số, nguồn sheet/dòng đi kèm dữ liệu để đối chiếu. Có 77 mục (7 mục/bài).
- `components/cars/car-article.tsx`: mục lục, đoạn văn, ảnh có chú thích, bảng thông số riêng từng phiên bản (Eco/Plus/CATL/Gotion). Bảng rộng cuộn ngang trên mobile.
- Ghép 27 vị trí ảnh từ dữ liệu ảnh cũ, bổ sung hai ảnh VF8 đúng thế hệ tại public/images/articles/. Không dùng ảnh Limo cho MPV7 và không dùng ảnh VF8 All New cho nội dung VF8 Eco/Plus.
- Hai ảnh mới: shop.vinfastauto.com/vn_vi/dat-coc-xe-vf8.html, assets reserves/VF8/thietkekdh.webp và interior-img1.webp.
- Herio/Nerio/ECVan chưa có sheet nên giữ nội dung cũ. Giá, gallery màu và menu không thay đổi trong lượt này.
- Đã đối chiếu toàn bộ văn bản và các ô thông số với workbook, kiểm tra lint/TypeScript/build đạt. Các bài đã kiểm tra HTTP và mục lục, chưa kiểm tra trực quan do chưa có browser kết nối.

## Chân trang và Zalo — cập nhật mới nhất
- Bỏ khối copyright cuối footer gồm tên Huy Hoàng và câu “Cùng bạn hướng tới tương lai xanh.” theo vùng khoanh đỏ.
- Thu gọn padding, khoảng cách các cột, tiêu đề và disclaimer; giữ khoảng an toàn cho thanh liên hệ cố định trên mobile.
- Thêm `components/layout/zalo-button.tsx` + CSS Module, gắn ở root layout: link https://zalo.me/0941610797 mở tab mới, nút tròn xanh/chữ Zalo trắng, hai vòng sáng lan 2,4 giây liên tục. Tắt animation khi reduced-motion.
- Nút góc trái dưới nằm phía trên contact bar; giữ nguyên các nút gọi/báo giá/về đầu trang.
- Tải lại dữ liệu và khởi động dev server localhost:3000; ESLint và HTTP VF5 đạt, xác nhận link Zalo và khối chữ đã bỏ trong HTML. Chưa kiểm tra trực quan.

## Chính sách cho website cá nhân — cập nhật mới nhất
- Người dùng xác nhận đây là website cá nhân, không phải website công ty. Điều này thay thế cách mô tả “đơn vị quản lý website” là công ty trong các ghi chú cũ.
- Viết mới bốn trang tại đường dẫn cũ: /chinh-sach/dieu-khoan (Chính sách và bảo mật), /su-dung, /bao-mat, /mien-tru. `lib/data/policies.ts` chứa đầy đủ nội dung, cập nhật 14/09/2026.
- Người phụ trách được trình bày là Huy Hoàng, điện thoại 0941 610 797, email hoangnh.qo@gmail.com; không tự suy đoán họ tên pháp lý hoặc địa chỉ cư trú.
- Tách vai trò cá nhân tư vấn với đại lý ký hợp đồng, xuất hóa đơn/bảo hành và ngân hàng cấp vốn. Nội dung không loại trừ trách nhiệm bắt buộc hoặc quyền của khách hàng.
- Chính sách riêng tư khớp mã nguồn: form chỉ tạo draft, người dùng tự gửi email; các kênh Zalo/email/maps bên ngoài, lưu tùy chọn theme trên trình duyệt, tính khoản vay tại trình duyệt, chưa có analytics/ads. Nhật ký hạ tầng diễn đạt có thể phát sinh, không khẳng định cấu hình hosting chưa kiểm chứng.
- Mô tả mục đích, chia sẻ có căn cứ/đồng ý phù hợp, thời gian lưu theo nhu cầu và nghĩa vụ, quyền và đầu mối xử lý dữ liệu. Không thêm tracking hay luồng thu thập mới.
- Footer đổi “Đơn vị quản lý” thành “Thông tin đại lý tham khảo”, “Chứng nhận của đại lý”; disclaimer xác định website cá nhân. Form có liên kết chính sách bảo mật và người nhận Huy Hoàng.
- Bốn trang dùng CSS Module riêng, mục lục, điều hướng chéo và đầu mối liên hệ; bỏ liên kết buộc khách đọc chính sách website mẫu.
- Căn cứ tham khảo: Luật 91/2025/QH15 (hiệu lực 01/01/2026), https://chinhphu.vn/?classid=1&docid=214590&orggroupid=1&pageid=27160; thông tin quyền dữ liệu https://bocongan.gov.vn/chinh-sach-phap-luat/bai-viet/luat-bao-ve-du-lieu-ca-nhan-chinh-thuc-co-hieu-luc-thi-hanh-tu-ngay-01-01-2026-1767186124. Không khẳng định đây là đánh giá tuân thủ pháp lý đầy đủ.
- ESLint, TypeScript/build và HTTP bốn trang đạt. Chưa kiểm tra trực quan bằng trình duyệt.

## Điều chỉnh mục người phụ trách — 14/09/2026
- Theo yêu cầu người dùng, bỏ đoạn thứ hai trong mục “Người phụ trách website” tại Chính sách và bảo mật; giữ nguyên đoạn giới thiệu Huy Hoàng và thông tin liên hệ.

## Footer và email popup — 14/09/2026
- Bỏ toàn bộ footer-disclaimer gồm hai đoạn cuối theo yêu cầu, áp dụng SiteFooter chung mọi trang.
- Popup giữ cơ chế bản nháp + mailto, người nhận hoangnh.qo@gmail.com; thêm hiển thị người nhận trong kết quả bản nháp.
- ESLint hai file đạt; kiểm tra liên kết mailto thực tế trong source cho báo giá/lái thử: địa chỉ, tiêu đề và nội dung tiếng Việt/ký tự đặc biệt đúng. Không gửi email thật; chưa xác nhận thư tới hộp thư.

## Ảnh màu xe trang chủ — 14/09/2026
- CarCard showcase dùng ảnh màu chính hãng đã lưu: VF6 trắng CE18, VF7 đỏ CE2Q, Limo Green trắng CE18, VF9 đen CE11. Chỉ áp dụng showcase trang chủ; giữ dữ liệu ảnh mặc định các trang khác.

## Banner tự động — 14/09/2026
- Hero tự chuyển mỗi 5 giây, fade 350ms; tạm dừng khi hover/focus, tab ẩn hoặc reduced-motion; có nút pause/play. Chỉ chuyển khi ảnh tải xong.
- Xác minh cả 5 ảnh gốc 1920x1080 (Full HD), tăng Next Image quality 90 và allowlist config [75,90]. ESLint và TypeScript đạt.

## VF Wild — 14/09/2026
- Thêm xe vf-wild nhóm passenger sau VF9, price null (Chưa công bố), ảnh concept chính thức. Danh sách cars đồng bộ menu desktop/mobile, trang chủ, form, sidebar và route /xe/vf-wild.
- Bảng giá thêm gia_xe_vf_wild, không dùng số 0 hay giá dự đoán. DetailSummary riêng cho null: không hứa ưu đãi, giao xe hoặc lái thử, CTA Nhận thông tin.
- WildArticle riêng: thông số concept 5324x1997mm, khoang hàng1524–2438mm, Gomotiv, CES2024, nguồn https://vinfastauto.com/vn_vi/vinfast-gioi-thieu-mau-xe-y-tuong-dong-ban-tai-dien-vf-wild . Chưa xác minh giá/mở bán chính thức 14/09/2026; không lấy tin đồn800triệu hay EREV làm thông số.
- Hai ảnh gốc static-cms-prod.vinfastauto.com/Photo%2001_1704851212.jpg và Photo%2002_1704851244.jpg lưu public/images/vf-wild/. Không bịa bảng màu thương mại.
- HTTP /, /xe/vf-wild, /bang-gia trả200 có VF Wild; kiểm tra ảnh trực tiếp và TypeScript đạt.

## VF Wild ảnh trang chủ — 14/09/2026
- Dùng home-isolated.png xử lý bằng imagegen từ concept.jpg, xe độc lập nền trắng với CSS multiply để lộ chữ VF WILD xám. Công cụ không xuất alpha thật; không dùng bản caro lỗi.
- Chỉ showcase trang chủ dùng ảnh mới, thay icon mũi tên góc phải bằng nhãn New cam. Trang chi tiết giữ ảnh gốc.

## Đồng bộ ảnh VF Wild và bản đồ — 15/09/2026
- cars.ts và prices.json cùng dùng /images/vf-wild/home-isolated.png: menu desktop/mobile, danh sách, trang chi tiết, sidebar, bảng giá. Bỏ override ảnh VF Wild riêng trang chủ; nhãn New giữ nguyên. Ảnh bài viết gốc giữ làm tư liệu.
- site.maps đổi sang Google Maps Directions api=1, destination địa chỉ Lô18 Cụm Công nghiệp Lại Yên Sơn Đồng Hà Nội. Áp dụng mọi link dùng site.maps.

## Dọn code và tối ưu — 15/09/2026 (mới nhất)
- Đọc plans/reviews/code-review-2026-09-15.md để xem chi tiết, điểm đánh giá8/10 và giới hạn QA.
- CSS entry app/globals.css nhập10file styles/, custom-variant ở entry. Xóa36rule chết, giữ cascade. LoanCalculator tách LoanFields/LoanResult; định dạng tiền chung lib/format.ts. Banners chuyển lib/data/banners.ts.
- Xóa consultation-section.tsx không còn dùng và lib/utils.ts; bỏ VF2 fallback không chạy. Giữ nội dung dữ liệu nguồn.
- VF Wild dùng home-isolated.webp lossless, giảm37,5%; PNG gốc ở plans/sources/vf-wild-home-original.png. Mọi đường dẫn đại diện dùngWebP.
- Banner mount ảnh theo nhu cầu, form dynamic import khi mở, menu không prefetch tất cả xe, tháng cập nhật vào nửa đêm thay mỗi giây.
- Build/TypeScript/lint/7nhóm test vay đạt. Toàn bộ21route HTTP200,404 đạt, ảnh không thiếu. Chưa kiểm thử UI/Lighthouse vì không có trình duyệt kết nối.
- Dev server đã làm mới cache cũ trong .next/dev (chuyển /private/tmp/landing-dev-cache-20260915-cleanup) và chạy localhost3000, session2050. Nếu dừng giữa lượt thì npm run dev.

## Khôi phục và nâng cấp giao diện — 15/09/2026
- Đã đọc lại trạng thái dự án Mac, giữ toàn bộ nội dung và chỉnh sửa hiện có.
- Bộ màu tập trung styles/tokens.css; CSS thành phần sử dụng biến màu. Giữ các điểm nhấn ưu đãi đỏ cam, tiêu đề đỏ, xe dịch vụ xanh và Zalo.
- styles/interaction.css: chuyển theme màu mượt, focus-visible, trạng thái hover/active/invalid, bố cục nhỏ, hỗ trợ reduced-motion.
- ThemeProvider tiếp tục lưu lựa chọn light/dark; NotificationProvider thông báo đổi theme. Popup có thông báo bản nháp sẵn sàng, vẫn chưa gửi email tự động.
- LoadingState dùng ở route loading, form lazy load và ảnh gallery. Menu hỗ trợ ArrowDown; swatch hỗ trợ phím mũi tên/Home/End; popup trả focus về nút mở.
- Lint, TypeScript, build và 7 nhóm test vay đạt. Sau làm mới cache dev, HTTP /, /xe/vf-wild, /bang-gia, /tra-gop, /chinh-sach/bao-mat đều200.
- Cache dev cũ đã giữ trong .next/dev-backup-ui-*; bản sao tạm có thể ở /private/tmp/landing-dev-cache-ui-20260915-restored. Dev hiện session80448 localhost3000.
- Chưa kiểm thử trực quan và thao tác bàn phím thực tế: công cụ UI không có browser kết nối. Không coi kiểm tra mã nguồn là kiểm thử mọi kích thước màn hình.

## Đối chiếu yêu cầu nâng cấp UI — 15/09/2026
- Xác nhận palette tập trung, dark/light lưu next-themes, chuyển màu, notification theme, feedback form, loading route/form/gallery, MotionButton và reduced-motion đều có.
- Bổ sung focus tới kết quả bản nháp sau submit; làm rõ focus-within ô vay; menu xe không đóng khi mouseleave nếu focus bàn phím còn bên trong.
- Lint/TypeScript đạt; HTTP trang chủ, bảng giá, trả góp, VF Wild, VF2 đều200 và có đích skip-link main.
- Responsive có breakpoint và bảng cuộn ngang; chưa nghiệm thu trực quan mọi màn hình hoặc thao tác trình duyệt thực tế vì chưa có browser kết nối. Form vẫn là bản nháp + mailto, không phải gửi email tự động.

## Chuẩn bị triển khai — 15/09/2026
- lib/seo.ts tập trung metadata/canonical/OpenGraph/Twitter theo SITE_URL. Trang xe có mô tả riêng; trang chủ có h1 ẩn trực quan để giữ banner nguyên thiết kế. Sitemap liệt kê21trang khi có SITE_URL; robots/noindex chặn khi chưa cấu hình hoặc Vercel preview. Không dùng tên miền giả cho bản phát hành.
- .env.example được commit được; .gitignore bỏ secrets/cache/editor/local source archives. DEPLOYMENT.md hướng dẫn GitHub repository trống, push, biến môi trường và Next server hosting. Chưa push/deploy.
- Next Image thêm AVIF và WebP; trang chủ ISR1giờ, tháng ưu đãi cập nhật client. poweredByHeader=false. Ảnh giữ FullHD gốc, phục vụ kích thước thích hợp.
- Lint/TypeScript/build đạt,7nhóm test vay đạt, npm audit --omit=dev 0lỗhổng. Production tại localhost3001/session3433:21route200+metadata,robots/sitemap200. VF Wild640pxAVIF11531bytes so với gốc1003244bytes. Không phải phép đo Lighthouse.
- Kiểm tra helper SEO: chưa SITE_URL=>noindex; cấu hình=>canonical đúng từng đường dẫn; preview=>noindex. Đang chờ tên miền thật, phải đặt SITE_URL và build lại trước phát hành.
- Không có browser kết nối nên chưa có QA trực quan đa thiết bị/Lighthouse. Form chỉ draft+mailto, chưa gửi thư tự động.

## Sửa Cloudflare Pages thiếu out — 15/09/2026
- Bật output export/trailingSlash, bỏ ISR và force-dynamic trả góp, robots/sitemap force-static, dynamicParams=false cho route mẫu xe/chính sách.
- ClientLoanCalculator lấy ngày Việt Nam khi hydrate để tránh dùng ngày build; form/màu xe/theme giữ client behavior.
- images.unoptimized=true phục vụ ảnh public không cần Next image server; mất tối ưu AVIF theo request, giữ chất lượng ảnh gốc. Chưa bổ sung pipeline resize build.
- SEO không index branch Pages khác main. Production cần SITE_URL và build lại.
- Lint/TypeScript/build/7tests đạt; out có21route index,404,robots,sitemap; kiểm tra asset HTML không thiếu. Chưa deploy online, thay đổi chưa commit/push; bỏ qua repository rỗng lồng landing-page/.
- DEPLOYMENT.md đã cập nhật npm run build + out, không dùng npm start/ISR cho bản Pages.

## Formspree — 16/09/2026
- Người dùng cung cấp endpoint https://formspree.io/f/mbglrzpb. Form POST FormData với Accept application/json, có intent, tên/số điện thoại/mẫu xe/lời nhắn.
- Trạng thái sending/success/error; chặn submit trùng bằng ref và disabled, timeout20s, lỗi429/mạng có hướng dẫn và linkZalo, giữ dữ liệu nhập.
- Bỏ luồng chỉ tạo draft/mailto trong popup. Policy và DEPLOYMENT cập nhật xử lý Formspree. Email đích phải được xác minh trong dashboard Formspree, chưa kiểm tra được cấu hình tài khoản.
- Lint/TypeScript/static build đạt trước chỉnh câu policy cuối. Chưa gửi email thật, chưa test giao diện browser, chưa deploy/push.

## Hai giai đoạn lãi suất — 22/09/2026
- Công cụ vay: lãi suất năm đầu và mức dự kiến từ tháng13. Default7.5/10.5 là mô phỏng, không dữ liệu ngân hàng trực tiếp.
- Gốc đều giữ phân bổ gốc, lãi đổi từ kỳ13. Annuity tính lại khoản trả ở kỳ13 từ dư nợ và thời hạn còn lại; đổi nhãn trả đều theo từng giai đoạn.
- Kết quả có khoản trả tháng13; lịch trả nợ thêm lãi suất mỗi kỳ. Giá xe nhập có dấu chấm, giá trị lưu số nguyên dạng chuỗi.
- 9 nhóm tests đạt gồm biên12/13, hạn<=12,0%,recast và đối soát gốc; lint/TypeScript/static export đạt. Chưa QA browser/deploy.
- Bỏ qua AppleDouble ._* trong Git/ESLint/TypeScript để file metadata ổ ngoài không gây lỗi build.

## VF Wild cập nhật — 22/09/2026
- Đọc trang người dùng https://vinfastvietnam.com.vn/vinfast-vf-wild/ và đối chiếu thông cáo hãng 19/09/2026 https://vinfastauto.com/vn_vi/vinfast-ra-mat-xe-ban-tai-dien-vf-wild-tai-viet-nam.
- Chuyển VF Wild dùng CarArticle chung,7mục: tổng quan/ngoại thất/nội thất/công nghệ/vận hành/thông số/giá; thêm2ảnh WebP nguồn người dùng.
- Đồng bộ giá niêm yết860triệu, bạc872triệu. Thông cáo hãng nêu mở cọc25–30/09/2026 ưu đãi61triệu có điều kiện; không coi ưu đãi là giá niêm yết.
- Dùng quãng đường hãng tới1000km thay số1100km trang tham khảo; công suất/moment có dấu* theo nguồn tham khảo. Ảnh đại diện concept giữ nguyên yêu cầu cũ, có chú thích tại gallery.
- Lint/TypeScript/static build đạt; chưa deploy. WildArticle cũ không còn được gọi, giữ file lịch sử chưa xóa.


## VF Wild exterior colors — 2026-09-22
- Added supplied silver (premium), white, red and black photos to public/images/colors/vf-wild; silver is default.
- Built-in imagegen background-extraction prompt: extract exact silver truck, preserve geometry/paint/angle, transparent background and subtle contact shadow, no added text. Generated alpha-preserving WebP at public/images/vf-wild/silver-isolated.webp; shared by car catalogue and prices (home/menu/detail).
- Updated gallery caption; lint, TypeScript and static build passed; asset/export references checked. Not pushed/deployed.

## VF Wild color background correction — 2026-09-22
- Fixed selector still referencing original scenic JPGs: all 4 now use transparent isolated WebP assets (silver shared with homepage/menu; white/red/black in public/images/colors/vf-wild/*-isolated.webp).
- Built-in imagegen prompt: extract exact truck, remove all environment, preserve paint/shape/camera angle, transparent alpha and subtle contact shadow. Inspected each generated color against a light background and verified alpha.
- Reused standard purchase offers/actions for VF Wild and added bold pioneer deposit discount of 61 million VND.
- Corrected cars.ts VF Wild price unit to 860 (millions), keeping prices.json VND values intact.
- Lint, TypeScript, static build passed; exported color paths/offer/price assertions passed. Browser UI unavailable. Not pushed/deployed.

- VF Wild starting promotional price updated to 799 million on home/detail/price page/article per user. Clearly includes 61 million pioneer discount; original listed prices retained in price table. Lint/build passed.

## Deploy preparation — 2026-09-22
- Latest static export includes all VF Wild updates and 799 million price. Lint/build/TypeScript passed; 9 loan tests passed.
- deploy-artifacts/landing-page-pages.zip and verification.json prepared locally; archive is ignored by Git. Nested empty landing-page checkout ignored.
- DEPLOYMENT.md updated for existing GitHub origin/main and GitHub Desktop push flow. Not committed, pushed or published.

## VF 8 All-New and homepage cover — 2026-09-23
- Supplied September banner optimized WebP, replaced initial carousel slide (index 1). Embedded VF Wild price 699 in user image differs from current 799 card; user informed, card unchanged.
- Added vf-8-all-new car/route, 786 million reference price from supplied banner; official technical summary and 3 local image assets from vinfastauto.com/vn_vi/dat-coc-xe-vf8-the-all-new-2026. Red Solar Ruby cutout; shared catalogue propagates to menus/forms.
- New badge, grey VF8 backdrop, standard detail layout. Lint/TypeScript/build 27 routes passed; export references checked. Not committed/pushed/deployed.

### 23/09/2026 — Bộ ảnh VF8 và banner đơn
- Trang chủ chỉ dùng banner-september-2026.webp, loại bỏ carousel và dữ liệu banner cũ.
- VF8 All-New: 12 ảnh màu VF8PH-13…24 và mẫu màu từ website chính thức, chia 4 tiêu chuẩn / 8 nâng cao; tên tiếng Việt mô tả ảnh, giữ Solar Ruby và Vitality Orange đã xác nhận.
- Thêm thư viện 13 ảnh nội/ngoại thất và công nghệ, WebP lưu local, lazy loading.
- VF8 cũ dùng ảnh product-CE22.webp chính thức từ shop VinFast, đồng bộ cars/prices.
- Lint, TypeScript, build static 27 trang và kiểm tra tham chiếu ảnh đạt. Chưa push/deploy.

### 24/09/2026 — Cập nhật theo yêu cầu giá và banner
- Banner dùng bản 10_34_18 ngày 23/09, WebP v2 (1672×941), giữ nguyên chữ/giá trong ảnh theo file cung cấp. Một số giá trong ảnh khác giá người dùng yêu cầu bằng văn bản.
- Giá từ (triệu): VF2 182, VF3 285, VF5 435, VF6 580, VF7 678, VF8 cũ 786, VF9 1220, VF Wild 799, Limo 630, MPV7 665, EC Van 265. VF8 All-New giữ 786.
- Bảng giá dùng prices.ts lấy giá từ cars.ts; bỏ bảng giá phiên bản cũ tránh hiển thị giá không được xác nhận. Giữ ID anchor cũ, thêm MPV7/All-New.
- Ảnh bài viết và thư viện VF8 All-New cùng khung 16:9 contain, không cắt/biến dạng.
