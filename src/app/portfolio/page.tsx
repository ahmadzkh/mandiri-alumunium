import type { Metadata } from "next"
import Image from "next/image"
import { siteConfig } from "@/data/site-config"
import { portfolioItems } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

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
              <section key={item.slug} id={item.slug} className="scroll-mt-20">
                <div className="overflow-hidden rounded-xl border bg-card card-hover">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    {item.images[0] && (
                      <Image
                        src={item.images[0]}
                        alt={item.alt}
                        width={600}
                        height={450}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
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
              </section>
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
      </div>
    </div>
  )
}
