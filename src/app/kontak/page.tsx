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
                <Button size="sm">Konsultasi via WhatsApp</Button>
              </a>
            ) : (
              <p className="mt-2 text-xs text-muted-foreground">Nomor WhatsApp akan diumumkan.</p>
            )}
          </div>

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
          </div>
        </div>
      </div>
    </div>
  )
}
