import type { Metadata } from "next"
import { siteConfig } from "@/data/site-config"
import { serviceAreas } from "@/data/areas"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi Mandiri Alumunium. Konsultasi fabrikasi, pemasangan, dan service aluminium untuk ${siteConfig.primaryAreas.join(", ")} dan ${siteConfig.serviceArea}.`,
}

export default function ContactPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Kontak</h1>
        <p className="mt-2 text-muted-foreground">
          Hubungi Mandiri Alumunium untuk konsultasi gratis.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {/* WhatsApp */}
          <div className="rounded-xl border bg-card p-6">
            <h2 className="text-sm font-semibold">WhatsApp</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.contact.whatsapp ? (
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              ) : (
                "Segera tersedia"
              )}
            </p>
            {siteConfig.contact.whatsapp ? (
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block"
              >
                <Button size="sm" className="btn-hover">Konsultasi via WhatsApp</Button>
              </a>
            ) : (
              <p className="mt-2 text-xs text-muted-foreground">Nomor WhatsApp akan diumumkan.</p>
            )}
          </div>

          {/* Area Layanan */}
          <div className="rounded-xl border bg-card p-6">
            <h2 className="text-sm font-semibold">Area Layanan</h2>
            <ul className="mt-2 space-y-1">
              {serviceAreas.map((a) => (
                <li key={a.slug} className="text-sm text-muted-foreground">
                  <Link href="/area-layanan" className="hover:text-foreground">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Jam Operasional */}
          <div className="rounded-xl border bg-card p-6 sm:col-span-2">
            <h2 className="text-sm font-semibold">Jam Operasional</h2>
            {siteConfig.contact.hours.split("\n").map((line, i) => (
              <p key={i} className="mt-1 text-sm text-muted-foreground">
                {line}
              </p>
            ))}
          </div>

          {/* Google Maps — link + embed */}
          <div className="rounded-xl border bg-card p-6 sm:col-span-2">
            <h2 className="text-sm font-semibold">Google Maps</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.contact.mapsUrl ? (
                <a
                  href={siteConfig.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  Lihat Lokasi di Google Maps
                </a>
              ) : (
                "Link Google Maps akan tersedia setelah profil bisnis diaktifkan."
              )}
            </p>
            {siteConfig.contact.mapsUrl && (
              <div className="mt-4 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2396.6800017979285!2d106.99016261239636!3d-6.141633190972329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bcf73dc213f%3A0xdaacbcba78efdc20!2sMANDIRI%20ALUMUNIUM!5e1!3m2!1sid!2sid!4v1784390966879!5m2!1sid!2sid"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Lokasi Mandiri Alumunium di Google Maps"
                  className="rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
