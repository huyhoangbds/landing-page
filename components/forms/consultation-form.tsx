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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const busy = useRef(false);
  const resultRef = useRef<HTMLDivElement>(null);
  return (
    <form
      className="consultation-form"
      aria-busy={status === "sending"}
      onSubmit={async (event) => {
        event.preventDefault();
        if (busy.current || status === "success") return;
        busy.current = true;
        const data = new FormData(event.currentTarget);
        data.set("intent", data.get("car") === "VinFast VF Wild" ? "Nhận thông tin" : intent);
        data.set("_subject", "Yêu cầu tư vấn VinFast từ website");
        setStatus("sending");
        setMessage("Đang gửi yêu cầu…");
        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), 20000);
        try {
          const response = await fetch("https://formspree.io/f/mbglrzpb", {
            method: "POST", body: data, headers: { Accept: "application/json" }, signal: controller.signal,
          });
          if (!response.ok) {
            setStatus("error");
            setMessage(response.status === 429 ? "Có quá nhiều yêu cầu. Vui lòng chờ vài phút rồi thử lại." : "Chưa gửi được yêu cầu. Vui lòng thử lại hoặc liên hệ qua Zalo bên dưới.");
          } else {
            setStatus("success");
            setMessage("Yêu cầu đã được hệ thống tiếp nhận. Huy Hoàng sẽ liên hệ tư vấn qua số điện thoại bạn cung cấp.");
          }
        } catch {
          setStatus("error");
          setMessage("Chưa xác nhận được kết quả gửi do kết nối bị gián đoạn. Bạn có thể liên hệ Zalo để kiểm tra trước khi gửi lại.");
        } finally {
          window.clearTimeout(timeout);
          busy.current = false;
          requestAnimationFrame(() => resultRef.current?.focus());
        }
      }}
    >
      <p>Điền thông tin để gửi yêu cầu tư vấn tới Huy Hoàng.</p>
      <fieldset disabled={status === "sending" || status === "success"} style={{ border: 0, padding: 0, margin: 0, display: "grid", gap: 18, minWidth: 0 }}>
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
          pattern={String.raw`[+0-9 \(\)\-]{9,16}`}
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
      </fieldset>
      <p className="fine-print">
        Khi bấm gửi, thông tin của bạn được chuyển qua Formspree để Huy Hoàng tiếp nhận và tư vấn.
        {" "}<a className="text-link" href="/chinh-sach/bao-mat" target="_blank" rel="noopener noreferrer">Xem chính sách bảo mật</a>.
      </p>
      <MotionButton className="button" type="submit" disabled={status === "sending" || status === "success"}>
        {status === "sending" ? "Đang gửi…" : status === "success" ? "Đã gửi yêu cầu" : `Gửi yêu cầu ${intent.toLowerCase()}`}
      </MotionButton>
      <div ref={resultRef} tabIndex={-1} role="status" aria-live="polite" className={message ? "draft-result" : undefined}>
        {message && <p>{status === "success" && <CheckCircle2 size={21} aria-hidden="true" />} {message}</p>}
        {status === "error" && <a className="text-link" href={`https://zalo.me/${site.tel}`} target="_blank" rel="noopener noreferrer">Liên hệ Zalo →</a>}
      </div>
    </form>
  );
}
