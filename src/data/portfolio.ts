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

// Tempat foto asli ketika sudah tersedia.
// Setiap item harus isOriginalPhoto: true.
// Foto belum ada — fallback section akan menampilkan placeholder.
export const portfolioItems: PortfolioItem[] = []
