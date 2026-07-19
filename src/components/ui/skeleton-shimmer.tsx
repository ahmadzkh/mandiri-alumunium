"use client"

import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"

interface SkeletonShimmerProps {
  loaded: boolean
  children: React.ReactNode
}

export function SkeletonShimmer({ loaded, children }: SkeletonShimmerProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (loaded) {
      // Brief delay so skeleton is visible before wipe
      const t = setTimeout(() => setShow(true), 600)
      return () => clearTimeout(t)
    }
  }, [loaded])

  return (
    <div className="relative">
      <AnimatePresence>
        {!show && (
          <motion.div
            key="skeleton"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-10 overflow-hidden rounded-xl"
            style={{ viewTransitionName: "skeleton-card" }}
          >
            {/* Wipe shimmer overlay */}
            <style>{`
              @property --wipe {
                syntax: '<percentage>';
                inherits: true;
                initial-value: -100%;
              }
              .skeleton-wipe {
                --wipe: -100%;
                background: linear-gradient(
                  90deg,
                  transparent calc(var(--wipe) - 20%),
                  rgba(255,255,255,0.08) var(--wipe),
                  rgba(255,255,255,0.15) calc(var(--wipe) + 10%),
                  transparent calc(var(--wipe) + 20%)
                );
                animation: shimmer-wipe 2.5s ease-in-out infinite;
              }
              @keyframes shimmer-wipe {
                0% { --wipe: -20%; }
                60% { --wipe: 120%; }
                100% { --wipe: 120%; }
              }
              ::view-transition-group(skeleton-card) {
                border-radius: 16px;
                overflow: hidden;
              }
              ::view-transition-image-pair(skeleton-card) {
                mix-blend-mode: normal;
              }
              ::view-transition-old(skeleton-card) {
                z-index: 2;
                mask-image: linear-gradient(
                  to right,
                  black calc(var(--wipe, -100%)),
                  transparent calc(var(--wipe, -100%) + 50%)
                );
              }
            `}</style>

            {/* Placeholder blocks */}
            <div className="h-full w-full bg-card">
              {/* Image area */}
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <div className="skeleton-wipe absolute inset-0" />
              </div>
              {/* Text lines */}
              <div className="p-4 space-y-3">
                <div className="flex gap-2">
                  <div className="h-4 w-16 rounded bg-muted relative overflow-hidden">
                    <div className="skeleton-wipe absolute inset-0" />
                  </div>
                  <div className="h-4 w-20 rounded bg-muted relative overflow-hidden">
                    <div className="skeleton-wipe absolute inset-0" />
                  </div>
                </div>
                <div className="h-5 w-3/4 rounded bg-muted relative overflow-hidden">
                  <div className="skeleton-wipe absolute inset-0" />
                </div>
                <div className="h-4 w-full rounded bg-muted relative overflow-hidden">
                  <div className="skeleton-wipe absolute inset-0" />
                </div>
                <div className="h-4 w-2/3 rounded bg-muted relative overflow-hidden">
                  <div className="skeleton-wipe absolute inset-0" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </div>
  )
}
