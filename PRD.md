# PRD.md — Mandiri Alumunium Company Profile

Status: Draft for approval  
Source of truth: `context.md`  
Product type: static-first company profile website  
Target stack: Next.js App Router, TypeScript, TailwindCSS, shadcn/ui, Vercel

---

## 1. Executive Summary

Mandiri Alumunium Company Profile adalah website premium modern untuk usaha keluarga Mandiri Alumunium milik Eko Sabari. Website berfungsi sebagai aset branding, katalog layanan, portfolio, kanal Local SEO, dan jalur konversi ke WhatsApp.

Produk ini bukan ecommerce, bukan aplikasi dashboard, dan bukan sistem transaksi. Nilai utamanya adalah membuat calon pelanggan di Bekasi, Jakarta, dan JABODETABEK cepat memahami layanan aluminium yang tersedia, melihat bukti pekerjaan melalui portfolio foto asli, lalu menghubungi Mandiri Alumunium melalui WhatsApp atau Google Maps.

Arsitektur v1.0 harus static-first tanpa backend, database, atau CMS. Semua konten layanan dan portfolio menggunakan data lokal terstruktur agar cepat dimuat, murah dioperasikan, mudah dideploy ke Vercel, dan tetap siap dikembangkan menjadi sistem lebih besar di project terpisah.

## 2. Business Background

### 2.1 Identitas Usaha

| Aspek | Detail |
|---|---|
| Nama usaha | Mandiri Alumunium |
| Owner | Eko Sabari |
| Bentuk usaha | Perorangan / family business |
| Berdiri | 2015 |
| Pengalaman owner | 15+ tahun |
| Area utama | Bekasi dan Jakarta |
| Area proyek | JABODETABEK |

### 2.2 Layanan

Mandiri Alumunium bergerak pada fabrikasi, pemasangan, dan service produk aluminium untuk kebutuhan rumah, toko, kantor, dan kontraktor. Layanan yang masuk cakupan website:

- Fabrikasi Aluminium
- Pemasangan Aluminium
- Service Aluminium
- Pintu Aluminium
- Jendela Aluminium
- Kusen Aluminium
- Kitchen Set Aluminium
- Lemari Aluminium
- Rak Aluminium
- Partisi Aluminium
- Shower Screen
- Etalase
- Penggantian Kaca
- ACP terbatas
- Custom Aluminium

Layanan unggulan yang harus mendapat penekanan visual dan konten:

1. Fabrikasi
2. Pembuatan Interior
3. Pembuatan Eksterior
4. Pemasangan

### 2.3 Business Need

Mandiri Alumunium membutuhkan website yang meningkatkan kepercayaan calon pelanggan sebelum kontak pertama. Usaha lokal berbasis jasa sangat bergantung pada bukti kerja, kejelasan area layanan, kecepatan akses mobile, dan CTA yang langsung mengarah ke WhatsApp. Website harus mengurangi friksi tanya-jawab awal dan membantu calon pelanggan menjelaskan kebutuhan proyeknya lebih cepat.

## 3. Goals

### 3.1 Product Goals

| ID | Goal | Success Metric |
|---|---|---|
| G-001 | Menampilkan brand Mandiri Alumunium sebagai usaha aluminium premium, modern, dan profesional | Pengunjung dapat memahami positioning bisnis dalam 5 detik dari hero section |
| G-002 | Menjelaskan layanan utama dan turunan secara jelas | Semua layanan dari `context.md` tersedia dalam struktur layanan dan dapat diakses dari homepage |
| G-003 | Meningkatkan konversi ke WhatsApp | CTA WhatsApp tersedia pada hero, layanan, portfolio, contact, dan sticky mobile CTA |
| G-004 | Mendukung Local SEO untuk Bekasi, Jakarta, dan JABODETABEK | Metadata, structured data, sitemap, robots, OpenGraph, dan halaman area layanan tersedia |
| G-005 | Menampilkan portfolio dengan foto asli | Portfolio hanya memakai foto asli pekerjaan Mandiri Alumunium; gambar AI tidak boleh disebut sebagai portfolio |
| G-006 | Menjaga performa tinggi pada mobile | Lighthouse Performance minimal 95 pada halaman utama setelah build production |
| G-007 | Menjaga aksesibilitas tinggi | Lighthouse Accessibility 100 pada halaman utama dan halaman kontak |

