import type { Metadata } from "next"
import { siteConfig } from "@/data/site-config"
import { portfolioItems } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div key={item.slug} className="overflow-hidden rounded-xl border bg-card">
                <div className="aspect-[4/3] bg-muted" />
                <div className="p-4">
                  <p className="text-sm font-medium">{item.title}</p>
                  {item.location && (
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
