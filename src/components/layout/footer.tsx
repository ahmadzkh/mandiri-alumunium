import Link from "next/link"
import { siteConfig } from "@/data/site-config"
import { services } from "@/data/services"
import { serviceAreas } from "@/data/areas"

export function Footer() {
  return (
    <footer className="border-t bg-card" role="contentinfo">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
              Mandiri<span className="text-primary">Alumunium</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Jasa fabrikasi, pemasangan, dan service aluminium untuk rumah, toko, kantor, dan proyek sejak 2018.
            </p>
            <p className="text-xs text-muted-foreground">
              Owner: {siteConfig.business.owner} &middot; {siteConfig.business.ownerExperience} pengalaman
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Layanan</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/layanan/${s.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/layanan"
                  className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Lihat semua layanan &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Area Layanan</h3>
            <ul className="space-y-2">
              {serviceAreas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/area-layanan`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Kontak</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Area utama: {siteConfig.primaryAreas.join(", ")}</p>
              <p>Proyek: {siteConfig.serviceArea}</p>
              {siteConfig.contact.email && <p>{siteConfig.contact.email}</p>}
              {siteConfig.contact.phone && <p>{siteConfig.contact.phone}</p>}
              {siteConfig.contact.whatsapp && (
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  Konsultasi via WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
