export interface ServiceArea {
  slug: string
  name: string
  priority: number
  description: string
  metaTitle: string
  metaDescription: string
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "bekasi",
    name: "Bekasi",
    priority: 1,
    description:
      "Area utama Mandiri Alumunium. Melayani fabrikasi, pemasangan, dan service aluminium untuk rumah, toko, dan proyek di Kota Bekasi, Bekasi Timur, Bekasi Barat, Bekasi Selatan, Bekasi Utara, Jatiasih, Jatisampurna, Mustika Jaya, Pondok Melati, Pondok Gede, Rawalumbu, Bantar Gebang, Cikarang, Cibitung, Tambun, dan sekitarnya.",
    metaTitle: "Jasa Aluminium Bekasi | Mandiri Alumunium",
    metaDescription:
      "Jasa aluminium di Bekasi — fabrikasi, pemasangan, dan service aluminium. Pintu, jendela, kusen, kitchen set, partisi. Pengalaman 20+ tahun.",
  },
  {
    slug: "jakarta",
    name: "Jakarta",
    priority: 2,
    description:
      "Area utama Mandiri Alumunium. Melayani fabrikasi, pemasangan, dan service aluminium untuk rumah, toko, dan proyek di Jakarta Pusat, Jakarta Selatan, Jakarta Timur, Jakarta Barat, Jakarta Utara, dan sekitarnya.",
    metaTitle: "Jasa Aluminium Jakarta | Mandiri Alumunium",
    metaDescription:
      "Jasa aluminium di Jakarta — fabrikasi, pemasangan, dan service aluminium. Pintu, jendela, kusen, partisi, etalase. Pengalaman 20+ tahun.",
  },
  {
    slug: "jabodetabek",
    name: "JABODETABEK",
    priority: 3,
    description:
      "Mandiri Alumunium melayani proyek aluminium di seluruh area JABODETABEK: Bekasi, Jakarta, Bogor, Depok, Tangerang, dan sekitarnya. Setiap proyek dikerjakan oleh tim berpengalaman dengan standar kualitas tinggi.",
    metaTitle: "Jasa Aluminium JABODETABEK | Mandiri Alumunium",
    metaDescription:
      "Jasa aluminium di JABODETABEK — fabrikasi, pemasangan, dan service aluminium. Proyek rumah, toko, kantor, dan kontraktor. Pengalaman 20+ tahun.",
  },
]