### 3.2 Business Goals

- Memperkuat kredibilitas usaha keluarga yang sudah berdiri sejak 2015.
- Memperjelas cakupan pekerjaan agar calon pelanggan tidak ragu menghubungi.
- Mengarahkan calon pelanggan ke WhatsApp dengan pesan awal yang relevan berdasarkan konteks halaman.
- Meningkatkan peluang muncul pada pencarian lokal seperti “jasa aluminium Bekasi”, “kusen aluminium Jakarta”, dan “etalase aluminium JABODETABEK”.

## 4. Non Goals

Ruang lingkup berikut tidak dikerjakan pada v1.0:

- Ecommerce, checkout, payment gateway, cart, invoice, atau pembayaran online.
- Backend API, database, CMS, dashboard admin, autentikasi, atau role management.
- Sistem booking otomatis atau estimasi harga otomatis.
- Upload portfolio dari admin panel.
- Blog dinamis berbasis CMS.
- Marketplace katalog produk dengan stok.
- Chatbot AI.
- Parallax, loading screen, cursor animation, atau efek interaktif berat.
- Penggunaan gambar Google atau gambar pihak ketiga tanpa hak pakai.
- Klaim sertifikasi, jumlah proyek, testimoni, atau client list yang belum tersedia di konteks resmi.

Dashboard admin dinyatakan sebagai project terpisah bila dibutuhkan setelah v1.0 stabil.

## 5. Target Users

| Segment | Kebutuhan Utama | Konversi Utama |
|---|---|---|
| Pemilik rumah | Pintu, jendela, kusen, kitchen set, lemari, shower screen, penggantian kaca | WhatsApp konsultasi kebutuhan rumah |
| Pemilik toko | Etalase, rak, partisi, pintu, service aluminium | WhatsApp permintaan survei / penawaran |
| Kantor | Partisi, pintu, jendela, maintenance, custom aluminium | WhatsApp diskusi kebutuhan kantor |
| Kontraktor | Subkontrak fabrikasi dan pemasangan aluminium | WhatsApp koordinasi proyek |

## 6. User Personas

### 6.1 Rina — Pemilik Rumah

- Lokasi: Bekasi
- Tujuan: mencari jasa pembuatan kusen, pintu, jendela, atau kitchen set aluminium.
- Perilaku: membuka website dari mobile setelah mencari di Google.
- Kebutuhan: bukti pekerjaan, area layanan, dan tombol WhatsApp yang mudah ditemukan.
- Hambatan: tidak tahu istilah teknis aluminium dan belum punya detail ukuran.
- Website harus membantu: memberi ringkasan layanan, contoh proyek, dan pesan WhatsApp awal yang memandu kebutuhan.

### 6.2 Dedi — Pemilik Toko

- Lokasi: Jakarta Timur / Bekasi
- Tujuan: membuat atau memperbaiki etalase dan rak aluminium.
- Perilaku: membandingkan beberapa penyedia jasa dari hasil pencarian lokal.
- Kebutuhan: portfolio toko, respon cepat, dan alamat / area layanan jelas.
- Hambatan: khawatir hasil pekerjaan tidak rapi atau tidak tahan lama.
- Website harus membantu: menonjolkan pengalaman owner 15+ tahun dan portfolio foto asli.

### 6.3 Sari — Staff Kantor

- Lokasi: JABODETABEK
- Tujuan: mencari vendor partisi, pintu, atau maintenance aluminium.
- Perilaku: membuka beberapa website dari desktop, lalu meneruskan kontak ke atasan.
- Kebutuhan: profil usaha, layanan, coverage area, dan kanal kontak formal.
- Hambatan: butuh vendor yang terlihat profesional.
- Website harus membantu: menyediakan halaman tentang, layanan, dan kontak yang kredibel.

### 6.4 Arman — Kontraktor

- Lokasi: proyek JABODETABEK
- Tujuan: mencari partner fabrikasi dan pemasangan aluminium.
- Perilaku: langsung mencari bukti pengalaman dan jenis pekerjaan yang bisa ditangani.
- Kebutuhan: cakupan layanan, portfolio, dan CTA cepat untuk koordinasi teknis.
- Hambatan: tidak butuh copywriting panjang; butuh kepastian jasa tersedia.
- Website harus membantu: menyediakan navigasi cepat ke layanan unggulan dan WhatsApp.

