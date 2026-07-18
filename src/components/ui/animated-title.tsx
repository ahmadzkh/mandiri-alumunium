"use client"

import { motion } from "motion/react"

interface Props {
  text: string
  highlight?: string
  className?: string
}

export function AnimatedTitle({ text, highlight, className }: Props) {
  const parts: { chars: string; highlighted: boolean }[] = []
  if (highlight && text.includes(highlight)) {
    const before = text.slice(0, text.indexOf(highlight))
    const after = text.slice(text.indexOf(highlight) + highlight.length)
    if (before) parts.push({ chars: before, highlighted: false })
    parts.push({ chars: highlight, highlighted: true })
    if (after) parts.push({ chars: after, highlighted: false })
  } else {
    parts.push({ chars: text, highlighted: false })
  }

  const allChars = text.split("")
  // map global index in allChars to the correct part's local index
  let globalIdx = 0

  return (
    <motion.h1 className={className} initial="hidden" animate="visible">
      {parts.map((part) =>
        part.chars.split("").map((ch) => {
          const gi = globalIdx++
          return (
            <motion.span
              key={gi}
              custom={gi}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: (i: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.03 * i,
                    duration: 0.35,
                    ease: [0.25, 0.1, 0, 1],
                  },
                }),
              }}
              className={`inline-block ${part.highlighted ? "text-primary" : ""}`}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          )
        })
      )}
    </motion.h1>
  )
}
