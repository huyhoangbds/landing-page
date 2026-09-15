import { site } from "@/lib/data/site";
import styles from "./zalo-button.module.css";

export function ZaloButton() {
  return (
    <a
      className={styles.button}
      href={`https://zalo.me/${site.tel}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat Zalo với Huy Hoàng Ôtô VinFast: ${site.phone}`}
      title={`Chat Zalo: ${site.phone}`}
    >
      <span aria-hidden="true">Zalo</span>
    </a>
  );
}