## 7. User Journey

### 7.1 Discovery melalui Google

1. Pengguna mencari layanan aluminium lokal.
2. Pengguna melihat hasil pencarian dengan title, meta description, dan area layanan yang relevan.
3. Pengguna membuka homepage atau halaman layanan spesifik.
4. Hero menjelaskan bisnis, area, layanan utama, dan CTA WhatsApp.
5. Pengguna membaca ringkasan layanan dan melihat portfolio.
6. Pengguna menekan WhatsApp dengan pesan awal yang sudah terisi.

### 7.2 Discovery melalui Referral

1. Pengguna menerima link website dari owner atau pelanggan lama.
2. Pengguna membuka link di mobile.
3. Website memperlihatkan kredibilitas usaha, layanan, dan bukti pekerjaan.
4. Pengguna membuka Google Maps untuk melihat area atau menekan WhatsApp.

### 7.3 Journey Kontraktor

1. Kontraktor membuka website dari link atau pencarian.
2. Kontraktor langsung menuju bagian layanan unggulan atau portfolio.
3. Kontraktor melihat jenis pekerjaan yang relevan.
4. Kontraktor mengirim WhatsApp untuk diskusi ukuran, lokasi, dan timeline proyek.

### 7.4 Failure Journey yang Harus Dicegah

- Pengguna tidak menemukan tombol WhatsApp dalam 5 detik.
- Pengguna melihat foto generik yang terasa bukan pekerjaan asli.
- Pengguna tidak tahu apakah Mandiri Alumunium melayani wilayahnya.
- Website lambat karena gambar tidak dioptimalkan.
- Mobile navigation menutup CTA atau sulit digunakan.

## 8. Functional Requirements

### 8.1 Core Website

| ID | Requirement | Priority | Acceptance Criteria |
|---|---|---|---|
| FR-001 | Website menyediakan homepage premium modern untuk Mandiri Alumunium | P0 | Hero menampilkan nama usaha, positioning, area utama, pengalaman owner, dan CTA WhatsApp + Google Maps |
| FR-002 | Website menampilkan seluruh daftar layanan dari `context.md` | P0 | Tidak ada layanan dari konteks yang hilang; layanan unggulan tampil lebih dominan |
| FR-003 | Website menyediakan struktur halaman layanan | P0 | Halaman daftar layanan tersedia; halaman detail layanan statis dapat dibuat untuk layanan SEO-priority |
| FR-004 | Website menyediakan portfolio berbasis foto asli | P0 | Portfolio tidak memakai gambar Google; foto AI hanya boleh digunakan sebagai ilustrasi non-portfolio dengan label yang jelas |
| FR-005 | Website menyediakan halaman tentang usaha | P1 | Halaman menjelaskan owner, tahun berdiri, pengalaman, jenis usaha, dan area proyek tanpa klaim tambahan yang tidak tersedia |
| FR-006 | Website menyediakan halaman kontak | P0 | WhatsApp, Google Maps, area layanan, dan CTA konsultasi tampil jelas; data yang belum tersedia dicatat sebagai pre-launch dependency |
| FR-007 | Website menyediakan CTA WhatsApp kontekstual | P0 | CTA dari setiap layanan membawa pesan awal berbeda sesuai layanan yang dilihat |
| FR-008 | Website menyediakan CTA Google Maps | P1 | Tombol Maps tersedia pada hero/contact/footer setelah link Maps resmi tersedia |
| FR-009 | Website mendukung dark mode | P1 | Tema gelap tersedia dan sesuai arah premium industrial; kontras teks tetap memenuhi WCAG AA |
| FR-010 | Website menggunakan motion ringan | P2 | Animasi tidak mengganggu, tidak blocking, tidak memakai parallax, dan menghormati reduced motion |

### 8.2 Content Management Static

| ID | Requirement | Priority | Acceptance Criteria |
|---|---|---|---|
| FR-011 | Konten layanan disimpan sebagai data lokal terstruktur | P0 | Implementasi tidak membutuhkan backend, database, atau CMS |
| FR-012 | Konten portfolio disimpan sebagai data lokal terstruktur | P0 | Setiap item portfolio memiliki judul, kategori, lokasi opsional, foto, alt text, dan status foto asli |
| FR-013 | Konten SEO disusun per halaman | P0 | Setiap halaman memiliki title, description, canonical path, OpenGraph, dan metadata lokal |
| FR-014 | Konten mudah diperbarui oleh developer | P1 | Perubahan layanan atau portfolio dapat dilakukan dari satu sumber data lokal tanpa menyentuh banyak komponen UI |

