"use client"

import Image from "next/image"
import { siteConfig } from "@/data/site-config"
import { portfolioItems } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageLightbox } from "@/components/ui/image-lightbox"
import Link from "next/link"
import { useState } from "react"

function PortfolioCard({ item }: { item: (typeof portfolioItems)[number] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <section id={item.slug} className="scroll-mt-20">
      <div className="rounded-xl border bg-card card-hover overflow-hidden">
        <button onClick={() => setLightboxOpen(true)} className="block w-full text-left">
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            {item.images[0] && (
              <Image
                src={item.images[0]}
                alt={item.alt}
                width={600}
                height={450}
                className="h-full w-full object-cover cursor-pointer"
              />
            )}
          </div>
        </button>
        <div className="p-4">
          <div className="flex flex-wrap gap-1.5 mb-2">
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">{item.badge.category}</Badge>
            <Badge variant="outline" className="text-[10px] px-1.5 py-0">{item.badge.services.join(", ")}</Badge>
            <Badge variant="outline" className="text-[10px] px-1.5 py-0">{item.badge.location}</Badge>
          </div>
          <h2 className="text-base font-semibold">{item.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
        </div>
      </div>

      {item.images[0] && (
        <ImageLightbox
          src={item.images[0]}
          alt={item.alt}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  )
}

export function PortfolioGrid() {
  return (
    <>
      {portfolioItems.length === 0 ? (
        <div className="mt-10 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/30 px-6 py-20 text-center">
          <p className="text-sm text-muted-foreground">
            Foto portfolio belum tersedia. Hubungi kami untuk melihat contoh pekerjaan.
          </p>
          {siteConfig.contact.whatsapp ? (
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button>Konsultasi via WhatsApp</Button>
            </a>
          ) : (
            <Link href="/kontak" className="mt-4">
              <Button>Hubungi Kami</Button>
            </Link>
          )}
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      )}

      {portfolioItems.length > 0 && siteConfig.contact.whatsapp && (
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="btn-hover">Konsultasi via WhatsApp</Button>
          </a>
        </div>
      )}
    </>
  )
}
