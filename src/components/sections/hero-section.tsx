import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site-config"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 md:px-8">
        <div className="max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Bekasi &middot; Jakarta &middot; {siteConfig.serviceArea}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-[1.1]">
            Fabrikasi &amp; Pemasangan{" "}
            <span className="text-primary">Aluminium</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Jasa aluminium untuk rumah, toko, kantor, dan proyek. Pengalaman owner 15+ tahun sejak 2015. Area Bekasi, Jakarta, dan JABODETABEK.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {siteConfig.contact.whatsapp ? (
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="btn-hover">Konsultasi via WhatsApp</Button>
              </a>
            ) : (
              <Link href="/kontak">
                <Button size="lg">Hubungi Kami</Button>
              </Link>
            )}
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="btn-hover">
                Lihat Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
