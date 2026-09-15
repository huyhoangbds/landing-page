"use client";
import { CheckCircle2 } from "lucide-react";
import { MotionButton } from "@/components/ui/motion-controls";
import { useRef, useState } from "react";
import { cars } from "@/lib/data/cars";
import { site } from "@/lib/data/site";
export function ConsultationForm({
  car = "",
  intent = "Báo giá",
}: {
  car?: string;
  intent?: string;
}) {
  const [draft, setDraft] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);
  return (
    <form
      className="consultation-form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setDraft(
          `Xin chào, tôi là ${data.get("name")}, SĐT ${data.get("phone")}. Tôi muốn ${data.get("car") === "VinFast VF Wild" ? "nhận thông tin" : intent.toLowerCase()} cho ${data.get("car")}. ${data.get("note") || ""}`,
        );
        requestAnimationFrame(() => resultRef.current?.focus());
      }}
    >
      <p>Điền thông tin để soạn yêu cầu tư vấn gửi Huy Hoàng.</p>
      <label>
        Họ và tên
        <input
          name="name"
          autoComplete="name"
          required
          minLength={2}
          maxLength={80}
          placeholder="Nguyễn Văn An"
        />
      </label>
      <label>
        Số điện thoại
        <input
          name="phone"
          autoComplete="tel"
          type="tel"
          inputMode="tel"
          required
          pattern="[+0-9 ()-]{9,16}"
          placeholder="Số điện thoại của bạn"
        />
      </label>
      <label>
        Dòng xe quan tâm
        <select name="car" defaultValue={car} required>
          <option value="" disabled>
            Chọn dòng xe
          </option>
          {cars.map((c) => (
            <option key={c.slug}>{c.name}</option>
          ))}
        </select>
      </label>
      <label>
        Lời nhắn
        <textarea
          name="note"
          rows={2}
          maxLength={1000}
          placeholder="Thời gian lái thử, phiên bản hoặc màu xe…"
        />
      </label>
      <p className="fine-print">
        Biểu mẫu tạo bản nháp trên thiết bị, chưa gửi cho Huy Hoàng. Bạn kiểm tra
        và tự gửi qua email. <a className="text-link" href="/chinh-sach/bao-mat" target="_blank" rel="noopener noreferrer">Xem chính sách bảo mật</a>.
      </p>
      <MotionButton className="button" type="submit">
        Soạn yêu cầu {intent.toLowerCase()}
      </MotionButton>
      {draft && (
        <div ref={resultRef} className="draft-result" role="status" tabIndex={-1} aria-label="Kết quả soạn yêu cầu">
          <strong className="feedback-heading"><CheckCircle2 size={21} aria-hidden="true" />Bản nháp đã sẵn sàng — chưa gửi</strong>
          <p>Người nhận: {site.email}</p>
          <p>{draft}</p>
          <a
            className="text-link"
            href={`mailto:${site.email}?subject=${encodeURIComponent("Yêu cầu " + intent + " VinFast")}&body=${encodeURIComponent(draft)}`}
          >
            Mở email để gửi yêu cầu →
          </a>
          <a className="text-link" href={`tel:${site.tel}`}>
            Hoặc gọi {site.phone}
          </a>
        </div>
      )}
    </form>
  );
}
