"use client";

import { useEffect, useState } from "react";

export function OfferMonthTitle({ initialMonth }: { initialMonth: string }) {
  const [month, setMonth] = useState(initialMonth);
  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "numeric", timeZone: "Asia/Ho_Chi_Minh",
    });
    let timer: number;
    const update = () => {
      window.clearTimeout(timer);
      setMonth(formatter.format(new Date()));
      const dayMs = 24 * 60 * 60 * 1000;
      const vietnamOffsetMs = 7 * 60 * 60 * 1000;
      const untilMidnight = dayMs - ((Date.now() + vietnamOffsetMs) % dayMs);
      timer = window.setTimeout(update, untilMidnight + 100);
    };
    update();
    document.addEventListener("visibilitychange", update);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return <h2>ƯU ĐÃI THÁNG {month} XE VINFAST</h2>;
}
