export interface PortfolioItem {
  slug: string
  title: string
  summary: string
  description: string
  badge: {
    category: string
    services: string[]
    materials: string[]
    location: string
  }
  alt: string
  featured: boolean
  isOriginalPhoto: true
  images: string[]
  order: number
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "pintu-jendela-aluminium-custom",
    title: "Pintu & Jendela Aluminium Custom",
    summary:
      "Pembuatan pintu, kusen, dan jendela aluminium custom untuk rumah bergaya minimalis modern dengan hasil pemasangan yang rapi dan presisi.",
    description:
      "Proyek pengerjaan pintu, kusen, dan jendela aluminium custom pada rumah tinggal bergaya minimalis modern di Bekasi. Menggunakan aluminium warna hitam yang dipadukan dengan panel motif kayu untuk memberikan tampilan modern sekaligus fungsional. Seluruh proses dilakukan mulai dari pengukuran, fabrikasi, hingga pemasangan sesuai ukuran bangunan.",
    badge: {
      category: "Rumah Tinggal",
      services: ["Fabrikasi", "Pemasangan"],
      materials: ["Aluminium", "Kaca", "Panel Motif Kayu"],
      location: "Bekasi",
    },
    alt: "Pintu dan jendela aluminium custom motif kayu dan warna hitam di Bekasi",
    featured: true,
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-1.jpeg"],
    order: 1,
  },
  {
    slug: "kusen-pintu-kaca-rtuko-minimalis",
    title: "Kusen & Pintu Kaca Ruko Minimalis",
    summary:
      "Pembuatan kusen aluminium dan pintu kaca sliding untuk ruko dua lantai bergaya minimalis modern dengan hasil pemasangan yang presisi dan rapi.",
    description:
      "Proyek pengerjaan kusen aluminium hitam dan pintu geser kaca untuk bangunan ruko dua lantai di Bekasi. Menggunakan rangka aluminium warna hitam dengan kaca bening untuk tampilan modern dan pencahayaan optimal. Seluruh proses dilakukan mulai dari pengukuran, fabrikasi, hingga pemasangan sesuai ukuran bangunan.",
    badge: {
      category: "Ruko",
      services: ["Fabrikasi", "Pemasangan"],
      materials: ["Aluminium", "Kaca"],
      location: "Bekasi",
    },
    alt: "Kusen aluminium hitam dan pintu kaca sliding untuk ruko dua lantai di Bekasi",
    featured: false,
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-2.jpeg"],
    order: 2,
  },
  {
    slug: "pintu-jendela-kaca-mushola",
    title: "Pintu & Jendela Kaca Mushola",
    summary:
      "Pembuatan pintu dan jendela kaca dengan kusen aluminium putih untuk mushola dengan sentuhan kaligrafi pada panel kaca.",
    description:
      "Proyek pengerjaan pintu dan jendela kaca menggunakan kusen aluminium putih untuk bangunan mushola di Bekasi. Kaca dilengkapi motif kaligrafi dengan teknik frosted untuk memberikan privasi sekaligus nilai estetika islami. Seluruh proses dilakukan mulai dari pengukuran, fabrikasi, hingga pemasangan sesuai ukuran bangunan.",
    badge: {
      category: "Mushola",
      services: ["Fabrikasi", "Pemasangan"],
      materials: ["Aluminium", "Kaca Motif"],
      location: "Bekasi",
    },
    alt: "Pintu dan jendela kaca mushola dengan kusen aluminium putih dan motif kaligrafi di Bekasi",
    featured: false,
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-3.jpeg"],
    order: 3,
  },
  {
    slug: "kitchen-set-aluminium-putih",
    title: "Kabinet Dapur Aluminium Putih",
    summary:
      "Pembuatan kitchen set aluminium dengan finishing putih glossy dan handle hitam untuk dapur rumah bergaya minimalis modern.",
    description:
      "Proyek pembuatan kabinet dapur atas menggunakan rangka aluminium berkualitas dengan panel pintu finishing putih glossy. Dilengkapi sistem pintu sliding di bagian tengah dan swing door di sisi samping. Handle vertikal hitam dipilih untuk memberikan kontras elegan. Seluruh proses fabrikasi dan pemasangan disesuaikan dengan ukuran ruangan.",
    badge: {
      category: "Rumah Tinggal",
      services: ["Fabrikasi", "Pemasangan"],
      materials: ["Aluminium", "Kaca"],
      location: "Bekasi",
    },
    alt: "Kitchen set aluminium putih glossy dengan handle hitam untuk dapur minimalis di Bekasi",
    featured: false,
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-4.jpeg"],
    order: 4,
  },
  {
    slug: "pintu-kaca-swing-aluminium-hitam",
    title: "Pintu Kaca Swing Aluminium Hitam",
    summary:
      "Pembuatan pintu kaca swing dengan kusen aluminium hitam untuk akses rumah bergaya minimalis modern yang rapi dan presisi.",
    description:
      "Proyek pengerjaan pintu kaca swing menggunakan kusen aluminium warna hitam doff dengan kaca tempered bening. Desain minimalis dengan handle hitam panjang yang serasi memberikan tampilan bersih dan modern. Cocok untuk pintu akses utama maupun ruang dalam. Seluruh proses fabrikasi dan pemasangan dikerjakan sesuai ukuran bangunan.",
    badge: {
      category: "Rumah Tinggal",
      services: ["Fabrikasi", "Pemasangan"],
      materials: ["Aluminium", "Kaca Tempered"],
      location: "Bekasi",
    },
    alt: "Pintu kaca swing dengan kusen aluminium hitam untuk rumah minimalis di Bekasi",
    featured: false,
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-5.jpeg"],
    order: 5,
  },
  {
    slug: "kusen-pintu-partisi-coklat",
    title: "Kusen Pintu & Partisi Aluminium Coklat",
    summary:
      "Pembuatan kusen pintu dan partisi aluminium warna coklat untuk ruang toko dengan tampilan display yang optimal dan profesional.",
    description:
      "Proyek pengerjaan kusen pintu dan partisi aluminium warna coklat bronze untuk toko di Bekasi. Menggunakan kaca bening ukuran besar dengan sistem pintu swing di bagian tengah untuk akses masuk. Desain floor-to-ceiling memberikan visibilitas maksimal terhadap barang display. Seluruh proses fabrikasi dan pemasangan dikerjakan sesuai ukuran bangunan.",
    badge: {
      category: "Toko",
      services: ["Fabrikasi", "Pemasangan"],
      materials: ["Aluminium", "Kaca"],
      location: "Bekasi",
    },
    alt: "Kusen pintu dan partisi aluminium coklat bronze untuk toko di Bekasi",
    featured: false,
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-6.jpeg"],
    order: 6,
  },
  {
    slug: "pintu-utama-aluminium-hitam-double",
    title: "Pintu Utama Aluminium Hitam Double",
    summary:
      "Pembuatan pintu utama double swing dengan kusen aluminium hitam dan panel kaca samping untuk tampilan rumah yang elegan.",
    description:
      "Proyek pengerjaan pintu utama double swing menggunakan kusen aluminium warna hitam doff. Desain panel vertikal dengan tekstur groove memberikan kesan kokoh dan elegan. Dilengkapi sidelight kaca bening dengan kisi-kisi aluminium untuk pencahayaan alami. Seluruh proses fabrikasi dan pemasangan dikerjakan sesuai ukuran bangunan.",
    badge: {
      category: "Rumah Tinggal",
      services: ["Fabrikasi", "Pemasangan"],
      materials: ["Aluminium", "Kaca"],
      location: "Bekasi",
    },
    alt: "Pintu utama double swing aluminium hitam dengan kaca samping untuk rumah di Bekasi",
    featured: false,
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-7.jpeg"],
    order: 7,
  },
  {
    slug: "partisi-pintu-aluminium-motif-kayu",
    title: "Partisi & Pintu Aluminium Motif Kayu",
    summary:
      "Pembuatan partisi dan pintu aluminium dengan finishing motif kayu untuk interior ruang tamu atau kantor bergaya modern.",
    description:
      "Proyek pengerjaan partisi dinding dan pintu aluminium dengan finishing motif kayu coklat menggunakan teknologi sublimasi. Panel vertikal tinggi memberikan kesan ruang lebih lapang. Dilengkapi jendela kaca untuk pencahayaan dan satu pintu akses dengan handle stainless steel. Seluruh proses fabrikasi dan pemasangan dikerjakan sesuai ukuran ruangan.",
    badge: {
      category: "Interior",
      services: ["Fabrikasi", "Pemasangan"],
      materials: ["Aluminium Motif Kayu", "Kaca"],
      location: "Bekasi",
    },
    alt: "Partisi dan pintu aluminium motif kayu untuk interior di Bekasi",
    featured: false,
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-8.jpeg"],
    order: 8,
  },
  {
    slug: "kitchen-set-bawah-aluminium-putih",
    title: "Kitchen Set Bawah Aluminium",
    summary:
      "Pembuatan kabinet dapur bawah dengan finishing aluminium putih glossy, handle hitam, dan rak tarik untuk penyimpanan optimal.",
    description:
      "Proyek pembuatan kitchen set kabinet bawah menggunakan panel finishing putih glossy dengan handle bar vertikal hitam. Dilengkapi rak tarik kawat untuk penyimpanan peralatan dapur yang lebih praktis. Kabinet dipasang di bawah meja dapur dengan kompor tanam. Seluruh proses fabrikasi dan pemasangan disesuaikan dengan ukuran dan kebutuhan pelanggan.",
    badge: {
      category: "Rumah Tinggal",
      services: ["Fabrikasi", "Pemasangan"],
      materials: ["Aluminium", "Akrilik"],
      location: "Bekasi",
    },
    alt: "Kitchen set bawah aluminium putih glossy dengan rak tarik untuk dapur di Bekasi",
    featured: false,
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-9.jpeg"],
    order: 9,
  },
  {
    slug: "lemari-penyimpanan-aluminium-kaca",
    title: "Lemari Penyimpanan Aluminium & Kaca",
    summary:
      "Pembuatan lemari penyimpanan modular dengan kusen aluminium putih dan pintu kaca frosted untuk tampilan rapi dan fungsional.",
    description:
      "Proyek pembuatan lemari penyimpanan modular menggunakan kusen aluminium finishing putih dengan pintu kaca frosted. Unit terdiri dari kabinet pintu ganda atas dan bawah serta rak terbuka di bagian tengah untuk akses cepat. Desain modular memudahkan penambahan unit di kemudian hari. Seluruh proses fabrikasi dan pemasangan dikerjakan sesuai ukuran ruangan.",
    badge: {
      category: "Kantor",
      services: ["Fabrikasi", "Pemasangan"],
      materials: ["Aluminium", "Kaca Frosted"],
      location: "Bekasi",
    },
    alt: "Lemari penyimpanan aluminium putih dengan pintu kaca frosted untuk kantor di Bekasi",
    featured: false,
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-10.jpeg"],
    order: 10,
  },
  {
    slug: "pintu-jendela-aluminium-inkalum",
    title: "Pintu & Jendela Aluminium INKALUM",
    summary:
      "Pembuatan set pintu dan jendela aluminium hitam merek INKALUM dengan kaca kombinasi frosted dan bening untuk rumah tinggal.",
    description:
      "Proyek pengerjaan satu set pintu dan jendela menggunakan profil aluminium hitam merek INKALUM. Pintu utama menggunakan kaca frosted dengan kisi-kisi grid untuk privasi, sementara jendela samping menggunakan kaca bening untuk pencahayaan alami. Seluruh proses fabrikasi dan pemasangan dikerjakan sesuai ukuran bangunan.",
    badge: {
      category: "Rumah Tinggal",
      services: ["Fabrikasi", "Pemasangan"],
      materials: ["Aluminium INKALUM", "Kaca Frosted", "Kaca Bening"],
      location: "Bekasi",
    },
    alt: "Set pintu dan jendela aluminium hitam INKALUM dengan kaca kombinasi untuk rumah di Bekasi",
    featured: false,
    isOriginalPhoto: true,
    images: ["/images/portfolio/proyek-11.jpeg"],
    order: 11,
  },
]
