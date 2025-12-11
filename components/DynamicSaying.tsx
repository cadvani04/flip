'use client'

import { useState, useEffect } from 'react'

export default function DynamicSaying() {
  const sayings = [
    'We build the systems behind the brand and the brand that moves the market.',
    'From code to content, we architect your entire growth engine.',
    'One team. Every capability. Infinite scale.',
    'Where technology meets creativity, magic happens.',
    'We don\'t just build apps. We build movements.',
    'Your brand should operate like a well-designed product.',
    'Automation meets artistry. Results meet revenue.',
    'Full-stack growth. Full-service innovation.',
    'We turn your vision into a scalable reality.',
    'Engineering excellence. Creative brilliance. Operational mastery.',
    'From concept to scale, we architect everything.',
    'The complete infrastructure for modern brands.',
    'Where software engineering meets brand storytelling.',
    'One partner. One workflow. Everything you need.',
    'Building the future of commerce, one system at a time.',
  ]

  const [currentSaying, setCurrentSaying] = useState('')

  useEffect(() => {
    // Pick a random saying on mount/reload
    const randomSaying = sayings[Math.floor(Math.random() * sayings.length)]
    setCurrentSaying(randomSaying)
  }, [])

  if (!currentSaying) return null

  return (
    <div className="text-center mb-8">
      <p className="text-xl sm:text-2xl font-semibold text-gray-700 italic animate-fade-in">
        "{currentSaying}"
      </p>
    </div>
  )
}

