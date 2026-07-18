/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_GA_ID?: string
    readonly NEXT_PUBLIC_WHATSAPP?: string
    readonly NEXT_PUBLIC_MAPS_URL?: string
  }
}
