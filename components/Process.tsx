'use client'

import { useInView } from '@/components/useInView'

const steps = [
  {
    number: '1',
    title: 'Intake & Strategy Blueprint',
    description:
      'We analyze your current systems, brand, and growth goals to build a comprehensive strategy tailored to your business.',
  },
  {
    number: '2',
    title: 'Infrastructure Buildout',
    description:
      'Development, automations, ERP workflows, and backend systems. We architect the technical foundation.',
  },
  {
    number: '3',
    title: 'Brand & Creative Identity',
    description:
      'Video, visuals, content pipelines, and messaging. We craft the narrative that defines your brand.',
  },
  {
    number: '4',
    title: 'Sales & Marketing Engine',
    description:
      'Paid, organic, funnels, automation. We activate every channel and drive measurable growth.',
  },
  {
    number: '5',
    title: 'Growth & Optimization',
    description:
      'Continuous improvement across every layer, backed by data and relentless iteration.',
  },
]

export default function Process() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const { ref: stepsRef, isVisible: stepsVisible } = useInView()

  return (
    <section id="process" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ──────────────────────────────────────── */}
        <div ref={headerRef} className="mb-14">
          <p
            className={`reveal-eyebrow text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4 ${headerVisible ? 'visible' : ''}`}
          >
            How It Works
          </p>
          <h2
            className={`reveal-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] max-w-xl mb-4 ${headerVisible ? 'visible' : ''}`}
            style={{ transitionDelay: headerVisible ? '0.1s' : '0s' }}
          >
            The smarter agency process.
          </h2>
          <p
            className={`reveal text-lg text-neutral-500 max-w-xl ${headerVisible ? 'visible' : ''}`}
            style={{ transitionDelay: headerVisible ? '0.18s' : '0s' }}
          >
            Everything we build stacks. No wasted work, no isolated teams.
          </p>
        </div>

        {/* ── Steps — sequential L→R cascade ─────────────── */}
        {/*
          Each step drops in left-to-right, as if tiles are being
          placed one after another on a conveyor belt.
        */}
        <div
          ref={stepsRef}
          className="grid md:grid-cols-5 gap-0 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-200 border border-neutral-200 rounded-2xl overflow-hidden"
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal bg-white p-7 hover:bg-brand-50 transition-colors duration-150 ${stepsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: stepsVisible ? `${i * 0.1}s` : '0s' }}
            >
              <div className="text-4xl font-extrabold text-neutral-100 mb-4 leading-none">
                {step.number}
              </div>
              <h3 className="text-sm font-bold text-neutral-950 mb-2 leading-snug">{step.title}</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
