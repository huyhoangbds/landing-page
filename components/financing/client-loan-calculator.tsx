"use client";
import { useSyncExternalStore } from "react";
import { LoanCalculator } from "./loan-calculator";
import { LoadingState } from "@/components/ui/loading-state";
const subscribe = () => () => {};
const serverSnapshot = () => "";
function currentDate() {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Ho_Chi_Minh", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
  const value = (type: string) => parts.find(part => part.type === type)?.value;
  return `${value("year")}-${value("month")}-${value("day")}`;
}
export function ClientLoanCalculator() {
  const today = useSyncExternalStore(subscribe, currentDate, serverSnapshot);
  return today ? <LoanCalculator today={today} /> : <LoadingState label="Đang tải công cụ tính khoản vay…" />;
}
