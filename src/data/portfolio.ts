export interface PortfolioItem {
  slug: string
  title: string
  badge: {
    category: string
    service: string
    location: string
  }
  summary: string
  alt: string
  isOriginalPhoto: true
  images: string[]
  order: number
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "pintu-aluminium-motif-kayu",
    title: "Pintu Aluminium Motif Kayu",
    badge: {
      category: "Rumah Tinggal",
      service: "Fabrikasi & Pemasangan",
      location: "Bekasi",
    },
    summary:
      "Pembuatan pintu dan jendela aluminium untuk rumah tinggal menggunakan bahan aluminium berkualitas dengan desain motif kayu dan warna hitam minimalis. Seluruh proses dikerjakan sesuai ukuran dan kebutuhan pelanggan sehingga menghasilkan pemasangan yang rapi, presisi, dan fungsional.",
    alt: "Pintu aluminium motif kayu dan jendela aluminium warna hitam di Bekasi",
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-1.jpeg"],
    order: 1,
  },
]
