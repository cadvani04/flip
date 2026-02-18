'use client'

import { useState } from 'react'
import RotatingHeadline from '@/components/RotatingHeadline'
import ClientIntakeForm from '@/components/ClientIntakeForm'

export default function Hero() {
  const [showForm, setShowForm] = useState(false)

  if (showForm) {
    return (
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => setShowForm(false)}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-950 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          <ClientIntakeForm />
        </div>
      </section>
    )
  }

  return (
    <section className="relative bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Eyebrow tag */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Full-Stack Growth Studio
            </span>
          </div>

          {/* Rotating Headline */}
          <RotatingHeadline />

          {/* Subheadline */}
          <p className="mt-2 text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-2xl mb-10">
            Flip merges custom software, automation, brand identity, video production, and marketing execution into one seamless infrastructure — from concept to scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors shadow-sm"
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-colors"
            >
              See Our Process
            </a>
          </div>

          {/* Social proof micro-line */}
          <p className="mt-8 text-xs text-neutral-400 font-medium tracking-wide">
            Trusted by founders, operators &amp; growing brands — one partner for everything.
          </p>
        </div>
      </div>

      {/* Decorative background element */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 -z-10 h-full w-1/2 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 40%, #111 0%, transparent 60%)',
        }}
      />
    </section>
  )
}