### 8.3 Navigation and UX

| ID | Requirement | Priority | Acceptance Criteria |
|---|---|---|---|
| FR-015 | Navigasi utama ringkas dan mobile-first | P0 | Menu utama maksimal 6 item: Home, Layanan, Portfolio, Tentang, Area, Kontak |
| FR-016 | Sticky mobile CTA tersedia | P0 | Tombol WhatsApp tetap mudah dijangkau pada viewport mobile tanpa menutup konten penting |
| FR-017 | Footer berisi informasi bisnis dan shortcut layanan | P1 | Footer memuat brand, ringkasan, layanan utama, area, dan kontak |
| FR-018 | Semua CTA memiliki label aksi yang jelas | P0 | Tidak ada tombol generik seperti “Submit”; label menjelaskan tindakan seperti “Konsultasi via WhatsApp” |

### 8.4 SEO and Indexability

| ID | Requirement | Priority | Acceptance Criteria |
|---|---|---|---|
| FR-019 | Website menyediakan sitemap.xml | P0 | Semua route publik v1.0 masuk sitemap |
| FR-020 | Website menyediakan robots.txt | P0 | Search engine dapat mengindeks halaman publik dan menemukan sitemap |
| FR-021 | Website menggunakan LocalBusiness structured data | P0 | JSON-LD memuat nama usaha, area layanan, jenis layanan, URL, dan kontak setelah data resmi tersedia |
| FR-022 | Website menyediakan OpenGraph image | P1 | Link preview menampilkan brand Mandiri Alumunium secara profesional |
| FR-023 | Website siap diverifikasi di Google Search Console | P1 | Mekanisme verifikasi tersedia melalui metadata/file sesuai pilihan deploy |

### 8.5 Analytics

| ID | Requirement | Priority | Acceptance Criteria |
|---|---|---|---|
| FR-024 | Website mendukung Google Analytics | P1 | GA4 measurement ID dapat dikonfigurasi tanpa mengubah banyak file |
| FR-025 | Website menggunakan Vercel Analytics | P1 | Page views dapat dipantau dari Vercel setelah deploy |
| FR-026 | Event konversi dicatat | P1 | Click WhatsApp, click Google Maps, click phone, dan service CTA dapat dilacak |

## 9. Non Functional Requirements

| Category | Requirement | Target |
|---|---|---|
| Performance | Halaman utama cepat pada mobile | Lighthouse Performance ≥95 setelah production build |
| Accessibility | Navigasi, kontras, heading, alt text, dan focus state memenuhi standar | Lighthouse Accessibility 100 pada homepage dan contact |
| SEO | Metadata, structured data, sitemap, robots, dan OpenGraph valid | Lighthouse SEO 100 pada halaman utama |
| Best Practices | Tidak ada insecure asset, console error, atau konfigurasi buruk | Lighthouse Best Practices 100 |
| Maintainability | Konten layanan dan portfolio tidak tersebar di komponen | Data lokal terpusat dan typed |
| Security | Tidak ada secret di client bundle atau repo | Semua ID analytics/env public diberi prefix yang sesuai; secret tidak digunakan pada v1.0 |
| Reliability | Website tetap dapat dibuka tanpa backend | Semua halaman statis dapat di-build di Vercel |
| Responsiveness | Layout nyaman dari 360px sampai desktop lebar | Tidak ada horizontal scroll tidak sengaja pada mobile |
| Browser Support | Browser modern utama | Chrome, Safari, Edge, Firefox versi modern |
| Cost | Operasional murah | Hosting Vercel static-first tanpa server/database berbayar pada v1.0 |

## 10. Information Architecture

### 10.1 Content Hierarchy

1. Brand promise
   - Mandiri Alumunium
   - Premium, modern, industrial, family business
   - Berdiri 2015, owner berpengalaman 15+ tahun
2. Conversion entry
   - WhatsApp sebagai CTA utama
   - Google Maps sebagai CTA sekunder
3. Service discovery
   - Layanan unggulan
   - Semua layanan aluminium
   - Halaman layanan detail untuk SEO
