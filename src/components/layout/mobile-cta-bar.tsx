"use client"

import { siteConfig } from "@/data/site-config"

export function MobileCtaBar() {
  if (!siteConfig.contact.whatsapp) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background p-3 md:hidden safe-area-bottom">
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
      >
        Konsultasi via WhatsApp
      </a>
    </div>
  )
}
