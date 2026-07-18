import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { services } from "@/data/services"

export function ServiceGrid() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Layanan Kami</h2>
          <p className="mt-2 text-muted-foreground">
            Fabrikasi, pemasangan, service, dan kustom aluminium untuk kebutuhan Anda.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/layanan/${s.slug}`}>
              <Card className="h-full transition-colors hover:bg-muted/50">
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
      </div>
    </section>
  )
}
