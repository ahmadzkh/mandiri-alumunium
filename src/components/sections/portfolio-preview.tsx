"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site-config"
import { portfolioItems } from "@/data/portfolio"
import { Badge } from "@/components/ui/badge"
import { SkeletonShimmer } from "@/components/ui/skeleton-shimmer"
import { useState } from "react"

function PortfolioCard({ item }: { item: (typeof portfolioItems)[number] }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Link
      href={`/portfolio#${item.slug}`}
      className="group overflow-hidden rounded-xl border bg-card card-hover"
    >
      <SkeletonShimmer loaded={loaded}>
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          {item.images[0] && (
            <Image
              src={item.images[0]}
              alt={item.alt}
              width={600}
              height={450}
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-125"
              onLoad={() => setLoaded(true)}
            />
          )}
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-1.5 mb-2">
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">{item.badge.category}</Badge>
            <Badge variant="outline" className="text-[10px] px-1.5 py-0">{item.badge.services.join(", ")}</Badge>
            <Badge variant="outline" className="text-[10px] px-1.5 py-0">{item.badge.location}</Badge>
          </div>
          <p className="text-sm font-semibold">{item.title}</p>
          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{item.summary}</p>
        </div>
      </SkeletonShimmer>
    </Link>
  )
}

export function PortfolioPreview() {
  const items = portfolioItems.slice(0, 3)

  return (
    <section className="border-t py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Portfolio</h2>
          <p className="mt-2 text-muted-foreground">
            Foto asli pekerjaan Mandiri Alumunium.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/30 px-6 py-16 text-center">
            <p className="text-sm text-muted-foreground">
              Portfolio foto asli akan ditambahkan setelah dokumentasi proyek tersedia.
            </p>
            <Link href="/portfolio" className="mt-4">
              <Button variant="outline" className="btn-hover">Lihat Portfolio</Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          {items.length > 0 && (
            <Link href="/portfolio">
              <Button variant="outline" className="btn-hover">Lihat Semua Portfolio</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
