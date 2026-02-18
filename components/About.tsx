'use client'

import { useInView } from '@/components/useInView'

const capabilities = [
  { label: 'Software Engineering', icon: '⚙️' },
  { label: 'Automation', icon: '⚡' },
  { label: 'Brand Identity', icon: '✦' },
  { label: 'Video Production', icon: '▶' },
  { label: 'Content Editing', icon: '✂' },
  { label: 'Growth Marketing', icon: '↗' },
]

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useInView()
  const { ref: rightRef, isVisible: rightVisible } = useInView()

  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left column — slides from left ────────────── */}
          <div ref={leftRef}>
            <p
              className={`reveal-eyebrow text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4 ${leftVisible ? 'visible' : ''}`}
            >
              About Flip
            </p>
            <h2
              className={`reveal-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] mb-6 ${leftVisible ? 'visible' : ''}`}
              style={{ transitionDelay: leftVisible ? '0.1s' : '0s' }}
            >
              A single agency with every capability you need.
            </h2>
            <p
              className={`reveal text-lg text-neutral-500 leading-relaxed mb-6 ${leftVisible ? 'visible' : ''}`}
              style={{ transitionDelay: leftVisible ? '0.2s' : '0s' }}
            >
              Flip E-Commerce (under SBCI) was created for founders, startups, and established brands who need more than a marketing agency. They need a technical, creative, and operational team that builds the entire machine.
            </p>
            <p
              className={`reveal text-lg text-neutral-500 leading-relaxed ${leftVisible ? 'visible' : ''}`}
              style={{ transitionDelay: leftVisible ? '0.28s' : '0s' }}
            >
              Where most agencies specialize in one service, Flip integrates software engineering, automation, brand development, creative production, and sales enablement into a unified system.
            </p>
          </div>

          {/* ── Right column — slides from right ──────────── */}
          <div ref={rightRef} className="space-y-6">
            <div
              className={`reveal-right rounded-2xl bg-brand-50 border border-neutral-200 p-8 ${rightVisible ? 'visible' : ''}`}
              style={{ transitionDelay: rightVisible ? '0.05s' : '0s' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                Our Philosophy
              </p>
              <p className="text-xl font-semibold text-neutral-950 leading-snug">
                "Your brand should operate like a well-designed product: predictable, automated, scalable, and unforgettable."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((item, i) => (
                <div
                  key={item.label}
                  className={`reveal-scale flex items-center gap-2.5 rounded-xl border border-neutral-200 bg-white px-4 py-3 ${rightVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: rightVisible ? `${0.15 + i * 0.06}s` : '0s' }}
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="text-sm font-medium text-neutral-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