4. Trust proof
   - Portfolio foto asli
   - Narasi pengalaman dan area layanan
5. Local relevance
   - Bekasi
   - Jakarta
   - JABODETABEK
6. Contact and next action
   - WhatsApp contextual message
   - Maps
   - Area layanan

### 10.2 Content Model

| Entity | Fields Minimum | Notes |
|---|---|---|
| Service | name, slug, category, summary, description, useCases, CTA message, SEO title, SEO description | Data lokal, typed, static |
| PortfolioItem | title, category, location, image, alt, description, isOriginalPhoto | `isOriginalPhoto` wajib true untuk portfolio |
| ServiceArea | name, slug, description, priority | Bekasi dan Jakarta prioritas |
| SiteConfig | business name, owner, established year, experience, WhatsApp, Maps URL, analytics IDs | Nomor/link yang belum tersedia menjadi pre-launch dependency |
| SEOConfig | title, description, canonical, ogImage, structuredData fields | Terpusat per route |

## 11. Website Structure

### 11.1 Approved v1.0 Route Structure

| Route | Purpose | Priority | Rendering Strategy |
|---|---|---|---|
| `/` | Homepage, brand, layanan utama, portfolio preview, CTA | P0 | Static |
| `/layanan` | Daftar semua layanan | P0 | Static |
| `/layanan/fabrikasi-aluminium` | Detail layanan fabrikasi | P0 | Static |
| `/layanan/pemasangan-aluminium` | Detail layanan pemasangan | P0 | Static |
| `/layanan/service-aluminium` | Detail layanan service | P1 | Static |
| `/layanan/pintu-jendela-kusen-aluminium` | Detail pintu, jendela, kusen | P1 | Static |
| `/layanan/kitchen-set-lemari-rak-aluminium` | Detail interior aluminium | P1 | Static |
| `/layanan/partisi-shower-screen-etalase` | Detail partisi, shower screen, etalase | P1 | Static |
| `/portfolio` | Galeri pekerjaan asli | P0 | Static |
| `/tentang` | Profil Mandiri Alumunium | P1 | Static |
| `/area-layanan` | Bekasi, Jakarta, JABODETABEK | P0 | Static |
| `/kontak` | WhatsApp, Maps, area layanan | P0 | Static |
| `/robots.txt` | Crawling rules | P0 | Static metadata route |
| `/sitemap.xml` | Sitemap public pages | P0 | Static metadata route |

### 11.2 Route Rules

- Route harus pendek, deskriptif, dan berbahasa Indonesia karena target pencarian lokal berbahasa Indonesia.
- Service page dibuat static dari data lokal, bukan manual copy-paste halaman.
- Dynamic route boleh dipakai hanya bila tetap static-generated dan tidak membutuhkan backend.
- Halaman yang belum punya konten asli tidak boleh dipublish sebagai thin content.

## 12. Feature List

### 12.1 P0 Features

- Homepage premium mobile-first.
- Service overview lengkap.
- Detail layanan prioritas.
- Portfolio foto asli.
- Contact page dengan WhatsApp CTA.
- Sticky mobile WhatsApp CTA.
- Local SEO metadata, sitemap, robots, structured data.
- Static-first Vercel deployment.
- Responsive navigation.
- Accessibility baseline.

### 12.2 P1 Features

- Dark mode yang konsisten dengan brand industrial premium.
- Google Maps CTA setelah link resmi tersedia.
- GA4 + Vercel Analytics.
- OpenGraph brand image.
- Area layanan page.
- Motion ringan untuk reveal dan hover.

### 12.3 P2 Features

- Portfolio filter by category.
- FAQ ringkas per layanan.
- Before/after gallery bila foto tersedia.
- Download/share contact card.
- Case-study static untuk proyek terbaik.

## 13. Local SEO Strategy

### 13.1 Keyword Themes

Prioritas keyword disusun berdasarkan layanan dan area. Keyword final harus divalidasi saat implementasi menggunakan Search Console setelah launch.

| Cluster | Examples |
|---|---|
| Brand | Mandiri Alumunium, Mandiri Aluminium Bekasi |
| Core service | jasa aluminium Bekasi, jasa aluminium Jakarta, fabrikasi aluminium JABODETABEK |
| Product service | pintu aluminium Bekasi, jendela aluminium Jakarta, kusen aluminium Bekasi |
| Commercial | jasa etalase aluminium Bekasi, kitchen set aluminium Jakarta, shower screen aluminium |
| Repair | service aluminium Bekasi, penggantian kaca Bekasi |

