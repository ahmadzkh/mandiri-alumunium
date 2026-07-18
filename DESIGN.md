# DESIGN.md — Mandiri Alumunium Company Profile

Status: Draft for approval  
Design intent: premium modern industrial, minimal, professional, family business  
Primary medium: mobile-first website, static-first, conversion-oriented

---

## 1. Brand Direction

Mandiri Alumunium harus terlihat seperti usaha aluminium lokal yang rapi, berpengalaman, dan bisa dipercaya untuk pekerjaan rumah, toko, kantor, dan proyek kontraktor. Brand tidak boleh terasa seperti marketplace murah, bengkel generik, atau template konstruksi yang penuh stock photo.

### 1.1 Brand Attributes

| Attribute | Meaning in Design |
|---|---|
| Premium | Ruang napas luas, typography tegas, visual bersih, tidak ramai |
| Modern | Layout editorial, responsive, interaksi halus, content hierarchy jelas |
| Industrial | Warna metal, garis presisi, tekstur aluminium ringan, grid konstruksi |
| Minimal | Elemen sedikit tetapi tajam; tidak ada dekorasi tanpa fungsi |
| Professional | CTA jelas, informasi bisnis kredibel, copy langsung |
| Family Business | Nada manusiawi, tidak korporat berlebihan; pengalaman owner ditampilkan sebagai trust proof |
| Mobile First | Konten utama, CTA, dan navigasi nyaman di layar kecil |

### 1.2 Positioning Statement

Mandiri Alumunium adalah jasa fabrikasi, pemasangan, dan service aluminium untuk Bekasi, Jakarta, dan JABODETABEK dengan pengalaman owner 15+ tahun sejak 2015.

### 1.3 Design Thesis

Hero harus mengkomunikasikan tiga hal dalam 5 detik:

1. Ini website Mandiri Alumunium.
2. Layanan utamanya aluminium untuk rumah, toko, kantor, dan proyek.
3. Pengunjung bisa langsung konsultasi melalui WhatsApp.

### 1.4 Signature Element

Signature visual: **aluminium extrusion rails**. Layout memakai garis tipis presisi seperti profil aluminium, panel dengan sudut minimal, dan highlight metalik yang menyerupai pantulan pada permukaan aluminium. Elemen ini memberi identitas industrial tanpa jatuh ke glassmorphism atau visual berat.

## 2. Visual Language

### 2.1 Overall Look

- Background utama gelap karbon atau putih hangat dingin, tergantung theme.
- Permukaan panel memakai gradasi metal sangat halus, bukan efek kaca.
- Garis pembatas tipis 1px menyerupai potongan profil aluminium.
- Komposisi tegas, tidak organik berlebihan.
- Visual fokus pada pekerjaan nyata: kusen, pintu, jendela, etalase, partisi, kitchen set, shower screen.

### 2.2 Reference Interpretation

| Reference | Prinsip yang Diambil | Yang Dihindari |
|---|---|---|
| Apple | Ruang napas, product focus, detail typography | Minimalisme kosong tanpa konten lokal |
| BMW | Premium industrial, material confidence | Visual otomotif yang tidak relevan |
| Nike | CTA kuat dan headline pendek | Energi sport yang tidak cocok untuk jasa aluminium |
| Vercel | Clean interface, technical clarity | Monochrome SaaS generic |
| Linear | Detail UI presisi, dark theme elegan | Gradient/glow berlebihan |

### 2.3 Visual Hierarchy

1. Brand + value proposition.
2. CTA WhatsApp.
3. Layanan unggulan.
4. Portfolio asli.
5. Area layanan.
6. Profil owner/experience.
7. Contact and Maps.

## 3. Color System

### 3.1 Palette

| Token | Hex | Usage |
|---|---:|---|
| Carbon Black | `#080A0D` | Dark theme background utama |
| Graphite | `#11161C` | Surface gelap, cards, nav |
| Steel Line | `#2A323C` | Border, divider, extrusion rails |
| Satin Aluminium | `#C7CDD4` | Text muted terang, icon line |
| Brushed Silver | `#EEF1F4` | Light theme background / foreground highlight |
| Mandiri Blue | `#2F6BFF` | Primary CTA, focus ring, active states |
| Workshop Amber | `#F5B84B` | Accent kecil untuk trust/attention |
| Oxide Red | `#C4513B` | Error/destructive state terbatas |
| Success Green | `#2FBF71` | Success state terbatas |

