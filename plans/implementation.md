> Trạng thái mới nhất và các chỉnh sửa đã chốt: [current-state.md](current-state.md). Ưu tiên ghi chú này khi khác với kế hoạch ban đầu.

# Tái tạo VinFast Lê Trọng Tấn

Nguồn: https://vinfastgiatothanoi.com.vn/
Không có plans/ trước khi thực hiện; kế hoạch này tổng hợp từ cuộc trò chuyện.
Yêu cầu mới nhất: nền sáng mặc định, responsive, từng section riêng, hiệu ứng cuộn.

1. Header, menu mobile, banner có điều khiển và liên kết nhanh.
2. Ưu đãi và tư vấn.
3. Danh mục 8 xe cá nhân và 5 xe dịch vụ; tìm kiếm và chi tiết xe.
4. Hỗ trợ mua xe, form báo giá/lái thử và thanh liên hệ.
5. Footer, chứng nhận, liên kết chính sách; trang bảng giá và trả góp.
6. Kiểm tra lint, typegen, TypeScript, build, HTTP và responsive khi có trình duyệt.
   Form chỉ tạo bản nháp liên hệ, không giả lập gửi thành công khi chưa có backend.
   Giá lưu theo trang chủ nguồn, không coi là xác nhận giá bán hiện hành.

## Kết quả triển khai
- Hoàn thành các section trang chủ, 13 trang xe, bảng giá, trả góp và 4 trang giới thiệu chính sách.
- Dùng ảnh gốc tải cục bộ; giá tham khảo thống nhất từ trang chủ nguồn.
- HTTP: trang chủ và 19 trang con trả 200; slug sai trả 404.
- TypeScript và production build Webpack đã đạt; Turbopack bị lỗi quyền cổng trong sandbox.
- Chưa thể kiểm tra trực quan vì không có trình duyệt kết nối.
- Form soạn email, chưa có backend nhận lead. Các trang chi tiết dùng các nhóm ảnh, không sao chép bài viết dài; chính sách liên kết văn bản đầy đủ tại nguồn.