### 13.2 On-Page SEO Rules

- Setiap halaman punya satu H1 yang jelas.
- Title memuat layanan + area bila relevan.
- Meta description mengarah ke tindakan: konsultasi WhatsApp atau lihat portfolio.
- Gunakan copy alami; jangan keyword stuffing.
- Nama usaha, area utama, dan layanan utama harus muncul di homepage.
- Alt text foto menjelaskan objek pekerjaan, bukan sekadar “gambar”.
- Internal link menghubungkan homepage, layanan, area, portfolio, dan kontak.

### 13.3 Local SEO Assets

- Structured data tipe `LocalBusiness` atau subtype yang paling relevan.
- `areaServed`: Bekasi, Jakarta, JABODETABEK.
- `hasOfferCatalog` untuk daftar layanan.
- Google Maps link setelah tersedia.
- Google Search Console verification.
- Sitemap dan robots aktif dari awal.

### 13.4 Content Constraints

- Jangan mengklaim alamat, jam buka, nomor telepon, rating, review, atau sertifikasi sebelum data resmi tersedia.
- Jangan membuat halaman area granular seperti per kecamatan bila tidak ada konten spesifik dan bukti layanan.
- Jangan menggunakan gambar Google untuk portfolio atau SEO images.

## 14. Conversion Strategy

### 14.1 Primary Conversion: WhatsApp

WhatsApp menjadi CTA utama di seluruh website. CTA harus muncul pada:

- Hero homepage.
- Service cards.
- Detail layanan.
- Portfolio item.
- Contact page.
- Sticky mobile bar.
- Footer.

### 14.2 WhatsApp Message Strategy

Pesan awal harus berbeda sesuai konteks:

| Context | Message Intent |
|---|---|
| Homepage | Konsultasi umum jasa aluminium |
| Layanan fabrikasi | Permintaan fabrikasi aluminium |
| Layanan pemasangan | Permintaan pemasangan aluminium |
| Service aluminium | Permintaan perbaikan/service |
| Portfolio | Pertanyaan pekerjaan serupa |
| Area layanan | Pertanyaan apakah lokasi pengguna tercover |

### 14.3 Secondary Conversion: Google Maps

Google Maps menjadi CTA sekunder untuk mendukung trust dan navigasi lokal. Link resmi belum tersedia di `context.md`, sehingga implementasi harus menunggu URL Maps resmi atau profil Google Business.

### 14.4 Conversion UX Rules

- Tombol utama harus kontras dan terlihat tanpa scroll pada mobile hero.
- CTA tidak boleh bersaing terlalu banyak; WhatsApp selalu prioritas.
- Copy CTA harus spesifik: “Konsultasi via WhatsApp”, “Tanya Fabrikasi Aluminium”, “Lihat Lokasi di Google Maps”.
- Form kontak tidak dibutuhkan pada v1.0 karena menambah friction dan membutuhkan backend.

## 15. Analytics Strategy

### 15.1 Tools

- Google Analytics 4 untuk event dan acquisition tracking.
- Vercel Analytics untuk page views dan Web Vitals.
- Google Search Console untuk query, indexing, dan Local SEO feedback.

### 15.2 Event Taxonomy

| Event | Trigger | Properties |
|---|---|---|
| `cta_whatsapp_click` | Klik CTA WhatsApp | page, section, service_slug, message_type |
| `cta_maps_click` | Klik Google Maps | page, section |
| `cta_phone_click` | Klik nomor telepon bila tersedia | page, section |
| `service_card_click` | Klik card layanan | service_slug, source_section |
| `portfolio_item_view` | Portfolio item dibuka/dilihat | category, location |
| `navigation_click` | Klik menu utama | label, target_path |

### 15.3 Analytics Rules

- Analytics tidak boleh memblokir render utama.
- Script pihak ketiga dimuat setelah prioritas konten utama.
- Event harus memakai nama konsisten dan tidak berubah tanpa alasan.
- Tidak melacak data pribadi pelanggan di client.
- Nomor WhatsApp dan Maps URL bukan secret, tetapi tetap dikelola dari konfigurasi terpusat.

## 16. Performance Goals