### 3.2 Color Roles

| Role | Light Theme | Dark Theme |
|---|---|---|
| Background | Brushed Silver `#EEF1F4` | Carbon Black `#080A0D` |
| Surface | White `#FFFFFF` | Graphite `#11161C` |
| Elevated Surface | `#F8FAFC` | `#171E27` |
| Text Primary | `#0C1117` | `#F4F7FA` |
| Text Secondary | `#4B5563` | Satin Aluminium `#C7CDD4` |
| Border | `#D7DCE2` | Steel Line `#2A323C` |
| Primary CTA | Mandiri Blue `#2F6BFF` | Mandiri Blue `#2F6BFF` |
| Accent | Workshop Amber `#F5B84B` | Workshop Amber `#F5B84B` |

### 3.3 Color Rules

- Primary CTA selalu Mandiri Blue, bukan amber.
- Amber hanya dipakai sebagai aksen kecil: label, metric, underline, atau highlight trust.
- Jangan memakai gradient pelangi.
- Jangan memakai glass blur besar.
- Jangan membuat dark theme terlalu hitam tanpa depth; gunakan surface berlapis.
- Text body tidak boleh memakai pure grey rendah kontras.

## 4. Typography

### 4.1 Typeface Direction

| Role | Recommended Family | Reason |
|---|---|---|
| Display / Headline | Sora or Space Grotesk | Geometris, modern, cocok untuk industrial premium |
| Body / UI | Inter or Geist Sans | Terbaca tinggi, stabil, Vercel-friendly |
| Numeric / Technical labels | Same as body, tabular numbers enabled if needed | Menjaga performa dan menghindari font berlebih |

Final implementation boleh memakai dua font maximum. Jika performa lebih penting, gunakan satu variable font dengan weight range cukup.

### 4.2 Type Scale

| Token | Mobile | Desktop | Usage |
|---|---:|---:|---|
| Display XL | 40/44 | 72/76 | Hero headline |
| H1 | 36/42 | 56/64 | Page title |
| H2 | 28/36 | 42/50 | Section title |
| H3 | 22/30 | 28/36 | Card group title |
| Body LG | 18/30 | 20/32 | Lead paragraph |
| Body | 16/26 | 16/28 | Main content |
| Body SM | 14/22 | 14/22 | Meta, helper text |
| Label | 12/16 | 12/16 | Eyebrow, tag, nav label |

### 4.3 Typography Rules

- Headline pendek, konkret, dan tidak memakai slogan kosong.
- Body text maksimal 70 karakter per baris pada desktop.
- Gunakan sentence case untuk UI labels.
- Jangan memakai lebih dari 3 weight pada satu halaman.
- Jangan memakai uppercase panjang untuk paragraf; uppercase hanya untuk label pendek.
- Avoid widows/orphans pada hero copy bila memungkinkan.

## 5. Spacing

### 5.1 Spacing Scale

Gunakan 4px-based scale.

| Token | Value | Usage |
|---|---:|---|
| 0 | 0px | Reset |
| 1 | 4px | Icon gap kecil |
| 2 | 8px | Tight gap |
| 3 | 12px | Label to text |
| 4 | 16px | Card internal gap |
| 5 | 20px | Button padding / mobile sections |
| 6 | 24px | Card padding mobile |
| 8 | 32px | Section internal gap |
| 10 | 40px | Group spacing |
| 12 | 48px | Section spacing mobile |
| 16 | 64px | Section spacing tablet |
| 20 | 80px | Section spacing desktop |
| 24 | 96px | Hero desktop spacing |

### 5.2 Spacing Rules

- Section spacing harus konsisten; jangan tiap section punya ritme sendiri.
- Mobile padding horizontal minimum 20px.
- Desktop container maksimum 1200px untuk konten utama, 1360px untuk visual showcase bila dibutuhkan.
- CTA cluster memakai gap tetap agar tombol tidak menempel.
- Card grid perlu ruang antar card minimal 16px mobile dan 24px desktop.

