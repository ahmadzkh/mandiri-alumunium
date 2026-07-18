import { test, expect } from "@playwright/test"

test.describe("smoke: route existence", () => {
  const pages = [
    { path: "/", title: /Mandiri|Alumunium/ },
    { path: "/layanan", title: /Layanan/ },
    { path: "/portfolio", title: /Portfolio/ },
    { path: "/tentang", title: /Tentang/ },
    { path: "/area-layanan", title: /Area/ },
    { path: "/kontak", title: /Kontak/ },
  ]

  for (const { path, title } of pages) {
    test(`${path} loads and has correct title`, async ({ page }) => {
      const resp = await page.goto(path)
      expect(resp?.status()).toBe(200)
      await expect(page).toHaveTitle(title)
    })
  }
})

test.describe("service detail pages", () => {
  const slugs = [
    "fabrikasi-aluminium",
    "pemasangan-aluminium",
    "service-aluminium",
    "pintu-aluminium",
    "custom-aluminium",
  ]

  for (const slug of slugs) {
    test(`/layanan/${slug} loads`, async ({ page }) => {
      const resp = await page.goto(`/layanan/${slug}`)
      expect(resp?.status()).toBe(200)
    })
  }
})

test.describe("SEO assets", () => {
  test("sitemap.xml is accessible and valid", async ({ request }) => {
    const resp = await request.get("/sitemap.xml")
    expect(resp.status()).toBe(200)
    expect(resp.headers()["content-type"] || "").toContain("xml")
    const text = await resp.text()
    expect(text).toContain("urlset")
    expect(text).toContain("mandiri-alumunium")
  })

  test("robots.txt is accessible and valid", async ({ request }) => {
    const resp = await request.get("/robots.txt")
    expect(resp.status()).toBe(200)
    const text = await resp.text()
    expect(text).toContain("User-Agent")
    expect(text).toContain("Sitemap")
  })

  test("structured data is present on homepage", async ({ page }) => {
    await page.goto("/")
    const ldjson = await page.locator('script[type="application/ld+json"]').textContent()
    expect(ldjson).toBeTruthy()
    const data = JSON.parse(ldjson!)
    expect(data["@type"]).toBe("LocalBusiness")
    expect(data.name).toBe("Mandiri Alumunium")
  })
})

test.describe("CTA behavior", () => {
  test("WhatsApp links conditionally render", async ({ page, request }) => {
    // Cek apakah whatsapp dikonfigurasi via data endpoint internal
    const hasWhatsApp = await page.evaluate(async () => {
      const mod = await import("@/data/site-config")
      return mod.siteConfig.contact.whatsapp !== null
    }).catch(() => false)

    await page.goto("/")
    const waLinks = page.locator('a[href*="wa.me"]')
    const count = await waLinks.count()

    if (hasWhatsApp) {
      expect(count).toBeGreaterThan(0)
    } else {
      expect(count).toBe(0)
    }
  })

  test("contact page has contact sections", async ({ page }) => {
    await page.goto("/kontak")
    // Harus ada setidaknya heading
    await expect(page.locator("h1")).toContainText("Kontak")
    // Card sections harus ada (WhatsApp, Area, Maps)
    const cards = page.locator(".rounded-xl.border.bg-card")
    expect(await cards.count()).toBeGreaterThanOrEqual(2)
  })
})
