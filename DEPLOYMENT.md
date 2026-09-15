# Đưa Landing Page lên internet

## 1. Kiểm tra trên Mac

```sh
cd "/Volumes/Lexar E6/AI-SSD-CURSOR/landing-page"
npm ci
npm run lint
npm run test:loan
npm run build
npm start
```

Dừng dev server trước nếu cổng 3000 đang bận. Chạy production bằng `npm start`, không dùng `npm run dev` trên hosting.

## 2. Tên miền và SEO

Copy `.env.example` thành `.env.local`. Điền `SITE_URL=https://ten-mien-thuc-te.vn` bằng tên miền của bạn. Trên hosting, thêm cùng biến môi trường rồi build/deploy lại.

Không có SITE_URL: website vẫn chạy nhưng có noindex và sitemap rỗng để không phát hành URL giả. Vercel preview cũng không được index. Khi chuyển tên miền phải sửa SITE_URL và redeploy. Sau deploy, kiểm tra canonical trên từng trang, `/robots.txt`, `/sitemap.xml`, rồi gửi sitemap trong Google Search Console. SEO cơ bản không bảo đảm thứ hạng Google.

## 3. Tạo repository GitHub

1. Đăng nhập GitHub, chọn **New repository**, đặt tên `landing-page`.
2. Chọn Private nếu muốn giữ mã nguồn riêng.
3. Để repository trống: không tạo sẵn README, .gitignore hoặc license vì dự án đã có file.
4. Nhấn Create repository. Thay TEN_GITHUB bên dưới bằng tài khoản của bạn.

```sh
cd "/Volumes/Lexar E6/AI-SSD-CURSOR/landing-page"
git status
git add .
git diff --cached --stat
git commit -m "Prepare VinFast landing page for deployment"
git branch -M main
git remote add origin https://github.com/huyhoangbds/landing-page.git
git push -u origin main
```

Dự án đã có Git, không cần `git init`. Hiện chưa cấu hình remote. Nếu sau này báo origin đã tồn tại, xem `git remote -v` và đối chiếu đúng repository trước khi đổi. Xác thực theo GitHub CLI/Git Credential Manager hoặc SSH; không nhập token vào mã nguồn hay URL remote. `.env` và cache đã được bỏ qua; `.env.example` được lưu. `plans/sources/` là tư liệu gốc lưu riêng tại máy, không cần khi chạy website; các JSON đã nhập nằm trong lib/data.

Nguồn: https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github

## 4. Hosting

Dùng hosting hỗ trợ Next.js server (ví dụ Vercel hoặc Node.js server). Repository GitHub chỉ lưu code; dự án hiện không phải bản static export dành cho GitHub Pages. Build command `npm run build`, start command `npm start`. Cài dependencies từ package-lock bằng `npm ci`. Chọn Node còn được hosting hỗ trợ, đáp ứng Next.js >=20.9; kiểm tra lại build khi thay phiên bản Node.

Kết nối repository trên hosting, chọn framework Next.js, đặt SITE_URL là URL public chính thức trước build. Sau deploy kiểm tra ảnh, menu, popup, trả góp, chuyển theme trên điện thoại và máy tính. Chưa thực hiện deploy hay push trong phiên chuẩn bị này.

## 5. Giới hạn chức năng cần biết

Form hiện tạo bản nháp và mở ứng dụng email bằng mailto tới hoangnh.qo@gmail.com. Người dùng phải tự gửi; website chưa có dịch vụ gửi email tự động. Không thông báo đã nhận đăng ký khi chưa gửi thư. Banner HD và ảnh xe dùng Next Image, định dạng AVIF/WebP theo trình duyệt; hosting phải hỗ trợ image optimization.
