import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { services } from "@/data/services"

interface Props {
  variant?: "compact" | "full"
}

export function ServiceGrid({ variant = "full" }: Props) {
  const isCompact = variant === "compact"
  const items = isCompact
    ? services.filter((s) => s.category === "unggulan").slice(0, 3)
    : services

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Layanan Kami</h2>
          <p className="mt-2 text-muted-foreground">
            {isCompact
              ? "Layanan unggulan Mandiri Alumunium untuk rumah, toko, kantor, dan proyek."
              : "Fabrikasi, pemasangan, service, dan kustom aluminium untuk setiap kebutuhan."}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <Link key={s.slug} href={`/layanan/${s.slug}`} className={`animate-fade-in-up delay-${Math.min(i + 1, 5)}`}>
              <Card className="card-hover h-full">
                <CardHeader>
                  <CardTitle className="text-base">{s.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">{s.summary}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {isCompact && (
          <div className="mt-6 text-center">
            <Link
              href="/layanan"
              className="inline-block text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
            >
              Lihat Semua Layanan &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
