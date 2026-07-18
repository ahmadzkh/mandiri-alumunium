# /public/ — Static Assets

All files here are served at the root path `/`.

## Folder Structure

```
public/
├── images/
│   ├── logo/           ← Logo Mandiri Alumunium (.png, .svg)
│   ├── portfolio/      ← Foto asli pekerjaan (jpeg, webp, max 200KB)
│   ├── products/       ← Foto produk unggulan (optional)
│   └── og/             ← Open Graph image untuk social preview (1200×630px)
├── favicon/            ← Favicon files (favicon.ico, apple-touch-icon.png)
├── docs/               ← Dokumen pendukung (catalog PDF, brosur — optional)
└── structured-data.json
```

## Cara Pakai

```tsx
// Di komponen Next.js Image:
<Image src="/images/portfolio/etalase-toko-1.jpg" width={800} height={600} alt="..." />

// Di OG metadata di layout:
images: [{ url: "/images/og/og-default.jpg", width: 1200, height: 630 }]
```

## Format Rekomendasi

| Asset | Format | Ukuran |
|---|---|---|
| Foto portfolio | WebP / JPEG | ≤200KB |
| Logo | PNG (transparan) / SVG | ≤50KB |
| OG image | JPEG | ≤100KB, 1200×630 |
| Favicon | ICO (32×32) | ≤15KB |
