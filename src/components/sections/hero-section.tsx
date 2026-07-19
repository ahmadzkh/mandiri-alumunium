"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site-config"
import { AnimatedTitle } from "@/components/ui/animated-title"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/og/tampak-toko.jpg"
          alt="Tampak depan Mandiri Alumunium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

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

          <AnimatedTitle
            text="Fabrikasi & Pemasangan Aluminium"
            highlight="Aluminium"
            className="text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-[1.1]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
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
