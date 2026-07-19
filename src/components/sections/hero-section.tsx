"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { TextType } from "@/components/ui/text-type"
import { siteConfig } from "@/data/site-config"

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <Image
        src="/images/og/Product-hero.png"
        alt=""
        fill
        className="object-cover blur-[2px]"
        priority
      />
      {/* Overlay gradasi linier: kiri tembus pandang, kanan lebih solid */}
      <div className="absolute inset-0 bg-linear-to-r from-background/10 via-background/40 to-background/70" />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      <HeroBackground />

      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 md:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Bekasi &middot; Jakarta &middot; {siteConfig.serviceArea}
          </motion.p>

          <div className="relative">
            {/* Heading utama untuk Screen Reader */}
            <h1 className="sr-only">
              Fabrikasi & Pemasangan Aluminium
            </h1>

            {/* Teks statis tersembunyi untuk mereservasi ruang agar tinggi tidak melompat */}
            <div 
              aria-hidden="true" 
              className="invisible pointer-events-none select-none text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-[1.1]"
            >
              Fabrikasi & Pemasangan Aluminium
            </div>
            <div className="absolute inset-0" aria-hidden="true">
              <TextType
                text="Fabrikasi & Pemasangan Aluminium"
                as="div"
                typingSpeed={80}
                deletingSpeed={35}
                pauseDuration={3000}
                loop
                showCursor={true}
                cursorCharacter="▎"
                highlightText="Aluminium"
                highlightClass="text-blue-700"
                className="text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-[1.1] text-foreground drop-shadow-md"
              />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="mt-4 max-w-lg text-base leading-relaxed text-foreground/90 md:text-lg"
          >
            Solusi Profesional untuk Fabrikasi, Pemasangan, dan Perbaikan Aluminium &amp; Kaca. Melayani kebutuhan rumah, toko, kantor, hingga proyek komersial di Bekasi, Jakarta, dan JABODETABEK dengan pengalaman lebih dari 20 tahun, material berkualitas, serta pengerjaan yang rapi dan presisi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {siteConfig.contact.whatsapp ? (
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="btn-hover">Konsultasi via WhatsApp</Button>
              </a>
            ) : (
              <Link href="/kontak">
                <Button size="lg">Hubungi Kami</Button>
              </Link>
            )}
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="btn-hover">
                Lihat Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
