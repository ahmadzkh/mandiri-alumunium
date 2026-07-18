import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { siteConfig } from "@/data/site-config";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.business.name,
  founder: siteConfig.business.owner,
  foundingDate: String(siteConfig.business.establishedYear),
  description: siteConfig.seo.defaultDescription,
  telephone: "+6285311127515",
  email: "ekomandirialumunium@gmail.com",
  hasMap: siteConfig.contact.mapsUrl,
  areaServed: [
    { "@type": "City", name: "Bekasi" },
    { "@type": "City", name: "Jakarta" },
    { "@type": "AdministrativeArea", name: "JABODETABEK" },
  ],
  url: siteConfig.seo.siteUrl,
  sameAs: [`https://wa.me/${siteConfig.contact.whatsapp}`],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  metadataBase: new URL(siteConfig.seo.siteUrl),
  icons: {
    icon: "/images/logo/mandiri-aluminium-profile.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: siteConfig.business.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics gaId={siteConfig.analytics.gaId} />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:text-sm focus:font-medium">
          Langsung ke konten utama
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
