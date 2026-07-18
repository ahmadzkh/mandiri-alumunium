import type { SiteConfig } from "@/types/site-config"

export const siteConfig: SiteConfig = {
  business: {
    name: "Mandiri Alumunium",
    owner: "Eko Sabari",
    establishedYear: 2015,
    ownerExperience: "15+ tahun",
    businessType: "Perorangan",
  },
  contact: {
    // PRE-LAUNCH BLOCKER: nomor WhatsApp resmi belum tersedia.
    // Ganti dengan nomor resmi sebelum production launch.
    whatsapp: null,
    // PRE-LAUNCH BLOCKER: Google Maps URL belum tersedia.
    mapsUrl: null,
    phone: null,
    email: null,
  },
  primaryAreas: ["Bekasi", "Jakarta"],
  serviceArea: "JABODETABEK",
  analytics: {
    gaId: null,
    vercelAnalytics: true,
  },
  seo: {
    defaultTitle: "Mandiri Alumunium | Fabrikasi & Pemasangan Aluminium Bekasi Jakarta",
    titleTemplate: "%s | Mandiri Alumunium",
    defaultDescription:
      "Mandiri Alumunium — jasa fabrikasi, pemasangan, dan service aluminium untuk rumah, toko, kantor, dan proyek. Pengalaman 15+ tahun. Area Bekasi, Jakarta, JABODETABEK.",
    siteUrl: "https://mandiri-alumunium.vercel.app",
  },
}
