'use client'

import Link from 'next/link'
import { useInView } from '@/components/useInView'

const caseStudies = [
  {
    number: '01',
    slug: 'chagaco',
    color: 'emerald',
    dot: 'bg-emerald-500',
    border: 'border-emerald-500/30',
    accent: 'text-emerald-400',
    tagBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    client: 'ChagaCo',
    industry: 'Wellness / Functional Beverage',
    angle: 'From underutilized email list to structured lifecycle revenue engine.',
    headline: 'Turned email into a 30%+ revenue channel in under 90 days.',
    metrics: [
      { value: '18–35%', label: 'Email revenue lift' },
      { value: '25–40%', label: 'Of total store revenue' },
      { value: '10–20%', label: 'Repeat purchase rate ↑' },
    ],
    category: 'Ecommerce',
  },
  {
    number: '02',
    slug: 'total-fire-protection',
    color: 'blue',
    dot: 'bg-blue-500',
    border: 'border-blue-500/30',
    accent: 'text-blue-400',
    tagBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    client: 'Total Fire Protection',
    industry: 'Service Business / Field Operations',
    angle: 'Reducing backend chaos and increasing scheduling efficiency.',
    headline: 'Saved 12+ hrs/week in dispatch and improved route efficiency by 23%.',
    metrics: [
      { value: '8–15 hrs', label: 'Saved per week' },
      { value: '20–35%', label: 'Less scheduling friction' },
      { value: '15–30%', label: 'Faster job assignment' },
    ],
    category: 'Operations',
  },
  {
    number: '03',
    slug: 'la-estancia',
    color: 'red',
    dot: 'bg-rose-500',
    border: 'border-rose-500/30',
    accent: 'text-rose-400',
    tagBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    client: 'La Estancia',
    industry: 'Restaurant / Hospitality',
    angle: 'Turning content into local visibility and inbound demand.',
    headline: 'Generated 180K+ local views and grew follower base 78% in 60 days.',
    metrics: [
      { value: '1M+', label: 'Organic views' },
      { value: '$30K', label: 'Revenue attributed' },
      { value: '8–12%', label: 'Engagement rate' },
    ],
    category: 'Viral Growth',
  },
  {
    number: '04',
    slug: 'santa-cruz-portfolio',
    color: 'purple',
    dot: 'bg-violet-500',
    border: 'border-violet-500/30',
    accent: 'text-violet-400',
    tagBg: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    client: 'Santa Cruz Restaurant Portfolio',
    industry: 'Multi-location / Local Hospitality',
    angle: 'Built a repeatable short-form growth engine across multiple restaurants.',
    headline: 'Cumulative local reach with consistent inbound bookings across locations.',
    metrics: [
      { value: 'Multi-loc', label: 'Growth engine' },
      { value: 'Inbound', label: 'DMs & bookings' },
      { value: 'Organic', label: 'Foot traffic lift' },
    ],
    category: 'Local Lead Gen',
  },
  {
    number: '05',
    slug: 'outreach-system',
    color: 'amber',
    dot: 'bg-amber-500',
    border: 'border-amber-500/30',
    accent: 'text-amber-400',
    tagBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    client: 'Multi-Client Outreach System',
    industry: 'AI-Driven Lead Generation',
    angle: 'AI-driven outbound system for predictable pipeline generation.',
    headline: 'Built a 100-leads/day outbound engine generating 22 qualified conversations/mo.',
    metrics: [
      { value: '2–6%', label: 'Reply rate' },
      { value: '15–30', label: 'Qualified convos / mo' },
      { value: '1–3', label: 'New retainers / cycle' },
    ],
    category: 'Outbound',
  },
]

export default function CaseStudies() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()

  return (
    <section id="case-studies" className="bg-neutral-950 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-16">
          <p className={`reveal-eyebrow text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 ${headerVisible ? 'visible' : ''}`}>
            Case Studies
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className={`reveal-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1] max-w-2xl ${headerVisible ? 'visible' : ''}`}
              style={{ transitionDelay: headerVisible ? '0.1s' : '0s' }}
            >
              Real systems. Real results.
            </h2>
            <p className={`reveal text-base text-neutral-400 max-w-xs sm:text-right ${headerVisible ? 'visible' : ''}`}
              style={{ transitionDelay: headerVisible ? '0.18s' : '0s' }}
            >
              A look at what we've built — and what it produced.
            </p>
          </div>
        </div>

        {/* ── Case Study Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Cards 1–4 in 2-col grid */}
          {caseStudies.slice(0, 4).map((cs, i) => (
            <CaseStudyCard key={cs.slug} cs={cs} index={i} />
          ))}

          {/* Card 5 — full width */}
          <div className="lg:col-span-2">
            <CaseStudyCard cs={caseStudies[4]} index={4} fullWidth />
          </div>

        </div>

      </div>
    </section>
  )
}

/* ── Individual Card ─────────────────────────────────────── */
function CaseStudyCard({
  cs,
  index,
  fullWidth = false,
}: {
  cs: (typeof caseStudies)[number]
  index: number
  fullWidth?: boolean
}) {
  const { ref, isVisible } = useInView()

  return (
    <div
      ref={ref}
      className={`reveal-scale group relative rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden transition-colors duration-300 hover:border-neutral-700 hover:bg-neutral-800/60 ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: isVisible ? `${index * 0.07}s` : '0s' }}
    >
      <Link href={`/case-studies/${cs.slug}`} className="block h-full p-8">

        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${cs.dot}`} />
            <span className={`text-xs font-semibold uppercase tracking-widest border rounded-full px-3 py-1 ${cs.tagBg}`}>
              {cs.category}
            </span>
          </div>
          <span className="text-4xl font-black text-neutral-800 tabular-nums leading-none">
            {cs.number}
          </span>
        </div>

        {/* Client + industry */}
        <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
          {cs.industry}
        </p>
        <h3 className={`text-2xl ${fullWidth ? 'sm:text-3xl' : ''} font-extrabold text-white tracking-tight leading-tight mb-3`}>
          {cs.client}
        </h3>

        {/* Angle */}
        <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-lg">
          {cs.angle}
        </p>

        {/* Headline stat */}
        <div className={`rounded-xl border ${cs.border} bg-white/[0.03] px-5 py-4 mb-6`}>
          <p className={`text-sm font-semibold leading-snug ${cs.accent}`}>
            "{cs.headline}"
          </p>
        </div>

        {/* Metrics */}
        <div className={`grid gap-4 ${fullWidth ? 'grid-cols-3' : 'grid-cols-3'}`}>
          {cs.metrics.map((m) => (
            <div key={m.label}>
              <div className={`text-xl font-black ${cs.accent} leading-none mb-1`}>
                {m.value}
              </div>
              <div className="text-xs text-neutral-500 leading-tight">{m.label}</div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className={`mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest ${cs.accent} group-hover:gap-3 transition-all duration-200`}>
          <span>Read Case Study</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

      </Link>
    </div>
  )
}
