"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site-config"
import { navItems } from "@/data/navigation"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

function WhatsAppLink({ label, className }: { label?: string; className?: string }) {
  if (!siteConfig.contact.whatsapp) return null
  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label ?? "Konsultasi via WhatsApp"}
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header role="banner" className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2 nav-link font-heading text-lg font-semibold tracking-tight">
          <Image
            src="/images/logo/mandiri-aluminium-ori.png"
            alt="Mandiri Alumunium"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          Mandiri<span className="text-primary">Alumunium</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <WhatsAppLink
            label="Konsultasi"
            className="btn-hover inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/80"
          />
        </nav>

        {/* Mobile menu — left side overlay */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu navigasi">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </Button>} />
          <SheetContent side="left" className="w-72 animate-fade-in-up">
            <SheetTitle className="text-xl font-bold">Menu Navigasi</SheetTitle>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium text-foreground transition-colors hover:text-primary animate-fade-in-up delay-${Math.min(i + 1, 5)}`}
                >
                  {item.label}
                </Link>
              ))}
              <Separator className="my-2" />
              <WhatsAppLink
                label="Konsultasi via WhatsApp"
                className="btn-hover inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
