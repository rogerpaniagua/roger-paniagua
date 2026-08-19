'use client'

import { useState, useEffect } from 'react'

const FULL_TEXT = "They're built."
const TYPE_MS = 65
const ERASE_MS = 38
const PAUSE_TYPED = 2400
const PAUSE_ERASED = 600

export default function HeroTyping() {
  const [displayed, setDisplayed] = useState('')
  const [erasing, setErasing] = useState(false)

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>

    if (!erasing) {
      if (displayed.length < FULL_TEXT.length) {
        t = setTimeout(() => setDisplayed(FULL_TEXT.slice(0, displayed.length + 1)), TYPE_MS)
      } else {
        t = setTimeout(() => setErasing(true), PAUSE_TYPED)
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(FULL_TEXT.slice(0, displayed.length - 1)), ERASE_MS)
      } else {
        t = setTimeout(() => setErasing(false), PAUSE_ERASED)
      }
    }

    return () => clearTimeout(t)
  }, [displayed, erasing])

  return (
    <span className="hero-typing">
      {displayed}
      <span className="hero-cursor" aria-hidden="true" />
    </span>
  )
}
