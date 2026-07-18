export interface PortfolioItem {
  slug: string
  title: string
  category: string
  location: string | null
  description: string
  alt: string
  isOriginalPhoto: true
  images: string[]
  order: number
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "pintu-jendela-aluminium-custom",
    title: "Proyek Pintu & Jendela Aluminium Custom",
    category: "Fabrikasi & Pemasangan",
    location: "Bekasi",
    description:
      "Pintu aluminium motif kayu, jendela aluminium warna hitam, dan kusen aluminium custom. Fabrikasi dan pemasangan sesuai ukuran bangunan. Setiap proyek dikerjakan melalui proses pengukuran, fabrikasi, hingga pemasangan agar hasil lebih presisi dan sesuai dengan kebutuhan pelanggan. Apabila Anda sedang merencanakan pembangunan atau renovasi rumah, silakan hubungi kami untuk konsultasi dan estimasi.",
    alt: "Pintu dan jendela aluminium custom motif kayu dan warna hitam di Bekasi",
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-1.jpeg"],
    order: 1,
  },
]
