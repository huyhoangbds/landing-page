# Đưa Landing Page lên internet

## 1. Kiểm tra bản Cloudflare Pages

```sh
cd "/Volumes/Lexar E6/AI-SSD-CURSOR/landing-page"
npm ci
npm run lint
npm run test:loan
npm run build
```

Build tạo thư mục `out/`, gồm index.html, 404.html và các trang xe. Dự án dùng `output: "export"`, không chạy `npm start` cho bản static này. Dev vẫn dùng `npm run dev`.

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

Dự án đã có Git, không cần `git init`. Remote hiện tại là `https://github.com/huyhoangbds/landing-page.git`, nhánh `main`; không cần chạy lại `git remote add origin`. Nếu sau này báo origin đã tồn tại, xem `git remote -v` và đối chiếu đúng repository trước khi đổi. Xác thực theo GitHub CLI/Git Credential Manager hoặc SSH; không nhập token vào mã nguồn hay URL remote. `.env` và cache đã được bỏ qua; `.env.example` được lưu. `plans/sources/` là tư liệu gốc lưu riêng tại máy, không cần khi chạy website; các JSON đã nhập nằm trong lib/data.

Nguồn: https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github

## 4. Cloudflare Pages

Trong Workers & Pages → Create application → Pages → Import an existing Git repository, chọn huyhoangbds/landing-page.

- Production branch: `main`
- Framework: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: để trống (package.json ở gốc repo)
- Production environment: `SITE_URL=https://TEN-DU-AN.pages.dev` hoặc tên miền thật.
- Preview: không đặt SITE_URL; code cũng tắt index khi CF_PAGES_BRANCH khác main.

Sau khi push bản sửa, deploy commit mới. Lỗi `Output directory "out" not found` ở bản cũ xảy ra vì chưa bật static export; bấm Retry trên commit cũ không sửa được lỗi. Không cần cài Wrangler/OpenNext cho bản static.

## 5. Chức năng và giới hạn

Trang chủ không dùng ISR; nội dung JSON được cập nhật khi build lại. Tháng ưu đãi cập nhật trên trình duyệt; ngày vay mặc định lấy ngày Việt Nam khi mở công cụ. Các trang chi tiết xe được sinh sẵn; 404.html xử lý URL không tồn tại.

Ảnh dùng đường dẫn public trực tiếp (`images.unoptimized`), không cần server Next Image và không có tối ưu AVIF theo request như bản server trước đó. Giữ ảnh gốc HD, ảnh lớn có thể tải nặng hơn. Có thể bổ sung bộ tạo ảnh nhiều kích thước ở build sau.

Form gửi trực tiếp tới https://formspree.io/f/mbglrzpb bằng AJAX. Trong Formspree, xác minh email nhận hoangnh.qo@gmail.com và cấu hình thông báo email. Thành công trên website chỉ xác nhận Formspree tiếp nhận, không xác nhận thư đã vào Inbox. Kiểm tra Submissions và Spam khi nghiệm thu; nếu bật CAPTCHA/Turnstile, cần tích hợp widget tương ứng trước.

Sau deploy, kiểm tra trang chủ, tải lại trực tiếp /xe/vf-wild/, /tra-gop/, ảnh, popup, theme và sitemap/robots. Chưa xác nhận deploy online cho tới khi có trạng thái Success và kiểm tra URL public.


## Bản chuẩn bị ngày 22/09/2026

Đã kiểm tra lint, TypeScript, build static 26 trang và 9 bài kiểm tra tính trả góp. Bản này gồm VF Wild giá ưu đãi chỉ từ 799 triệu, bốn ảnh màu ngoại thất tách nền, ưu đãi tiên phong 61 triệu và công cụ vay hai giai đoạn lãi suất.

### Deploy dự án đã liên kết GitHub

1. Trong GitHub Desktop, chọn repository `landing-page`, nhánh `main`.
2. Kiểm tra Changes có mã nguồn và ảnh WebP mới. Thư mục `out`, `deploy-artifacts`, `.env`, `node_modules` và checkout lồng `landing-page/` được bỏ qua.
3. Summary: `Prepare VF Wild and financing updates for deployment`, bấm **Commit to main**, sau đó **Push origin**.
4. Cloudflare Pages: mở dự án đang dùng, kiểm tra build command `npm run build`, output `out`, root để trống. Deploy commit vừa push, không retry commit cũ.
5. Đợi Success rồi kiểm tra `/xe/vf-wild/`, chọn lần lượt đủ bốn màu; kiểm tra giá 799 triệu, ưu đãi và `/tra-gop/`.

### Gói static dự phòng

`deploy-artifacts/landing-page-pages.zip` chứa nội dung của `out/` với `index.html` ngay ở gốc ZIP. Đây là gói website đã build, không phải mã nguồn để commit. Dự án hiện đã dùng Git integration nên ưu tiên Push origin để cập nhật. Gói này có thể dùng cho một dự án Pages Direct Upload riêng.

Bản build thử không tự thay SITE_URL. Nếu muốn Google index website, đặt SITE_URL đúng tên miền trong Cloudflare rồi build lại; bản không có SITE_URL sẽ noindex.

Hướng dẫn Cloudflare static export: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
