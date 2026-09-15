# Huy Hoàng Ôtô VinFast — Landing Page

Next.js 16 / TypeScript / Tailwind CSS 4 / Framer Motion.

Hướng dẫn đưa code lên GitHub và triển khai: [DEPLOYMENT.md](DEPLOYMENT.md).

## Chạy

```sh
npm install
npm run dev
```

Mở URL `Local` do Next.js in ra. Next.js tự chọn cổng kế tiếp nếu 3000 bận.

## Kiểm tra

```sh
npm run lint
npx next typegen
npx tsc --noEmit
npm run build
```

## Tổ chức

- `app/(marketing)/page.tsx`: ghép các section trang chủ.
- `components/sections/`: mỗi phần trang chủ một file.
- `components/cars/`: thẻ xe, tìm kiếm, các phần chi tiết.
- `components/forms/`: dialog báo giá/lái thử; **chưa có backend gửi lead**.
- `lib/data/`: dữ liệu xe, thông tin showroom, ảnh chi tiết, chính sách.
- `public/images/`: ảnh tải từ website tham khảo, không hotlink.
- `plans/implementation.md`: kế hoạch tổng hợp từ cuộc trò chuyện do ban đầu không có plans/.

Mặc định nền sáng; nút theme lưu lựa chọn trên thiết bị. Chuyển động cuộn hỗ trợ reduced motion.

## Nội dung và phạm vi

Nguồn: https://vinfastgiatothanoi.com.vn/ và các trang chi tiết được ghi trong `lib/data/details.json`.
Ảnh được tải từ CDN liên kết trên website nguồn. Giá lấy thống nhất từ trang chủ nguồn và chỉ là giá tham khảo.
Trang chi tiết tái tạo các nhóm ảnh ngoại thất, nội thất, màu sắc và thông số khi nguồn có ảnh. Không sao chép toàn bộ bài viết dài. Trang chính sách giới thiệu nội dung và liên kết văn bản gốc.
Form chỉ soạn bản nháp, người dùng chọn mở ứng dụng email và tự gửi. Không gửi lead hay dữ liệu đến website gốc tự động.
Không sao chép mã tracking của website gốc.

Kiểm tra trực quan trên điện thoại/máy tính cần một trình duyệt khả dụng; môi trường agent chưa có browser kết nối.

Production build dùng Webpack (`next build --webpack`) vì Turbopack gặp lỗi quyền mở cổng nội bộ trong môi trường này. Dev vẫn dùng `next dev`.

## Animation

Framer Motion: reveal khi vào viewport (một lần, delay tối đa 150ms), nâng nhẹ thẻ xe khi hover, spring khi bấm nút, menu nổi có enter/exit, dialog native có enter/exit và phục hồi focus, banner crossfade sau khi ảnh được tải.
`MotionConfig reducedMotion="user"` kết hợp `useReducedMotion` cho từng tương tác. CSS không animate transform cùng lúc với Motion trên nút.
Đã kiểm tra lint, TypeScript, production build và HTTP trang chủ. Chưa có trình duyệt kết nối để đo FPS/kiểm tra trực quan. Khi nghiệm thu trên thiết bị, kiểm tra menu (Escape/Tab), dialog (đóng/mở nhanh), banner trên mạng chậm, cuộn mobile và chế độ reduced motion.

## Công cụ trả góp

`/tra-gop`: nhập giá xe, khoản vay/tỷ lệ, thời hạn, lãi suất và ngày giải ngân. Hỗ trợ gốc đều và trả hàng tháng cố định, kèm bảng lịch trả nợ. Logic riêng tại `lib/loan-calculator.ts`, giao diện tại `components/financing/`.

Chạy `npm run test:loan` để kiểm tra công thức, làm tròn, ngày cuối tháng và dữ liệu đầu vào. Kết quả là ước tính theo lãi tháng = lãi năm/12, lãi suất cố định toàn kỳ, chưa gồm phí/bảo hiểm; mức 7,5% mặc định là ví dụ.

## Nội dung bài chi tiết xe

Nội dung do chủ website cung cấp được lưu ở `lib/data/car-articles.json`, bản Excel nguồn ở `plans/sources/vinfast-content-2026-09-14.xlsx`. Để nhập lại bản xuất mới: `python3 scripts/import-car-articles.py path/to/workbook.xlsx`. Script kiểm tra tên sheet, 7 nhóm nội dung và số cột phiên bản trước khi ghi dữ liệu.

Có 11 nội dung cho 10 mẫu xe; VF 8 và VF 8 Thế hệ mới được tách rõ trong bài VF 8. Herio Green, Nerio Green và EC Van chưa có dữ liệu trong bảng nguồn nên giữ bài hiện có. Nội dung được nhập tại thời điểm cập nhật, không tự đồng bộ trực tiếp từ Google Sheets.
