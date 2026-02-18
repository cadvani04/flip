'use client'

import { useInView } from '@/components/useInView'

const comparisons = [
  { label: 'Development', fragmented: true },
  { label: 'Automation', fragmented: true },
  { label: 'Branding', fragmented: true },
  { label: 'Video', fragmented: true },
  { label: 'Content Editing', fragmented: true },
  { label: 'Marketing', fragmented: true },
]

const miniStats = [
  { stat: '100%', desc: 'In-house execution' },
  { stat: '1', desc: 'Point of contact' },
  { stat: '6×', desc: 'Faster time-to-market' },
  { stat: '∞', desc: 'Scalable capacity' },
]

export default function WhyChoose() {
  const { ref: leftRef, isVisible: leftVisible } = useInView()
  const { ref: rightRef, isVisible: rightVisible } = useInView()

  return (
    <section className="bg-brand-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: The problem — slides from left ─────── */}
          <div ref={leftRef}>
            <p
              className={`reveal-eyebrow text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4 ${leftVisible ? 'visible' : ''}`}
            >
              The Problem
            </p>
            <h2
              className={`reveal-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] mb-6 ${leftVisible ? 'visible' : ''}`}
              style={{ transitionDelay: leftVisible ? '0.1s' : '0s' }}
            >
              One team. One workflow. Everything you need.
            </h2>
            <p
              className={`reveal text-lg text-neutral-500 leading-relaxed mb-8 ${leftVisible ? 'visible' : ''}`}
              style={{ transitionDelay: leftVisible ? '0.18s' : '0s' }}
            >
              Most companies hire separate teams for every function. This leads to fragmented execution, misaligned strategy, and slow growth.
            </p>

            {/* Comparison table — rows stagger in */}
            <div
              className={`reveal rounded-2xl border border-neutral-200 bg-white overflow-hidden ${leftVisible ? 'visible' : ''}`}
              style={{ transitionDelay: leftVisible ? '0.26s' : '0s' }}
            >
              <div className="grid grid-cols-3 text-xs font-semibold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 px-6 py-3">
                <span>Capability</span>
                <span className="text-center">Others</span>
                <span className="text-center">Flip</span>
              </div>
              {comparisons.map((item, i) => (
                <div
                  key={item.label}
                  className={`reveal grid grid-cols-3 items-center px-6 py-3.5 border-b border-neutral-100 last:border-0 ${leftVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: leftVisible ? `${0.32 + i * 0.05}s` : '0s' }}
                >
                  <span className="text-sm font-medium text-neutral-700">{item.label}</span>
                  <div className="flex justify-center">
                    <span className="text-xs text-neutral-400 font-medium bg-neutral-100 rounded-full px-2.5 py-0.5">
                      Separate vendor
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <span className="text-xs font-semibold bg-neutral-950 text-white rounded-full px-2.5 py-0.5">
                      ✓ Included
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: The solution — slides from right ───── */}
          <div ref={rightRef} className="space-y-6">
            <div
              className={`reveal-right rounded-2xl bg-neutral-950 text-white p-8 ${rightVisible ? 'visible' : ''}`}
              style={{ transitionDelay: rightVisible ? '0.05s' : '0s' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
                The Flip Difference
              </p>
              <p className="text-xl font-semibold leading-snug mb-4">
                Flip operates as your integrated technical + creative + operations partner.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                We don't just build apps. We build your brand, content ecosystem, sales engine, automations, and operational infrastructure, all at once.
              </p>
              <p className="text-white font-bold text-lg">
                This is why our clients scale faster and tell stronger stories.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {miniStats.map((item, i) => (
                <div
                  key={item.desc}
                  className={`reveal-scale rounded-2xl border border-neutral-200 bg-white p-5 text-center ${rightVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: rightVisible ? `${0.2 + i * 0.07}s` : '0s' }}
                >
                  <div className="text-2xl font-extrabold text-neutral-950 mb-1">{item.stat}</div>
                  <div className="text-xs text-neutral-500 font-medium">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
