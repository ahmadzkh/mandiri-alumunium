import { z } from "zod"

export const siteConfigSchema = z.object({
  business: z.object({
    name: z.literal("Mandiri Alumunium"),
    owner: z.literal("Eko Sabari"),
    establishedYear: z.literal(2018),
    ownerExperience: z.literal("20+ tahun"),
    businessType: z.literal("Perorangan"),
  }),
  contact: z.object({
    whatsapp: z.string().nullable(),
    mapsUrl: z.string().nullable(),
    phone: z.string().nullable(),
    email: z.string().nullable(),
    hours: z.string(),
  }),
  primaryAreas: z.tuple([z.string(), z.string()]),
  serviceArea: z.string(),
  analytics: z.object({
    gaId: z.string().nullable(),
    vercelAnalytics: z.boolean(),
  }),
  seo: z.object({
    defaultTitle: z.string(),
    titleTemplate: z.string(),
    defaultDescription: z.string(),
    siteUrl: z.string(),
  }),
})

export type SiteConfig = z.infer<typeof siteConfigSchema>
