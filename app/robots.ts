export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { siteUrl, indexable } from "@/lib/seo";
export default function robots(): MetadataRoute.Robots {
  return indexable && siteUrl
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: new URL("/sitemap.xml", siteUrl).toString() }
    : { rules: { userAgent: "*", disallow: "/" } };
}
