import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { services } from "@/data/services"
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
            Mandiri Alumunium — jasa aluminium untuk rumah, toko, kantor, dan proyek. Pengalaman owner 15+ tahun sejak 2015. Area Bekasi, Jakarta, dan JABODETABEK.
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

      {/* Service preview — 3 unggulan + link ke semua layanan */}
      <div className="mx-auto max-w-6xl px-5 pb-12 md:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services
            .filter((s) => s.category === "unggulan")
            .slice(0, 3)
            .map((s, i) => (
              <Link key={s.slug} href={`/layanan/${s.slug}`} className={`animate-fade-in-up delay-${Math.min(i + 1, 5)}`}>
                <Card className="card-hover p-4">
                  <h3 className="text-sm font-semibold">{s.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{s.summary}</p>
                </Card>
              </Link>
            ))}
          {/* Card ke-4: link ke semua layanan */}
          <Link href="/layanan" className="animate-fade-in-up delay-4">
            <Card className="card-hover flex h-full items-center justify-center p-4 border-dashed border-muted-foreground/40">
              <span className="text-sm font-medium text-primary">
                Lihat Semua Layanan &rarr;
              </span>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
