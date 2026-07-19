import type { Metadata } from "next"
import { PortfolioGrid } from "@/components/sections/portfolio-grid"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Foto asli pekerjaan Mandiri Alumunium: fabrikasi, pemasangan, dan service aluminium di Bekasi, Jakarta, dan JABODETABEK.",
}

export default function PortfolioPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Portfolio</h1>
        <p className="mt-2 text-muted-foreground">
          Foto asli pekerjaan Mandiri Alumunium. Portfolio akan diperbarui secara bertahap.
        </p>
        <PortfolioGrid />
      </div>
    </div>
  )
}
