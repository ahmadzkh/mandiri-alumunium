"use client"

import { motion } from "motion/react"

interface Props {
  text: string
  highlight?: string
  className?: string
}

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * i,
      duration: 0.35,
      ease: [0.25, 0.1, 0, 1] as const,
    },
  }),
}

export function AnimatedTitle({ text, highlight, className }: Props) {
  const words = text.split(" ")
  let charIdx = 0

  return (
    <motion.h1 className={className} initial="hidden" animate="visible">
      {words.map((word, wi) => {
        // Is this entire word highlighted?
        const isWordHighlighted =
          !!highlight && word.replace(/&amp;/, "&") === highlight
        const chars = word.split("")
        const startIdx = charIdx
        charIdx += chars.length + 1 // +1 for space after word
        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {chars.map((ch, ci) => {
              const gi = startIdx + ci
              return (
                <motion.span
                  key={ci}
                  custom={gi}
                  variants={charVariants}
                  className={`inline-block ${isWordHighlighted ? "text-primary" : ""}`}
                >
                  {ch}
                </motion.span>
              )
            })}
            {/* spacer between words — not a motion element */}
            {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        )
      })}
    </motion.h1>
  )
}
