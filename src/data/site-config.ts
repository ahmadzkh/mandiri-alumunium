import type { SiteConfig } from "@/types/site-config"

export const siteConfig: SiteConfig = {
  business: {
    name: "Mandiri Alumunium",
    owner: "Eko Sabari",
    establishedYear: 2018,
    ownerExperience: "20+ tahun",
    businessType: "Perorangan",
  },
  contact: {
    whatsapp: "6285311127515",
    mapsUrl: "https://maps.app.goo.gl/akqgUB31zAvinnDC8",
    phone: "6285311127515",
    email: "ekomandirialumunium@gmail.com",
    hours: "Senin\u2013Sabtu 08.00\u201317.00\nMinggu & Hari Libur: Tutup",
  },
  primaryAreas: ["Bekasi", "Jakarta"],
  serviceArea: "JABODETABEK",
  analytics: {
    gaId: "G-P0K776BPDV",
    vercelAnalytics: true,
  },
  seo: {
    defaultTitle: "Mandiri Alumunium | Fabrikasi & Pemasangan Aluminium Bekasi Jakarta",
    titleTemplate: "%s | Mandiri Alumunium",
    defaultDescription:
      "Mandiri Alumunium, jasa fabrikasi, pemasangan, dan service aluminium untuk rumah, toko, kantor, dan proyek. Pengalaman 20+ tahun. Area Bekasi, Jakarta, JABODETABEK.",
    siteUrl: "https://mandiri-alumunium.vercel.app",
  },
}
