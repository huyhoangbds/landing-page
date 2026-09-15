"use client";
import { NotificationProvider } from "@/components/ui/notifications";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { ConsultationProvider } from "@/components/forms/consultation-dialog";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <NotificationProvider><ConsultationProvider>{children}</ConsultationProvider></NotificationProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
