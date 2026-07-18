import type { MetadataRoute } from "next"

const baseUrl = "https://mandiri-alumunium.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/layanan",
    "/portfolio",
    "/tentang",
    "/area-layanan",
    "/kontak",
  ]

  const services = [
    "/layanan/fabrikasi-aluminium",
    "/layanan/pemasangan-aluminium",
    "/layanan/service-aluminium",
    "/layanan/pintu-aluminium",
    "/layanan/jendela-aluminium",
    "/layanan/kusen-aluminium",
    "/layanan/kitchen-set-aluminium",
    "/layanan/lemari-aluminium",
    "/layanan/rak-aluminium",
    "/layanan/partisi-aluminium",
    "/layanan/shower-screen",
    "/layanan/etalase",
    "/layanan/penggantian-kaca",
    "/layanan/acp",
    "/layanan/custom-aluminium",
  ]

  return [...routes, ...services].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }))
}
