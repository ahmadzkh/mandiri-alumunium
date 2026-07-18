import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site-config"

export function FinalCtaSection() {
  return (
    <section className="border-t bg-primary/5 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Siap Memulai Proyek Aluminium Anda?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Konsultasi gratis untuk kebutuhan fabrikasi, pemasangan, atau service aluminium di Bekasi, Jakarta, dan JABODETABEK.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {siteConfig.contact.whatsapp ? (
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">Konsultasi via WhatsApp</Button>
            </a>
          ) : (
            <Link href="/kontak">
              <Button size="lg">Hubungi Kami</Button>
            </Link>
          )}
          <Link href="/layanan">
            <Button variant="outline" size="lg">
              Lihat Layanan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
