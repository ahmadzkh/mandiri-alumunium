"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site-config"
import { AnimatedTitle } from "@/components/ui/animated-title"
import { TextType } from "@/components/ui/text-type"

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <Image
        src="/images/og/Product-hero.png"
        alt=""
        fill
        className="object-cover blur-sm"
        priority
      />
      {/* Overlay gradasi linier: kiri tembus pandang, kanan lebih solid */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-background/40 to-background/70" />
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

          <div className="min-h-[90px] md:min-h-[132px]">
            <TextType
              text="Fabrikasi & Pemasangan Aluminium"
              as="h1"
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

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="mt-4 max-w-lg text-base leading-relaxed text-foreground/90 md:text-lg"
          >
            Solusi Profesional untuk Fabrikasi, Pemasangan, dan Perbaikan Aluminium &amp; Kaca. Melayani kebutuhan rumah, toko, kantor, hingga proyek komersial di Bekasi, Jakarta, dan JABODETABEK dengan pengalaman lebih dari 15 tahun, material berkualitas, serta pengerjaan yang rapi dan presisi.
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
