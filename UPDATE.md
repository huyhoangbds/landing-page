# Cập nhật website — 22/09/2026

Dự án đã liên kết GitHub với Cloudflare Pages. Bản cập nhật này dùng repository hiện tại, không cần tạo dự án Cloudflare mới hoặc upload ZIP.

## Nội dung cập nhật

- VF Wild: giá ưu đãi chỉ từ 799 triệu đồng, đã gồm giảm 61 triệu đặt cọc tiên phong.
- Bổ sung thông tin chi tiết và khung ưu đãi VF Wild.
- Bốn màu ngoại thất Bạc (nâng cao), Trắng, Đỏ, Đen sử dụng ảnh tách nền.
- Đồng bộ ảnh bạc trên trang chủ, menu và bảng giá.
- Công cụ trả góp hỗ trợ lãi suất năm đầu và từ năm thứ hai; định dạng số tiền bằng dấu chấm.
- Bỏ qua file metadata macOS, checkout lồng và gói deploy cục bộ khi commit.

## Đưa bản cập nhật lên website đang chạy

1. Mở GitHub Desktop, chọn repository `landing-page`, nhánh `main`.
2. Trong History, kiểm tra commit `Update VF Wild pricing, exterior colors and financing`.
3. Bấm **Push origin**.
4. Cloudflare → Workers & Pages → dự án hiện tại → Deployments. Kiểm tra deployment mới sử dụng đúng commit vừa push, chờ trạng thái Success.
5. Mở website đang chạy và tải lại `/xe/vf-wild/`, thử cả bốn màu, kiểm tra giá 799 triệu và ưu đãi. Kiểm tra `/tra-gop/`.

Nếu không tự deploy, kiểm tra Production branch là `main` và automatic deployments đã bật. Build command: `npm run build`; output: `out`; root directory để trống. Không retry deployment của commit cũ.

## Kiểm tra đã hoàn tất

Lint, TypeScript, build static và 9 kiểm tra trả góp đều đạt. Đã kiểm tra đường dẫn ảnh tách nền và giá VF Wild trong bản xuất. Chưa xác nhận bản online cho tới khi push và Cloudflare deploy thành công.
