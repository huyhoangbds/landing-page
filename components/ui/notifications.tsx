"use client";
import { createContext, useCallback, useContext, useState } from "react";
import { CheckCircle2, Info, X } from "lucide-react";

type Notice = { message: string; tone?: "success" | "info" };
const NotificationContext = createContext<(notice: Notice) => void>(() => {});
export const useNotification = () => useContext(NotificationContext);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notice, setNotice] = useState<Notice | null>(null);
  const notify = useCallback((value: Notice) => setNotice(value), []);
  return <NotificationContext.Provider value={notify}>
    {children}
    <div className="notification-region" aria-live="polite" aria-atomic="true">
      {notice && <div className="notification-card">
        {notice.tone === "success" ? <CheckCircle2 size={22} aria-hidden="true" /> : <Info size={22} aria-hidden="true" />}
        <p>{notice.message}</p>
        <button type="button" className="icon-button" aria-label="Đóng thông báo" onClick={() => setNotice(null)}><X size={18} /></button>
      </div>}
    </div>
  </NotificationContext.Provider>;
}
