import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services } from "@/data/services"
import { siteConfig } from "@/data/site-config"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.name,
    description: service.summary,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  return (
    <article className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Link href="/layanan" className="text-sm text-muted-foreground hover:text-foreground">
          &larr; Semua Layanan
        </Link>

        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">{service.name}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{service.description}</p>

        {service.useCases.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold tracking-tight">Cocok untuk</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {service.useCases.map((uc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {uc}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-10">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Konsultasi Gratis</h2>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Hubungi Mandiri Alumunium untuk konsultasi kebutuhan {service.name.toLowerCase()} di Bekasi, Jakarta, dan JABODETABEK.
              </p>
              <div className="mt-4">
                {siteConfig.contact.whatsapp ? (
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(service.ctaMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Tanya Via WhatsApp</Button>
                  </a>
                ) : (
                  <Link href="/kontak">
                    <Button>Hubungi Kami</Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </article>
  )
}
