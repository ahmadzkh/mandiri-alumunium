import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site-config"

export function PortfolioPreview() {
  return (
    <section className="border-t py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Portfolio</h2>
          <p className="mt-2 text-muted-foreground">
            Foto asli pekerjaan Mandiri Alumunium.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/30 px-6 py-16 text-center">
          <p className="text-sm text-muted-foreground">
            Portfolio foto asli akan ditambahkan setelah dokumentasi proyek tersedia.
          </p>
          <Link href="/portfolio" className="mt-4">
            <Button variant="outline">Lihat Portfolio</Button>
          </Link>
        </div>

        <div className="mt-8 text-center">
          {siteConfig.contact.whatsapp ? (
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Konsultasi via WhatsApp</Button>
            </a>
          ) : (
            <Link href="/kontak">
              <Button>Hubungi Kami</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