## 6. Grid

### 6.1 Grid System

| Breakpoint | Columns | Margin | Gutter | Notes |
|---|---:|---:|---:|---|
| Mobile 360+ | 4 | 20px | 16px | Single-column content dominant |
| Tablet 768+ | 8 | 32px | 20px | 2-column sections allowed |
| Desktop 1024+ | 12 | 48px | 24px | Main editorial layout |
| Wide 1440+ | 12 | Auto | 28px | Max container enforced |

### 6.2 Grid Rules

- Hero desktop boleh split 7/5 atau 6/6 antara copy dan visual.
- Service cards desktop memakai 3 columns; tablet 2 columns; mobile 1 column.
- Portfolio grid desktop 3 columns; mobile 1 column.
- Tables atau content text panjang harus full-width, bukan dipaksa berdampingan.
- Jangan membuat layout yang bergantung pada fixed height.

## 7. Layout Rules

### 7.1 Page Layout

Setiap page mengikuti urutan umum:

1. Page hero.
2. Primary content.
3. Trust proof or supporting content.
4. Contextual CTA.
5. Related links / navigation onward.

### 7.2 Homepage Layout

1. Hero: value proposition, area, CTA WhatsApp, CTA Maps.
2. Service highlight: 4 layanan unggulan.
3. Full service catalog preview.
4. Portfolio preview with original-photo emphasis.
5. Area layanan Bekasi/Jakarta/JABODETABEK.
6. About owner/experience.
7. Final CTA.

### 7.3 Density Rules

- Premium does not mean empty. Setiap section harus punya fungsi jelas.
- Use whitespace to improve scanning, not to hide missing content.
- Copy per section harus pendek; link ke halaman detail bila perlu penjelasan panjang.
- Jangan membuat homepage terlalu panjang jika layanan detail sudah tersedia.

## 8. Component Guidelines

### 8.1 Component Principles

- Components harus content-first, bukan effect-first.
- Default component adalah Server Component; client interactivity hanya jika perlu.
- shadcn/ui boleh dipakai sebagai base, tetapi style harus disesuaikan dengan brand, bukan default copy-paste.
- Components harus menerima content dari data lokal, bukan hardcoded menyebar.
- Semua component interactive harus punya focus state.

### 8.2 Core Components

| Component | Purpose | Key Rules |
|---|---|---|
| Header | Navigasi dan brand recall | Sticky optional; tidak menutup hero; CTA jelas |
| Hero | First impression and conversion | Satu headline kuat, CTA utama, area layanan |
| ServiceCard | Menjelaskan layanan | Icon/line art, summary pendek, CTA |
| PortfolioCard | Bukti pekerjaan | Foto asli, alt text, kategori, CTA pekerjaan serupa |
| CTASection | Konversi | WhatsApp primary, Maps secondary |
| TrustStrip | Pengalaman dan area | Gunakan fakta dari konteks saja |
| Footer | Sitemap mini + kontak | Tidak menjadi dumping ground |
| MobileCTABar | Konversi mobile | Tidak menghalangi konten dan aman dari browser UI |

## 9. Buttons

### 9.1 Button Variants

| Variant | Usage | Style |
|---|---|---|
| Primary | WhatsApp / primary conversion | Solid Mandiri Blue, high contrast text |
| Secondary | Google Maps / portfolio | Transparent or surface with border |
| Ghost | Header nav action | Minimal, visible hover/focus |
| Link | Inline navigation | Underline or arrow motion, accessible contrast |

### 9.2 Button Rules

- Primary CTA text harus action-specific.
- Minimum touch target 44x44px.
- Icon optional; jangan menggantikan label.
- Loading state tidak dibutuhkan untuk external link biasa.
- Hover effect boleh berupa slight lift atau border highlight, bukan glow besar.
- Focus ring harus terlihat pada dark dan light theme.

### 9.3 Approved CTA Labels

- Konsultasi via WhatsApp
- Tanya Fabrikasi Aluminium
- Minta Rekomendasi Pemasangan
- Lihat Portfolio
- Lihat Lokasi di Google Maps
- Hubungi Mandiri Alumunium

