import type { Metadata } from "next"
import { serviceAreas } from "@/data/areas"
import { siteConfig } from "@/data/site-config"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Area Layanan",
  description: `Area layanan Mandiri Alumunium: Bekasi, Jakarta, dan ${siteConfig.serviceArea}. Fabrikasi, pemasangan, dan service aluminium untuk rumah, toko, kantor, dan proyek.`,
}

export default function AreaPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Area Layanan</h1>
        <p className="mt-2 text-muted-foreground">
          Mandiri Alumunium melayani proyek aluminium di area berikut.
        </p>

        <div className="mt-10 grid gap-6">
          {serviceAreas.map((area) => (
            <div key={area.slug} className="rounded-xl border bg-card p-6">
              <h2 className="text-xl font-semibold tracking-tight">{area.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border bg-primary/5 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Tidak yakin apakah area Anda tercover? Hubungi kami untuk konfirmasi.
          </p>
          <div className="mt-4">
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
      </div>
    </div>
  )
}
