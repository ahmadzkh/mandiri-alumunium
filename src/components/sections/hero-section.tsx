"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site-config"
import { AnimatedTitle } from "@/components/ui/animated-title"

function ExtrusionRails() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Overlay gradasi agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95" />

      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full opacity-40 dark:opacity-30"
      >
        <defs>
          <linearGradient id="rail-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="rail-grad-inv" x1="0" y1="0.1" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="60%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Rail 1 — profil kotak solid (paling depan) */}
        <g className="text-foreground" transform="translate(1440, 0) scale(-1, 1)">
          <rect x="60" y="80" width="180" height="28" rx="3" fill="url(#rail-grad)" stroke="currentColor" strokeWidth="1" />
          <rect x="70" y="86" width="100" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* Rail 2 — profil rel dengan slot */}
        <g className="text-foreground" transform="translate(1440, 0) scale(-1, 1)">
          <rect x="100" y="140" width="200" height="20" rx="3" fill="url(#rail-grad)" stroke="currentColor" strokeWidth="1" />
          <rect x="110" y="147" width="80" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
          <rect x="210" y="145" width="60" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        </g>

        {/* Rail 3 — profil palang */}
        <g className="text-foreground" transform="translate(1440, 0) scale(-1, 1)">
          <rect x="40" y="200" width="260" height="36" rx="4" fill="url(#rail-grad)" stroke="currentColor" strokeWidth="1" />
          <rect x="55" y="210" width="100" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
          <rect x="180" y="207" width="80" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        </g>

        {/* Rail 4 — profil U terbalik */}
        <g className="text-foreground" transform="translate(1440, 0) scale(-1, 1)">
          <rect x="120" y="280" width="220" height="24" rx="3" fill="url(#rail-grad)" stroke="currentColor" strokeWidth="1" />
          <rect x="130" y="288" width="60" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <rect x="250" y="286" width="50" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        </g>

        {/* Rail 5 — profil L */}
        <g className="text-foreground" transform="translate(1440, 0) scale(-1, 1)">
          <rect x="80" y="350" width="300" height="18" rx="2" fill="url(#rail-grad)" stroke="currentColor" strokeWidth="1" />
          <rect x="90" y="355" width="120" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* Rail 6 — profil tinggi dengan slot (paling belakang) */}
        <g className="text-foreground" transform="translate(1440, 0) scale(-1, 1)">
          <rect x="200" y="420" width="160" height="40" rx="4" fill="url(#rail-grad-inv)" stroke="currentColor" strokeWidth="1" />
          <rect x="215" y="430" width="50" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
          <rect x="285" y="435" width="40" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        </g>

        {/* Garis presisi horizontal tipis seperti potongan aluminium */}
        <line x1="0" y1="520" x2="1440" y2="520" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <line x1="0" y1="530" x2="1440" y2="530" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
        <line x1="0" y1="540" x2="1440" y2="540" stroke="currentColor" strokeWidth="0.5" opacity="0.03" />
      </svg>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      <ExtrusionRails />

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
