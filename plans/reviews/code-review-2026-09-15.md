# Review và dọn code Landing Page — 15/09/2026

Đánh giá kỹ thuật sau đợt dọn: **8/10**. Đây là đánh giá mã nguồn và kết quả kiểm tra, không phải điểm Lighthouse hay xác nhận đã thử trực quan trên mọi thiết bị.

## Thay đổi đã thực hiện

- globals.css từ 1.560 dòng thành file nhập 10 stylesheet theo phạm vi; mỗi file hiện tối đa 274 dòng. Giữ thứ tự cascade và các media query nguyên khối; đối chiếu cây CSS trước/sau khi tách. Khai báo Tailwind custom-variant giữ tại entrypoint.
- LoanCalculator từ 354 xuống 137 dòng; tách LoanFields (159) và LoanResult (83). Công thức và quy tắc làm tròn vẫn nằm trong lib/loan-calculator.ts, không sửa trong đợt này.
- lib/format.ts là nơi định dạng số, tiền VNĐ và giá triệu. Một Intl.NumberFormat dùng lại cho các ô bảng thay vì khởi tạo mỗi lần.
- Tách danh sách banner khỏi dữ liệu xe; đổi tên phần đọc số và các biến giá trước/sau, khoản vay hiện tại cho rõ nghĩa.
- Xóa component ConsultationSection đã bỏ khỏi trang chủ, helper cn không có nơi gọi, nhánh thông số VF2 không thể chạy vì bài viết mới đã xử lý trước; xóa 36 quy tắc CSS thuộc các vùng đã bỏ.
- Giữ nguyên nội dung JSON do người dùng cung cấp; file dữ liệu dài không phải component dài và không cần chia chỉ để giảm số dòng.
- Ảnh VF Wild dùng WebP lossless: 1.605.564 → 1.003.244 byte, giảm 37,5%; kiểm tra pixel giải mã giống hệt. Chuyển bản PNG gốc sang plans/sources để phục vụ lần chỉnh sửa sau, đồng bộ ảnh đại diện menu/card/bảng giá/detail.
- Banner chỉ mount ảnh đầu tiên khi tải trang, thêm ảnh theo nhu cầu. Giữ ảnh cũ cho đến khi ảnh được chọn tải xong, giữ chuyển cảnh 350ms và tự chuyển 5 giây. Tách trạng thái hover/focus để không tự chạy lại khi bàn phím còn focus trong banner.
- Form dùng dynamic import, chỉ mount sau lần mở đầu tiên; có thông báo đang tải. Mega-menu tắt prefetch hàng loạt trang xe; liên kết vẫn hoạt động bình thường.
- Bỏ polling tháng mỗi giây: cập nhật ở mốc nửa đêm Việt Nam và khi đổi trạng thái hiển thị tab. Giữ cập nhật đúng khi bước sang tháng mới.
- Bổ sung data-scroll-behavior trên html theo cảnh báo Next.js, tránh cuộn mượt ngoài ý muốn khi đổi trang.

## Điểm mạnh

- Nội dung chính dùng Server Components; trang xe và chính sách có static generation.
- Form và lịch trả góp không gửi dữ liệu ngầm lên máy chủ; không phát hiện secret trong phần mã đã rà soát.
- Có nhãn form, điều khiển bàn phím, hỗ trợ reduced-motion, trang404 và nhãn concept VF Wild.
- Dữ liệu xe trung tâm đồng bộ menu, form và danh sách; thông tin chưa công bố không biến thành giá0.

## Hạn chế còn lại

- Form hiện chỉ tạo mailto; chưa có luồng nhận đăng ký tự động, xác nhận gửi hoặc chống spam phía máy chủ. Không thay đổi hành vi gửi trong phạm vi dọn code.
- Chưa có trình duyệt kết nối để kiểm tra popup, carousel, menu bằng thao tác thực, cũng chưa đo Core Web Vitals/Lighthouse. Không tuyên bố cải thiện LCP/INP bằng phần trăm.
- CSS đã nhỏ hơn nhưng còn các lớp điều chỉnh kế thừa; việc gom tiếp cần ảnh chụp so sánh giao diện desktop/mobile để tránh thay đổi bố cục.
- Một số component JSX ngắn nhưng dày dòng có thể định dạng rộng hơn ở vòng bảo trì sau.
- Trang chủ vẫn dynamic để tháng ưu đãi đúng ngay trong HTML; chưa đổi sang cache tĩnh vì cần giữ hành vi đã duyệt.
- Kho ảnh và bảng ánh xạ nguồn giữ lại để phục vụ cập nhật nội dung, không xóa hàng loạt chỉ vì ảnh chưa hiển thị trên trang hiện tại.

## Kiểm chứng

- ESLint, TypeScript, production build.
- 7 nhóm kiểm thử tính vay: hai phương pháp, lãi0, khoản vay0, làm tròn, ngày cuối tháng/năm nhuận và dữ liệu không hợp lệ.
- Kiểm tra đường dẫn ảnh trong component và dữ liệu không thiếu file.
- Kiểm tra HTTP các trang chủ/bảng giá/trả góp, 4 trang chính sách và 14 trang xe; kiểm tra trang xe không tồn tại trả404.
- Đối chiếu khoản vay mặc định vẫn có tháng đầu9.625.000 và tổng lãi80.062.500 VNĐ.