## 10. Cards

### 10.1 Card Style

- Surface solid dengan border 1px.
- Radius kecil sampai sedang: 16px untuk premium modern, bukan pill berlebihan.
- Shadow sangat halus pada light theme; dark theme memakai border/highlight, bukan shadow tebal.
- Card image harus punya aspect ratio stabil.

### 10.2 Service Cards

- Judul layanan jelas.
- Summary 1 sampai 2 kalimat.
- Area/use-case singkat bila relevan.
- CTA kecil menuju detail atau WhatsApp.
- Icon line-art aluminium boleh dipakai bila konsisten.

### 10.3 Portfolio Cards

- Foto menjadi fokus utama.
- Label kategori ringan.
- Lokasi boleh tampil bila tersedia.
- Jangan menampilkan angka proyek atau testimoni tanpa data.
- Jangan memakai gambar AI sebagai portfolio.

## 11. Navigation

### 11.1 Main Navigation

Approved nav items:

1. Home
2. Layanan
3. Portfolio
4. Tentang
5. Area
6. Kontak

### 11.2 Navigation Rules

- Maksimal 6 item.
- CTA WhatsApp tampil di desktop header bila ruang cukup.
- Mobile menu sederhana, bukan mega menu.
- Active state jelas.
- Header harus tetap terbaca di dark dan light background.
- Jangan memakai hamburger yang membuka animasi berat.

## 12. Dark Theme

Dark theme adalah bagian dari identitas premium industrial, bukan mode tambahan seadanya.

### 12.1 Dark Theme Direction

- Background Carbon Black.
- Surface Graphite.
- Border Steel Line.
- Text primary hampir putih, bukan abu-abu rendah kontras.
- Mandiri Blue tetap menjadi primary CTA.
- Amber hanya sebagai accent kecil.

### 12.2 Dark Theme Rules

- Hindari pure black + pure white ekstrem pada body panjang.
- Gunakan layer depth melalui surface dan border.
- Jangan memakai blur glass besar.
- Image treatment boleh memakai overlay gradient ringan agar teks terbaca.
- Focus ring harus lebih terang dari surrounding surface.

## 13. Animation Rules

### 13.1 Allowed Motion

- Hover lift kecil pada card/button.
- Fade/slide reveal ringan pada section jika tidak mengganggu performance.
- Underline movement pada nav/link.
- Image scale 1.02 pada hover desktop.
- CTA icon nudge kecil.

### 13.2 Forbidden Motion

- Parallax.
- Loading screen.
- Cursor animation.
- Heavy scroll-jacking.
- Infinite decorative animation yang mengganggu.
- Motion yang membuat layout shift.

### 13.3 Motion Timing

| Motion | Duration | Easing |
|---|---:|---|
| Button hover | 120–180ms | ease-out |
| Card hover | 160–220ms | ease-out |
| Section reveal | 240–360ms | ease-out |
| Menu open | 160–220ms | ease-out |

Reduced motion harus mematikan reveal/transform dan tetap menjaga state visual.

## 14. Illustration Rules

### 14.1 Allowed Illustration

- Line-art profil aluminium.
- Simple technical cutaway shapes.
- Abstract extrusion rails.
- Minimal icons for service categories.
- AI illustration hanya untuk mood/konsep, bukan portfolio dan bukan klaim hasil kerja.

### 14.2 Forbidden Illustration

- 3D cartoon construction workers.
- Generic stock vector berlebihan.
- Neobrutalism.
- Glassmorphism berlebihan.
- Mockup proyek palsu yang tampak seperti pekerjaan asli.

## 15. Photography Rules

### 15.1 Portfolio Photography

- Portfolio hanya memakai foto asli pekerjaan Mandiri Alumunium.
- Setiap foto harus punya alt text deskriptif.
- Foto harus dioptimasi ukuran dan format sebelum masuk website.
- Foto low-light boleh dipakai jika pekerjaan terlihat jelas; edit sebatas exposure/crop, bukan manipulasi menyesatkan.
- Jangan mengambil gambar dari Google.

### 15.2 Photography Style Direction

