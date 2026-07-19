export interface Service {
  slug: string
  name: string
  category: "unggulan" | "fabrikasi" | "pemasangan" | "interior" | "eksterior" | "kaca"
  summary: string
  description: string
  useCases: string[]
  ctaMessage: string
  order: number
}

export const services: Service[] = [
  {
    slug: "fabrikasi-aluminium",
    name: "Fabrikasi Aluminium",
    category: "unggulan",
    summary: "Fabrikasi aluminium custom untuk rumah, toko, kantor, dan proyek. Semua profil dipotong dan dirakit presisi.",
    description:
      "Mandiri Alumunium melayani fabrikasi aluminium untuk berbagai kebutuhan. Dengan pengalaman owner 20+ tahun sejak 2018, setiap pesanan dikerjakan dengan presisi tinggi menggunakan material berkualitas. Cocok untuk proyek residensial, komersial, dan industrial di Bekasi, Jakarta, dan JABODETABEK.",
    useCases: ["Pintu aluminium custom", "Jendela aluminium", "Kusen aluminium", "Partisi ruang", "Etalase toko"],
    ctaMessage: "Halo Mandiri Alumunium, saya ingin konsultasi fabrikasi aluminium.",
    order: 1,
  },
  {
    slug: "pemasangan-aluminium",
    name: "Pemasangan Aluminium",
    category: "unggulan",
    summary: "Pemasangan profesional produk aluminium. Rapi, presisi, dan tahan lama.",
    description:
      "Tim Mandiri Alumunium berpengalaman dalam pemasangan aluminium untuk proyek rumah, toko, dan kantor. Setiap pemasangan diperiksa kerapihan sambungan dan fungsi sebelum serah terima. Melayani area Bekasi, Jakarta, dan JABODETABEK.",
    useCases: ["Pasang pintu aluminium", "Pasang jendela aluminium", "Pasang kusen", "Pasang partisi aluminium", "Pasang shower screen"],
    ctaMessage: "Halo Mandiri Alumunium, saya mau konsultasi pemasangan aluminium.",
    order: 2,
  },
  {
    slug: "service-aluminium",
    name: "Service Aluminium",
    category: "unggulan",
    summary: "Perbaikan, perawatan, dan penggantian komponen aluminium yang rusak atau aus.",
    description:
      "Layanan service aluminium Mandiri Alumunium mencakup perbaikan pintu dan jendela macet, penggantian engsel dan handle, perbaikan partisi, serta perawatan kusen. Cepat, rapi, dan bergaransi pekerjaan. Area Bekasi dan Jakarta.",
    useCases: ["Pintu aluminium macet/seret", "Engsel dan handle rusak", "Kaca pecah perlu diganti", "Perbaikan partisi kantor"],
    ctaMessage: "Halo Mandiri Alumunium, saya butuh service aluminium.",
    order: 3,
  },
  {
    slug: "pintu-aluminium",
    name: "Pintu Aluminium",
    category: "fabrikasi",
    summary: "Pintu aluminium custom untuk rumah, toko, dan kantor. Tersedia berbagai profil dan warna.",
    description:
      "Pintu aluminium Mandiri Alumunium dirancang kokoh, ringan, dan tahan karat. Cocok untuk pintu utama rumah, pintu toko, pintu kantor, dan pintu kamar. Bisa dikombinasikan dengan kaca atau panel aluminium penuh.",
    useCases: ["Pintu utama rumah", "Pintu toko/ruko", "Pintu kantor", "Pintu kamar mandi aluminium", "Pintu lipat aluminium"],
    ctaMessage: "Halo Mandiri Alumunium, saya tertarik dengan pintu aluminium.",
    order: 4,
  },
  {
    slug: "jendela-aluminium",
    name: "Jendela Aluminium",
    category: "fabrikasi",
    summary: "Jendela aluminium dengan sistem geser, buka, atau fixed. Presisi dan anti bocor.",
    description:
      "Jendela aluminium dari Mandiri Alumunium tersedia dalam sistem geser (sliding), buka (casement), dan fixed. Desain ramping namun kokoh, dilengkapi karet seal anti bocor. Cocok untuk rumah dan gedung di Bekasi, Jakarta, dan JABODETABEK.",
    useCases: ["Jendela geser aluminium", "Jendela casement aluminium", "Jendela fixed aluminium", "Jendela kamar mandi"],
    ctaMessage: "Halo Mandiri Alumunium, saya mau pesan jendela aluminium.",
    order: 5,
  },
  {
    slug: "kusen-aluminium",
    name: "Kusen Aluminium",
    category: "fabrikasi",
    summary: "Kusen aluminium presisi untuk pintu dan jendela. Lebih kuat dari kayu, bebas rayap.",
    description:
      "Kusen aluminium Mandiri Alumunium dibuat dari profil aluminium berkualitas dengan ketebalan sesuai standar konstruksi. Tidak lapuk, tidak dimakan rayap, dan perawatan minimal. Tersedia untuk pintu, jendela, dan kombinasi.",
    useCases: ["Kusen pintu aluminium", "Kusen jendela aluminium", "Kusen kombinasi pintu-jendela", "Kusen toko/ruko"],
    ctaMessage: "Halo Mandiri Alumunium, saya butuh kusen aluminium.",
    order: 6,
  },
  {
    slug: "kitchen-set-aluminium",
    name: "Kitchen Set Aluminium",
    category: "interior",
    summary: "Kitchen set aluminium modern, anti air, dan tahan lama. Cocok untuk dapur minimalis.",
    description:
      "Kitchen set aluminium dari Mandiri Alumunium menawarkan solusi dapur modern yang tahan air, anti karat, dan mudah dibersihkan. Tersedia berbagai konfigurasi kabinet atas, bawah, dan meja dapur. Desain minimalis industrial sesuai brand Mandiri Alumunium.",
    useCases: ["Dapur rumah minimalis", "Dapur apartemen", "Pantry kantor", "Dapur restoran"],
    ctaMessage: "Halo Mandiri Alumunium, saya mau konsultasi kitchen set aluminium.",
    order: 7,
  },
  {
    slug: "lemari-aluminium",
    name: "Lemari Aluminium",
    category: "interior",
    summary: "Lemari aluminium custom: pakaian, dapur, pantry, dan gudang. Rapi dan tahan lama.",
    description:
      "Lemari aluminium Mandiri Alumunium dirancang sesuai kebutuhan ruang. Bebas rayap, anti lembab, dan perawatan mudah. Cocok untuk lemari pakaian, lemari dapur, lemari pantry, dan lemari gudang.",
    useCases: ["Lemari pakaian aluminium", "Lemari dapur aluminium", "Lemari pantry", "Lemari gudang/workshop"],
    ctaMessage: "Halo Mandiri Alumunium, saya tertarik dengan lemari aluminium.",
    order: 8,
  },
  {
    slug: "rak-aluminium",
    name: "Rak Aluminium",
    category: "interior",
    summary: "Rak aluminium custom untuk toko, gudang, dan rumah. Kuat dan ringan.",
    description:
      "Rak aluminium Mandiri Alumunium bisa dibuat sesuai ukuran dan kebutuhan spesifik. Cocok untuk rak display toko, rak gudang, rak dapur, dan rak penyimpanan. Material aluminium ringan namun kuat menahan beban.",
    useCases: ["Rak display toko", "Rak gudang", "Rak dapur aluminium", "Rak penyimpanan rumah"],
    ctaMessage: "Halo Mandiri Alumunium, saya butuh rak aluminium.",
    order: 9,
  },
  {
    slug: "partisi-aluminium",
    name: "Partisi Aluminium",
    category: "eksterior",
    summary: "Partisi aluminium untuk ruang kantor, rumah, dan usaha. Fleksibel dan modern.",
    description:
      "Partisi aluminium Mandiri Alumunium memberikan solusi pembatas ruang yang rapi, modern, dan mudah dipasang. Cocok untuk kantor, rumah sakit, sekolah, dan ruang komersial. Tersedia dengan panel kaca polos, buram, atau aluminium penuh.",
    useCases: ["Partisi ruang kantor", "Partisi rumah", "Pembatas ruang toko", "Partisi klinik/praktik"],
    ctaMessage: "Halo Mandiri Alumunium, saya tertarik partisi aluminium.",
    order: 10,
  },
  {
    slug: "shower-screen",
    name: "Shower Screen",
    category: "kaca",
    summary: "Shower screen aluminium dan kaca untuk kamar mandi modern. Anti bocor dan mudah dibersihkan.",
    description:
      "Shower screen Mandiri Alumunium dibuat dari kombinasi aluminium dan kaca tempered. Desain minimalis dengan engsel dan handle berkualitas. Tersedia model sliding, swing, dan fixed. Cocok untuk kamar mandi rumah dan apartemen.",
    useCases: ["Kamar mandi utama", "Kamar mandi apartemen", "Kamar mandi hotel/villa", "Kamar mandi kantor"],
    ctaMessage: "Halo Mandiri Alumunium, saya mau pasang shower screen.",
    order: 11,
  },
  {
    slug: "etalase",
    name: "Etalase",
    category: "fabrikasi",
    summary: "Etalase aluminium dan kaca untuk display produk toko. Profesional dan menarik.",
    description:
      "Etalase aluminium Mandiri Alumunium dibuat untuk display produk yang rapi dan profesional. Kombinasi aluminium kokoh dengan kaca bening. Cocok untuk toko, showroom, apotek, dan ruang pamer.",
    useCases: ["Etalase toko kelontong", "Etalase apotek", "Etalase showroom", "Etalase makanan/minuman"],
    ctaMessage: "Halo Mandiri Alumunium, saya butuh etalase aluminium.",
    order: 12,
  },
  {
    slug: "penggantian-kaca",
    name: "Penggantian Kaca",
    category: "kaca",
    summary: "Ganti kaca pintu, jendela, etalase, dan partisi. Cepat dan rapi.",
    description:
      "Layanan penggantian kaca Mandiri Alumunium untuk pintu, jendela, etalase, partisi, dan shower screen. Tersedia kaca polos, kaca buram, kaca tempered, dan kaca laminasi. Pemasangan rapi dengan seal karet baru.",
    useCases: ["Kaca pintu pecah", "Kaca jendela retak", "Kaca etalase pecah", "Kaca partisi rusak"],
    ctaMessage: "Halo Mandiri Alumunium, saya butuh ganti kaca.",
    order: 13,
  },
  {
    slug: "acp",
    name: "ACP (Aluminium Composite Panel)",
    category: "eksterior",
    summary: "Pemasangan ACP untuk fasad bangunan dan papan nama. Terbatas.",
    description:
      "Mandiri Alumunium melayani pemasangan Aluminium Composite Panel (ACP) untuk eksterior bangunan, papan nama, dan reklame. Pengerjaan rapi dengan sistem rangka yang kokoh. Layanan terbatas — konsultasikan kebutuhan Anda.",
    useCases: ["Fasad ruko/rumah", "Papan nama perusahaan", "Tutup dinding eksterior", "Renovasi tampak depan"],
    ctaMessage: "Halo Mandiri Alumunium, saya tertarik dengan ACP.",
    order: 14,
  },
  {
    slug: "custom-aluminium",
    name: "Custom Aluminium",
    category: "fabrikasi",
    summary: "Pengerjaan aluminium custom sesuai gambar atau kebutuhan spesifik.",
    description:
      "Butuh aluminium dengan bentuk, ukuran, atau fungsi khusus? Mandiri Alumunium menerima pesanan custom sesuai gambar, contoh, atau deskripsi. Konsultasikan kebutuhan Anda untuk solusi aluminium yang tepat.",
    useCases: ["Furnitur custom aluminium", "Komponen mesin/alat", "Prototype produk aluminium", "Proyek khusus arsitektur"],
    ctaMessage: "Halo Mandiri Alumunium, saya mau konsultasi custom aluminium.",
    order: 15,
  },
]
