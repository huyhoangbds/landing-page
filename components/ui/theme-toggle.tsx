"use client";
import { MotionButton } from "./motion-controls";
import { Moon, Sun } from "lucide-react";
import { useNotification } from "./notifications";
import { useTheme } from "next-themes";
export function ThemeToggle() {
  const { setTheme } = useTheme();
  const notify = useNotification();
  function changeTheme(theme: "light" | "dark") {
    setTheme(theme);
    notify({ message: theme === "dark" ? "Đã chuyển sang giao diện tối." : "Đã chuyển sang giao diện sáng.", tone: "success" });
  }
  return (
    <>
      <MotionButton
        className="icon-button theme-to-dark"
        onClick={() => changeTheme("dark")}
        aria-label="Chuyển sang nền tối"
      >
        <Moon size={19} />
      </MotionButton>
      <MotionButton
        className="icon-button theme-to-light"
        onClick={() => changeTheme("light")}
        aria-label="Chuyển sang nền sáng"
      >
        <Sun size={19} />
      </MotionButton>
    </>
  );
}
