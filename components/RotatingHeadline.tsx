'use client'

import { useState, useEffect } from 'react'

const rotatingPhrases = [
  'systems behind the brand',
  'code that powers growth',
  'technology meets creativity',
  'apps, brands & movements',
  'automation meets artistry',
  'full-stack growth engines',
  'infrastructure for scale',
  'the future of commerce',
]

const finalPhrase = 'the brand that moves the market'

export default function RotatingHeadline() {
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (done) return

    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        if (index < rotatingPhrases.length - 1) {
          setIndex((i) => i + 1)
        } else {
          setDone(true)
        }
        setVisible(true)
      }, 120)
    }, 380)

    return () => clearInterval(timer)
  }, [index, done])

  const phrase = done ? finalPhrase : rotatingPhrases[index]

  return (
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tightest text-neutral-950 leading-[1.05] mb-6">
      <span className="block">We build</span>
      <span
        className={`block italic text-neutral-950 transition-opacity duration-100 min-h-[1.1em] ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${done ? 'text-neutral-950' : ''}`}
      >
        {phrase}
      </span>
    </h1>
  )
}
