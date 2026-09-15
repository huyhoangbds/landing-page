import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="container section">
      <span className="eyebrow">404</span>
      <h1>Trang bạn tìm chưa có ở đây.</h1>
      <Link href="/" className="button">
        Về trang chủ
      </Link>
    </main>
  );
}
