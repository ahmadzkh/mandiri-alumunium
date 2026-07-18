import type { Metadata } from "next"
import { siteConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Tentang",
  description: `Profil Mandiri Alumunium — usaha aluminium milik ${siteConfig.business.owner}. Berdiri sejak ${siteConfig.business.establishedYear} dengan pengalaman ${siteConfig.business.ownerExperience}. Area Bekasi, Jakarta, JABODETABEK.`,
}

export default function AboutPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Tentang Mandiri Alumunium</h1>

        <section className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">Mandiri Alumunium</strong> adalah usaha perorangan di bidang
            fabrikasi, pemasangan, dan service aluminium. Berdiri sejak <strong className="text-foreground">{siteConfig.business.establishedYear}</strong>{" "}
            dan dimiliki oleh <strong className="text-foreground">{siteConfig.business.owner}</strong>, yang memiliki pengalaman lebih dari {siteConfig.business.ownerExperience} di industri aluminium.
          </p>
          <p>
            Kami melayani pembuatan dan pemasangan pintu aluminium, jendela aluminium, kusen aluminium, kitchen set,
            lemari, rak, partisi, shower screen, etalase, penggantian kaca, dan proyek aluminium custom.
            Setiap pekerjaan dikerjakan dengan presisi tinggi menggunakan material berkualitas.
          </p>
          <p>
            Area layanan utama kami meliputi <strong className="text-foreground">{siteConfig.primaryAreas.join(", ")}</strong>{" "}
            dan seluruh area <strong className="text-foreground">{siteConfig.serviceArea}</strong>.
            Kami melayani pemilik rumah, pemilik toko, kantor, dan kontraktor yang membutuhkan solusi aluminium
            berkualitas untuk proyek mereka.
          </p>
        </section>
      </div>
    </div>
  )
}
