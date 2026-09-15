import type { MetadataRoute } from "next";
import { cars } from "@/lib/data/cars";
import { policies } from "@/lib/data/policies";
import { siteUrl, indexable } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl || !indexable) return [];
  return ["/", "/bang-gia", "/tra-gop", ...cars.map(car => `/xe/${car.slug}`), ...Object.keys(policies).map(slug => `/chinh-sach/${slug}`)]
    .map(path => ({ url: new URL(path, siteUrl).toString() }));
}
