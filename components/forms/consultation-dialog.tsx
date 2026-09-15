"use client";
import { createContext, useContext, useRef, useState } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { MotionButton } from "@/components/ui/motion-controls";
import { X } from "lucide-react";
import { LoadingState } from "@/components/ui/loading-state";
import dynamic from "next/dynamic";
const ConsultationForm = dynamic(
  () => import("./consultation-form").then(module => module.ConsultationForm),
  { loading: () => <LoadingState label="Đang tải biểu mẫu…" /> },
);
type Request = { car?: string; intent?: string };
const Context = createContext<(request: Request) => void>(() => {});
export function ConsultationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [request, setRequest] = useState<Request>({});
  const [version, setVersion] = useState(0);
  const controls = useAnimationControls();
  const reduced = useReducedMotion();
  const closing = useRef(false);
  const opener = useRef<HTMLElement | null>(null);
  async function close() {
    if (closing.current || !dialog.current?.open) return;
    closing.current = true;
    await controls.start({
      opacity: 0,
      y: reduced ? 0 : 10,
      scale: reduced ? 1 : 0.99,
      transition: { duration: reduced ? 0 : 0.16 },
    });
    dialog.current?.close();
    opener.current?.focus({ preventScroll: true });
    closing.current = false;
  }
  function open(value: Request) {
    opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setRequest(value);
    setVersion((v) => v + 1);
    closing.current = false;
    controls.set({
      opacity: reduced ? 1 : 0,
      y: reduced ? 0 : 16,
      scale: reduced ? 1 : 0.98,
    });
    dialog.current?.showModal();
    void controls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduced ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] },
    });
  }
  return (
    <Context.Provider value={open}>
      {children}
      <motion.dialog
        animate={controls}
        onCancel={(e) => {
          e.preventDefault();
          void close();
        }}
        ref={dialog}
        className="consultation-dialog"
        aria-labelledby="dialog-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) void close();
        }}
      >
        <div className="dialog-body">
          <MotionButton
            className="icon-button dialog-close"
            aria-label="Đóng biểu mẫu"
            onClick={() => void close()}
          >
            <X />
          </MotionButton>
          <span className="eyebrow">Huy Hoàng Ôtô VinFast</span>
          <h2 id="dialog-title">
            {request.intent === "Nhận thông tin" ? "Tìm hiểu VinFast VF Wild." : request.intent === "Lái thử"
              ? "Hẹn một hành trình mới."
              : "Chiếc xe bạn chọn. Ưu đãi dành riêng."}
          </h2>
          {version > 0 && <ConsultationForm
            key={version}
            car={request.car}
            intent={request.intent}
          />}
        </div>
      </motion.dialog>
    </Context.Provider>
  );
}
export function QuoteButton({
  children,
  car,
  intent = "Báo giá",
  className = "button",
}: {
  children: React.ReactNode;
  car?: string;
  intent?: string;
  className?: string;
}) {
  const open = useContext(Context);
  return (
    <MotionButton className={className} onClick={() => open({ car, intent })}>
      {children}
    </MotionButton>
  );
}