| Metric | Target | Verification |
|---|---|---|
| Lighthouse Performance | ≥95 | Production build, mobile profile |
| Lighthouse Accessibility | 100 | Homepage dan contact |
| Lighthouse SEO | 100 | Homepage dan service page |
| Lighthouse Best Practices | 100 | Homepage |
| LCP | <2.5s | Vercel Analytics / Lighthouse |
| CLS | <0.1 | Lighthouse / Web Vitals |
| INP | <200ms | Field data setelah traffic tersedia |
| Initial JS | Minimal | Bundle analyzer if needed |
| Image weight | Optimized | Next/Image or static optimized image policy |

Performance decisions:

- Server Components by default.
- Client Components only for real interactivity.
- No heavy animation library unless justified.
- Static data imported at build time.
- Fonts limited to maximum two families, preferably variable fonts through `next/font`.
- Images compressed and sized for responsive delivery.

## 17. Accessibility Goals

| Area | Goal |
|---|---|
| Semantic HTML | Header, nav, main, section, footer, list, and button/link semantics correct |
| Keyboard | Semua menu, CTA, dialog, dan filter dapat digunakan dengan keyboard |
| Focus | Focus visible jelas pada dark dan light theme |
| Contrast | Text dan CTA memenuhi WCAG AA; target homepage/contact Accessibility 100 |
| Motion | Respect `prefers-reduced-motion`; no parallax |
| Images | Semua foto portfolio memiliki alt text deskriptif |
| Touch target | CTA mobile minimal 44x44px |
| Navigation | Mobile menu tidak menjebak focus dan mudah ditutup |
| Content | Heading hierarchy berurutan dan tidak dipakai untuk styling semata |

## 18. Technical Constraints

### 18.1 Required Stack

- Next.js App Router.
- TypeScript.
- TailwindCSS.
- shadcn/ui.
- Static Site / static-first rendering.
- Vercel deployment.
- Google Analytics, Vercel Analytics, Google Search Console.
- Playwright, typecheck, lint, build, visual test, smoke test.

### 18.2 Explicit Constraints

- Tidak ada backend.
- Tidak ada database.
- Tidak ada CMS.
- Tidak ada checkout.
- Tidak ada pembayaran online.
- Tidak ada ecommerce.
- Portfolio memakai data lokal.
- Motion harus ringan.
- Dark mode didukung.
- Scope tetap company profile; admin dashboard project terpisah.

### 18.3 Open Pre-Launch Data Dependencies

Data berikut belum tersedia di `context.md` dan harus dikonfirmasi sebelum launch production:

| Data | Required For | Impact if Missing |
|---|---|---|
| Nomor WhatsApp resmi | Primary CTA | CTA tidak bisa dipublish final |
| Google Maps URL / Google Business Profile | Maps CTA, Local SEO | CTA Maps dan structured data tidak lengkap |
| Alamat atau service base resmi | Local SEO | Structured data harus dibatasi ke areaServed tanpa alamat |
| Foto portfolio asli | Portfolio | Portfolio tidak boleh diisi gambar generik |
| Logo / brand mark bila ada | Header, favicon, OpenGraph | Perlu fallback wordmark |
| Jam operasional bila ingin ditampilkan | Structured data, contact | Jangan tampilkan bila belum resmi |

## 19. Risks

| Risk | Impact | Probability | Mitigation |
|---|---|---|---|
| Foto asli belum tersedia | Portfolio lemah dan trust turun | High | Siapkan layout portfolio yang dapat menerima foto bertahap; jangan pakai gambar Google |
| Nomor WhatsApp / Maps belum tersedia | Konversi utama tidak final | Medium | Jadikan data kontak sebagai gate pre-launch |
| Scope creep ke admin dashboard | Timeline dan kompleksitas naik | High | Tegaskan admin dashboard sebagai project terpisah |
| Desain terlalu generik seperti template | Brand premium gagal terbentuk | Medium | Gunakan visual signature aluminium/industrial dan review desain sebelum build |
| Motion terlalu berat | Performance turun | Medium | Batasi animasi ke micro-interaction dan reveal sederhana |
| Thin content SEO | Ranking sulit dan indexing buruk | Medium | Publish hanya halaman dengan konten cukup dan relevan |
| Klaim bisnis tidak terverifikasi | Risiko trust dan legal | Medium | Hanya gunakan data dari konteks/owner; klaim tambahan harus disetujui |
| Overengineering | Maintenance sulit untuk company profile | High | Static-first, local data, no backend/database/CMS di v1.0 |

