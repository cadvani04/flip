'use client'

import { useState, useEffect } from 'react'

export default function RotatingHeadline() {
  const rotatingTexts = [
    'We build systems behind the brand',
    'Code to content. We architect growth',
    'Technology meets creativity',
    'We build apps. We build movements.',
    'Automation meets artistry',
    'Full-stack growth. Full-service innovation.',
    'Engineering excellence. Creative brilliance.',
    'Complete infrastructure for modern brands.',
    'Building the future of commerce',
  ]

  const finalText = 'We build the systems behind the brand and the brand that moves the market.'

  const [currentText, setCurrentText] = useState(rotatingTexts[0])
  const [isRotating, setIsRotating] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!isRotating) {
      setCurrentText(finalText)
      return
    }

    // Faster flashier animation
    const interval = setInterval(() => {
      setIsAnimating(true)
      setIsVisible(false)
      
      setTimeout(() => {
        if (currentIndex < rotatingTexts.length - 1) {
          setCurrentIndex(prev => prev + 1)
          setCurrentText(rotatingTexts[currentIndex + 1])
        } else {
          // After all rotations, show final text
          setIsRotating(false)
          setCurrentText(finalText)
        }
        setIsVisible(true)
        setTimeout(() => setIsAnimating(false), 200)
      }, 100) // Faster transition
    }, 400) // Much faster rotation (400ms per text)

    return () => clearInterval(interval)
  }, [currentIndex, isRotating])

  // Render the text with proper highlighting for final text
  const renderText = () => {
    if (!isRotating) {
      // Final text with blue highlight
      const parts = finalText.split(' ')
      return parts.map((word, i) => {
        const isBlue = word === 'behind' || (word === 'brand' && i > 5)
        return (
          <span key={i} className={isBlue ? 'text-blue-600' : ''}>
            {word}{' '}
          </span>
        )
      })
    }
    return currentText
  }

  return (
    <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-6 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex items-center justify-center relative`}>
      <span 
        className={`text-center inline-block transition-all duration-150 ${
          isVisible 
            ? 'opacity-100 scale-100 blur-0' 
            : 'opacity-0 scale-95 blur-sm'
        } ${
          isAnimating && isVisible
            ? 'animate-pulse-glow'
            : ''
        }`}
      >
        {renderText()}
      </span>
      {/* Flash effect overlay */}
      {isAnimating && isVisible && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent animate-flash-sweep pointer-events-none" />
      )}
    </h1>
  )
}
