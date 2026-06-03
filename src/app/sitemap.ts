import type { MetadataRoute } from "next";

const SITE_URL = "https://minnihanov.kz"; // TODO: заменить на реальный домен

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