## 20. Roadmap

### Phase 1 — Documentation and Approval

- Finalisasi PRD, DESIGN, CLAUDE, AGENTS, dan TASK.
- Konfirmasi kontak resmi, Maps, logo, dan foto portfolio.
- Approve scope v1.0 tanpa backend/CMS/admin.

### Phase 2 — Foundation

- Scaffold Next.js App Router + TypeScript + TailwindCSS + shadcn/ui.
- Setup lint, typecheck, build, Playwright, formatting, and Vercel readiness.
- Buat data lokal untuk site config, services, portfolio, and SEO.

### Phase 3 — Brand and Design System

- Finalisasi visual direction premium modern industrial.
- Buat design tokens, typography, spacing, components baseline.
- Implement light/dark theme dengan kontras valid.

### Phase 4 — Core Pages and Components

- Build navigation, footer, hero, service sections, portfolio, CTA blocks.
- Build homepage, services, portfolio, about, area, contact.
- Implement WhatsApp contextual CTA.

### Phase 5 — SEO, Analytics, Accessibility, Performance

- Add metadata, structured data, sitemap, robots, OpenGraph.
- Add GA4/Vercel Analytics events.
- Run Lighthouse, Playwright, smoke, visual review.

### Phase 6 — Deployment and Launch

- Deploy preview to Vercel.
- Fix blockers.
- Connect domain.
- Submit sitemap to Search Console.
- Monitor analytics and Web Vitals.

## 21. Acceptance Criteria

### 21.1 Product Acceptance

- Semua layanan dari `context.md` tampil di website.
- Layanan unggulan tampil jelas di homepage.
- Website menjelaskan Mandiri Alumunium, owner, tahun berdiri, pengalaman, area utama, dan area proyek.
- CTA WhatsApp tersedia dan bekerja pada desktop/mobile.
- CTA Google Maps tersedia bila link resmi sudah diberikan.
- Portfolio hanya menggunakan foto asli atau fallback non-portfolio yang tidak menyesatkan.
- Tidak ada ecommerce, checkout, backend, database, CMS, atau admin dashboard pada v1.0.

### 21.2 Technical Acceptance

- Project menggunakan Next.js App Router, TypeScript, TailwindCSS, shadcn/ui.
- Build production berhasil.
- Typecheck berhasil.
- Lint berhasil.
- Playwright smoke test berhasil untuk route utama.
- Lighthouse target tercapai pada homepage production build: Performance ≥95, Accessibility 100, SEO 100, Best Practices 100.
- Sitemap dan robots dapat diakses.
- Metadata dan OpenGraph valid.
- Structured data valid sesuai data resmi yang tersedia.

### 21.3 UX Acceptance

- Pengguna mobile dapat menemukan CTA WhatsApp dalam 5 detik.
- Navigasi utama tidak lebih dari 6 item.
- Tidak ada horizontal scroll tidak sengaja pada mobile.
- Focus state terlihat jelas.
- Dark theme tidak menurunkan keterbacaan.
- Motion tidak memblokir interaksi dan menghormati reduced motion.

### 21.4 SEO Acceptance

- Setiap route publik punya title dan description unik.
- Halaman layanan prioritas punya H1, copy layanan, CTA, internal link, dan metadata lokal.
- Sitemap memuat semua route publik.
- Robots mengizinkan crawling halaman publik.
- Google Search Console siap diverifikasi.

## 22. Future Improvements

Future improvements hanya dipertimbangkan setelah v1.0 live dan data penggunaan tersedia.

- Static case studies untuk proyek terbaik.
- FAQ per layanan berdasarkan pertanyaan pelanggan nyata.
- Halaman area lebih granular bila ada bukti layanan dan konten unik per area.
- Portfolio before/after bila foto tersedia.
- Testimoni pelanggan bila ada izin dan sumber asli.
- Blog edukasi ringan berbasis file lokal bila Local SEO membutuhkan konten tambahan.
- Admin dashboard sebagai project terpisah.
- CMS ringan sebagai project terpisah bila frekuensi update konten tinggi.
- Estimasi harga atau request quote form hanya jika proses bisnis siap menangani input terstruktur.
