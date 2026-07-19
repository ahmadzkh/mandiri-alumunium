export interface PortfolioItem {
  slug: string
  title: string
  summary: string
  description: string
  badge: {
    category: string
    services: string[]
    materials: string[]
    location: string
  }
  alt: string
  featured: boolean
  isOriginalPhoto: true
  images: string[]
  order: number
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "pintu-jendela-aluminium-custom",
    title: "Pintu & Jendela Aluminium Custom",
    summary:
      "Pembuatan pintu, kusen, dan jendela aluminium custom untuk rumah bergaya minimalis modern dengan hasil pemasangan yang rapi dan presisi.",
    description:
      "Proyek pengerjaan pintu, kusen, dan jendela aluminium custom pada rumah tinggal bergaya minimalis modern di Bekasi. Menggunakan aluminium warna hitam yang dipadukan dengan panel motif kayu untuk memberikan tampilan modern sekaligus fungsional. Seluruh proses dilakukan mulai dari pengukuran, fabrikasi, hingga pemasangan sesuai ukuran bangunan.",
    badge: {
      category: "Rumah Tinggal",
      services: ["Fabrikasi", "Pemasangan"],
      materials: ["Aluminium", "Kaca", "Panel Motif Kayu"],
      location: "Bekasi",
    },
    alt: "Pintu dan jendela aluminium custom motif kayu dan warna hitam di Bekasi",
    featured: true,
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-1.jpeg"],
    order: 1,
  },
]
