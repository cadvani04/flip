'use client'

import { useInView } from '@/components/useInView'

const promises = [
  'One team, one unified workflow',
  'No isolated silos or vendor gaps',
  'Technical + creative + operational in sync',
  'Transparent pricing, no hidden fees',
]

export default function Mission() {
  const { ref: leftRef, isVisible: leftVisible } = useInView()
  const { ref: rightRef, isVisible: rightVisible } = useInView()

  return (
    <section className="bg-neutral-950 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left — fade up ────────────────────────────── */}
          <div ref={leftRef}>
            <p
              className={`reveal-eyebrow text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6 ${leftVisible ? 'visible' : ''}`}
            >
              Our Mission
            </p>
            <h2
              className={`reveal-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 ${leftVisible ? 'visible' : ''}`}
              style={{ transitionDelay: leftVisible ? '0.1s' : '0s' }}
            >
              We don't just build companies. We architect movements.
            </h2>
            <p
              className={`reveal text-lg text-neutral-400 leading-relaxed ${leftVisible ? 'visible' : ''}`}
              style={{ transitionDelay: leftVisible ? '0.2s' : '0s' }}
            >
              To engineer the next generation of brands by merging technology, automation, and storytelling into one cohesive ecosystem.
            </p>
          </div>

          {/* ── Right — slide from right + stagger checklist ─ */}
          <div
            ref={rightRef}
            className={`reveal-right rounded-2xl border border-neutral-800 bg-neutral-900 p-8 ${rightVisible ? 'visible' : ''}`}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              Our Promise
            </p>
            <h3 className="text-xl font-bold text-white mb-4 leading-snug">
              Find the right solution for every challenge, guaranteed.
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              With our full-stack team, we guarantee you'll find a strategy that fits your scope and goals. If the first approach isn't a fit, we iterate up to 3 rounds.
            </p>
            <div className="space-y-3">
              {promises.map((item, i) => (
                <div
                  key={item}
                  className={`reveal flex items-start gap-2.5 ${rightVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: rightVisible ? `${0.15 + i * 0.07}s` : '0s' }}
                >
                  <svg className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