- Angle rapi yang memperlihatkan garis, sambungan, dan hasil akhir.
- Ambil detail material: frame aluminium, kaca, sudut, handle, sambungan.
- Ambil konteks ruang secukupnya agar calon pelanggan memahami jenis proyek.
- Hindari watermark berat.
- Konsistensi aspect ratio lebih penting daripada jumlah foto banyak.

### 15.3 Missing Photo Policy

Jika foto asli belum tersedia, gunakan fallback visual netral berbasis brand atau ilustrasi teknis dengan label non-portfolio. Jangan membuat galeri palsu.

## 16. Iconography

### 16.1 Style

- Line icons.
- Stroke konsisten 1.5px atau 2px.
- Corners sedikit rounded.
- Bentuk sederhana dan mudah dikenali.
- Icon tidak boleh menjadi dekorasi utama.

### 16.2 Icon Usage

| Usage | Icon Direction |
|---|---|
| Fabrikasi | Profil aluminium / tool line |
| Pemasangan | Measurement / installation mark |
| Service | Wrench minimal |
| Pintu/Jendela/Kusen | Frame outline |
| Kitchen/Lemari/Rak | Cabinet grid |
| Shower Screen | Glass panel outline |
| Etalase | Display case outline |
| Area | Map pin line |
| WhatsApp | Official-style icon if license/package allows |

## 17. Responsive Rules

### 17.1 Mobile First

- Design starts at 360px viewport.
- Hero CTA visible without excessive scroll.
- Sticky CTA must respect safe area.
- Mobile typography cannot be desktop scale squeezed down.
- Cards stack vertically with clear spacing.
- Images use stable aspect ratio to prevent layout shift.

### 17.2 Tablet

- Use 2-column service/portfolio layout when content remains readable.
- Keep nav collapsed if spacing is tight.
- Avoid cramped split hero.

### 17.3 Desktop

- Use editorial split sections.
- Keep max line length controlled.
- CTA cluster visible but not oversized.
- Avoid empty hero visual if no real photo exists; use branded extrusion panel instead.

## 18. Accessibility

### 18.1 Contrast

- Text/body meets WCAG AA minimum.
- Primary CTA meets contrast in light and dark theme.
- Muted text cannot fall below readable contrast.

### 18.2 Keyboard and Focus

- All interactive components keyboard accessible.
- Focus state visible and not color-only if possible.
- Mobile nav returns focus after close.
- External links should be understandable from label.

### 18.3 Content Accessibility

- One H1 per page.
- Heading order must not skip levels for styling.
- Alt text describes photo content and service relevance.
- Decorative lines/rails hidden from screen readers.
- Reduced motion supported.

## 19. Design Do

- Use real business facts from `context.md`.
- Make WhatsApp CTA obvious.
- Use aluminium-inspired lines and material cues with restraint.
- Keep portfolio honest and photo-first.
- Prioritize mobile readability.
- Use consistent section rhythm.
- Make service cards scannable.
- Keep Local SEO pages useful, not thin.
- Validate contrast and responsive layout before sign-off.
- Prefer one strong visual idea over many weak effects.

## 20. Design Don't

- Do not use neobrutalism.
- Do not use excessive glassmorphism.
- Do not use parallax.
- Do not use loading screens.
- Do not use cursor animation.
- Do not use Google images for portfolio.
- Do not make Mandiri Alumunium look like Bank Mandiri.
- Do not add ecommerce patterns such as price cards, cart, checkout, or stock labels.
- Do not invent testimonials, client names, ratings, certificates, or project counts.
- Do not bury WhatsApp below long copy.
- Do not overload the homepage with every detail from every service.

## 21. Moodboard Description

Moodboard direction: **dark satin workshop meets premium product page**.

Visual references combine a clean product showcase with industrial material precision. Imagine close-up aluminium profiles on a dark workbench, soft reflection on brushed metal, thin measurement lines, and clean white typography. The page should feel controlled and built, not decorative. Foto portfolio asli menjadi proof, sedangkan garis aluminium menjadi identity layer.

### 21.1 Moodboard Keywords

- Satin aluminium
- Carbon workshop
- Precision rails
- Clean fabrication
- Bekasi/Jakarta local trust
- Premium family business
- Dark product showcase
- Minimal industrial

