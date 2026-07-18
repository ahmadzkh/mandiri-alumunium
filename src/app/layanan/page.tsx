import type { Metadata } from "next"
import { ServiceGrid } from "@/components/sections/service-grid"

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Daftar lengkap layanan Mandiri Alumunium: fabrikasi, pemasangan, service, pintu, jendela, kusen, kitchen set, lemari, rak, partisi, shower screen, etalase, dan custom aluminium.",
}

export default function ServicesPage() {
  return <ServiceGrid />
}
