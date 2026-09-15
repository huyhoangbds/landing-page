import type { Metadata } from "next";
import { site } from "./data/site";

const configuredUrl = process.env.SITE_URL?.trim();
export const siteUrl = configuredUrl ? new URL(configuredUrl) : undefined;
if (siteUrl && (!["https:", "http:"].includes(siteUrl.protocol) || siteUrl.pathname !== "/" || siteUrl.search || siteUrl.hash || siteUrl.username || siteUrl.password)) {
  throw new Error("SITE_URL phải là URL gốc của website, ví dụ https://ten-mien.vn");
}
export const indexable = Boolean(siteUrl) && process.env.VERCEL_ENV !== "preview" && (!process.env.CF_PAGES_BRANCH || process.env.CF_PAGES_BRANCH === "main");

export function pageMetadata(title: string, description: string, path: string, image?: string): Metadata {
  const url = siteUrl ? new URL(path, siteUrl).toString() : undefined;
  const images = siteUrl && image ? [{ url: new URL(image, siteUrl).toString(), alt: title }] : undefined;
  return {
    title, description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: { title, description, siteName: site.name, locale: "vi_VN", type: "website", url, images },
    twitter: { card: images ? "summary_large_image" : "summary", title, description, images: images?.map(item => item.url) },
  };
}