### 21.2 Aesthetic Risk

Gunakan extrusion-line grid sebagai motif visual konsisten. Risiko: jika terlalu banyak, tampilan menjadi technical blueprint yang dingin. Mitigasi: batasi motif pada hero, dividers, dan section background; gunakan foto asli dan copy manusiawi untuk menjaga rasa family business.

## 22. Design Tokens

### 22.1 Color Tokens

| Token | Value | Role |
|---|---:|---|
| `color.background` | `#EEF1F4` | Light background |
| `color.foreground` | `#0C1117` | Light primary text |
| `color.background.dark` | `#080A0D` | Dark background |
| `color.foreground.dark` | `#F4F7FA` | Dark primary text |
| `color.surface` | `#FFFFFF` | Light card surface |
| `color.surface.dark` | `#11161C` | Dark card surface |
| `color.surface.elevated.dark` | `#171E27` | Dark elevated surface |
| `color.border` | `#D7DCE2` | Light border |
| `color.border.dark` | `#2A323C` | Dark border |
| `color.text.muted` | `#4B5563` | Light muted text |
| `color.text.muted.dark` | `#C7CDD4` | Dark muted text |
| `color.primary` | `#2F6BFF` | Primary CTA |
| `color.accent` | `#F5B84B` | Secondary accent |
| `color.error` | `#C4513B` | Error |
| `color.success` | `#2FBF71` | Success |

### 22.2 Typography Tokens

| Token | Value |
|---|---|
| `font.display` | Sora or Space Grotesk |
| `font.body` | Inter or Geist Sans |
| `font.weight.regular` | 400 |
| `font.weight.medium` | 500 |
| `font.weight.semibold` | 600 |
| `font.weight.bold` | 700 |
| `type.display.mobile` | 40px / 44px |
| `type.display.desktop` | 72px / 76px |
| `type.h1.mobile` | 36px / 42px |
| `type.h1.desktop` | 56px / 64px |
| `type.h2.mobile` | 28px / 36px |
| `type.h2.desktop` | 42px / 50px |
| `type.body` | 16px / 26–28px |
| `type.label` | 12px / 16px |

### 22.3 Spacing Tokens

| Token | Value |
|---|---:|
| `space.1` | 4px |
| `space.2` | 8px |
| `space.3` | 12px |
| `space.4` | 16px |
| `space.5` | 20px |
| `space.6` | 24px |
| `space.8` | 32px |
| `space.10` | 40px |
| `space.12` | 48px |
| `space.16` | 64px |
| `space.20` | 80px |
| `space.24` | 96px |

### 22.4 Radius Tokens

| Token | Value | Usage |
|---|---:|---|
| `radius.sm` | 8px | Tags, small controls |
| `radius.md` | 12px | Buttons |
| `radius.lg` | 16px | Cards |
| `radius.xl` | 24px | Hero visual panels |
| `radius.full` | 999px | Pills only when functionally useful |

### 22.5 Shadow and Border Tokens

| Token | Value | Usage |
|---|---|---|
| `border.hairline` | 1px solid current border color | Dividers, cards |
| `shadow.card.light` | Soft low-opacity shadow | Light theme cards only |
| `shadow.card.dark` | None or subtle inner highlight | Dark theme uses border over shadow |
| `focus.ring` | 2px Mandiri Blue + offset | Interactive elements |

### 22.6 Motion Tokens

| Token | Value |
|---|---|
| `motion.fast` | 120ms |
| `motion.base` | 180ms |
| `motion.slow` | 320ms |
| `motion.ease.out` | ease-out |
| `motion.scale.hover` | 1.02 max |
| `motion.translate.hover` | -2px max |

### 22.7 Component Tokens

| Token | Value |
|---|---|
| `container.max` | 1200px |
| `container.max.visual` | 1360px |
| `nav.height.mobile` | 64px |
| `nav.height.desktop` | 72px |
| `button.height.sm` | 40px |
| `button.height.md` | 48px |
| `button.height.lg` | 56px |
| `card.padding.mobile` | 20–24px |
| `card.padding.desktop` | 24–32px |
| `image.aspect.portfolio` | 4:3 or 3:2 |
