"use client"

import { useState, useEffect, useCallback } from "react"

interface TextTypeProps {
  text: string | string[]
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span"
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  loop?: boolean
  showCursor?: boolean
  cursorCharacter?: string
}

export function TextType({
  text,
  as: Tag = "div",
  className = "",
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseDuration = 2000,
  loop = true,
  showCursor = true,
  cursorCharacter = "|",
}: TextTypeProps) {
  const texts = Array.isArray(text) ? text : [text]
  const [display, setDisplay] = useState("")
  const [sentenceIdx, setSentenceIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  const tick = useCallback(() => {
    const current = texts[sentenceIdx]

    if (isDeleting) {
      if (charIdx > 0) {
        setCharIdx((i) => i - 1)
      } else {
        setIsDeleting(false)
        setSentenceIdx((i) => (i + 1) % texts.length)
        if (!loop && sentenceIdx === texts.length - 1) return
      }
    } else {
      if (charIdx < current.length) {
        setCharIdx((i) => i + 1)
      } else {
        if (texts.length > 1) {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
        return
      }
    }
  }, [charIdx, isDeleting, sentenceIdx, texts, loop, pauseDuration])

  useEffect(() => {
    setDisplay(texts[sentenceIdx].slice(0, charIdx))
  }, [charIdx, sentenceIdx, texts])

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting, typingSpeed, deletingSpeed])

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <Tag className={className}>
      {display}
      {showCursor && (
        <span className="inline-block ml-0.5 -mr-1 font-light opacity-70">
          {cursorVisible ? cursorCharacter : "\u00A0"}
        </span>
      )}
    </Tag>
  )
}
