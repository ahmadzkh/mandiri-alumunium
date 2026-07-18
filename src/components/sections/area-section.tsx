import Link from "next/link"
import { serviceAreas } from "@/data/areas"


export function AreaSection() {
  return (
    <section className="border-t py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Area Layanan</h2>
        <p className="mt-2 text-muted-foreground">
          Kami melayani fabrikasi, pemasangan, dan service aluminium di area berikut.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((a) => (
            <Link
              key={a.slug}
              href="/area-layanan"
              className="rounded-xl border bg-card p-5 transition-colors hover:bg-muted/50"
            >
              <h3 className="text-base font-semibold">{a.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-3">{a.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
