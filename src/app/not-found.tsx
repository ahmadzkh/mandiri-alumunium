import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
}

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="mx-auto max-w-sm px-5 text-center">
        <h1 className="text-4xl font-bold tracking-tight">404</h1>
        <p className="mt-2 text-muted-foreground">Halaman tidak ditemukan.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/">
            <Button>Kembali ke Home</Button>
          </Link>
          <Link href="/kontak">
            <Button variant="outline">Hubungi Kami</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
