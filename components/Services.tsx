'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from '@/components/useInView'

const serviceTags = [
  'Custom App Development', 'Automation Pipelines', 'ERP Systems',
  'AI Integration', 'Video Production', 'Brand Identity',
  'Content Editing', 'Paid Ads', 'SEO Strategy',
  'Email Marketing', 'Landing Pages', 'Podcast Production', '+ more',
]

  const services = [
    {
      number: '01',
      title: 'Custom App Development & Dev Systems',
    description:
      'Full-stack apps, AI-powered tools, internal dashboards, customer-facing platforms, API integrations, and cloud infrastructure. Every build is designed to optimize workflows, reduce overhead, and unlock revenue.',
    tags: ['Web Apps', 'Mobile', 'APIs', 'AI Tools', 'Cloud Infra'],
    },
    {
      number: '02',
    title: 'Automation Pipelines',
    description:
      "CRM workflows, email/SMS systems, lead capture, sales funnels, booking, content distribution, and ERP-linked automations. Your business runs even when you're not awake.",
    tags: ['CRM Flows', 'Email/SMS', 'Lead Capture', 'n8n / Zapier'],
    },
    {
      number: '03',
    title: 'ERP Systems & Internal Architecture',
    description:
      'Inventory management, multi-location operations, HR flows, financial tracking, customer management, supply chain visibility, and task management. All unified on one reliable backbone.',
    tags: ['Inventory', 'HR Systems', 'Finance', 'Multi-location'],
    },
    {
      number: '04',
      title: 'Video Production & Cinematic Storytelling',
    description:
      'Brand films, lifestyle & product shoots, founder stories, social reels, and campaign footage. Finished, ready-to-publish assets delivered across all platforms.',
    tags: ['Brand Films', 'Reels', 'Commercials', 'Founder Stories'],
    },
    {
      number: '05',
    title: 'Content Editing & Post-Production',
    description:
      'Short-form and long-form editing, social media repurposing, automated posting, motion graphics, and caption optimization. Content becomes effortless, every day.',
    tags: ['Short-form', 'Long-form', 'Motion Graphics', 'Repurposing'],
    },
    {
      number: '06',
    title: 'Marketing, Brand Identity & Growth',
    description:
      'Positioning, website design, paid ads, social growth, SEO, email/SMS, influencer ecosystems, and product launch strategy. From awareness to conversion: the full lifecycle.',
    tags: ['Positioning', 'Paid Ads', 'SEO', 'Launch Strategy'],
  },
]

// ─── Wheel geometry ───────────────────────────────────────────
const N = services.length        // 6
const CX = 130                   // SVG center x
const CY = 130                   // SVG center y
const R  = 96                    // radius to nodes
const ACTIVE_R = 14              // active node radius
const INACTIVE_R = 5             // inactive node radius

// Pre-compute node positions (0° = right / 3-o'clock; clockwise)
const wheelNodes = services.map((_, i) => {
  const angle = (i / N) * 2 * Math.PI   // 0→2π, starting at 3-o'clock
  return {
    x: CX + R * Math.cos(angle),
    y: CY + R * Math.sin(angle),
  }
})

// The active node is always rendered at the 3-o'clock position (right)
// by rotating the entire wheel group -60° per step.
const STEP_DEG = 360 / N   // 60°

// ─── Component ────────────────────────────────────────────────
export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [pulseKey, setPulseKey]       = useState(0)   // remounts pulse ring

  useEffect(() => {
    const onScroll = () => {
      if (!carouselRef.current) return
      const rect        = carouselRef.current.getBoundingClientRect()
      const totalScroll = carouselRef.current.offsetHeight - window.innerHeight
      if (totalScroll <= 0) return
      const scrolled  = Math.max(0, -rect.top)
      const progress  = scrolled / totalScroll
      const newIndex  = Math.min(N - 1, Math.floor(progress * N))
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
        setPulseKey(k => k + 1)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [activeIndex])

  // Wheel rotation: bring node `activeIndex` to the 3-o'clock position
  const wheelRotDeg = -activeIndex * STEP_DEG

  return (
    <section id="services" className="bg-brand-50">

      {/* ── Static header ─────────────────────────────────────── */}
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <p className={`reveal-eyebrow text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4 ${headerVisible ? 'visible' : ''}`}>
            What We Do
        </p>
        <h2
          className={`reveal-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] max-w-2xl mb-8 ${headerVisible ? 'visible' : ''}`}
          style={{ transitionDelay: headerVisible ? '0.1s' : '0s' }}
        >
          Everything a modern brand needs, in one place.
          </h2>
        <div className="flex flex-wrap gap-2">
          {serviceTags.map((tag, i) => (
            <span
              key={tag}
              className={`reveal rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-600 ${headerVisible ? 'visible' : ''}`}
              style={{ transitionDelay: headerVisible ? `${0.15 + i * 0.025}s` : '0s' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Sticky wheel carousel ─────────────────────────────── */}
      <div
        ref={carouselRef}
        className="relative"
        style={{ height: `${N * 100}vh` }}
      >
        <div
          className="sticky top-0 flex flex-col bg-brand-50 border-t border-neutral-200 overflow-hidden"
          style={{ height: '100vh' }}
        >

          {/* ── Main row ──────────────────────────────────────── */}
          <div className="flex-1 flex min-h-0">

            {/* ── Wheel column (desktop only) ───────────────── */}
            <div className="hidden lg:flex items-center justify-center flex-shrink-0 border-r border-neutral-100"
              style={{ width: '280px' }}
            >
              <svg
                viewBox="0 0 260 260"
                width="260"
                height="260"
                aria-hidden="true"
              >
                {/* ── Dashed outer track ── */}
                <circle
                  cx={CX} cy={CY} r={R}
                  fill="none"
                  stroke="#e5e5e5"
                  strokeWidth="1"
                  strokeDasharray="3 7"
                />

                {/* ── Center dot ── */}
                <circle cx={CX} cy={CY} r={3} fill="#d4d4d4" />

                {/* ── Rotating wheel group ── */}
                {/*
                  Rotates by -STEP_DEG * activeIndex so the current
                  service's node lands at 3-o'clock (right edge).
                */}
                <g
                  style={{
                    transform: `rotate(${wheelRotDeg}deg)`,
                    transformOrigin: `${CX}px ${CY}px`,
                    transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {wheelNodes.map(({ x, y }, i) => {
                    const isActive = i === activeIndex

                    return (
                      <g key={i}>
                        {/* Spoke from center to node */}
                        <line
                          x1={CX} y1={CY}
                          x2={x}  y2={y}
                          stroke={isActive ? '#0a0a0a' : '#ebebeb'}
                          strokeWidth={isActive ? 1.5 : 0.75}
                          style={{ transition: 'stroke 0.35s ease, stroke-width 0.35s ease' }}
                        />

                        {/* Inactive base circle (always shown) */}
                        <circle
                          cx={x} cy={y}
                          r={INACTIVE_R}
                          fill="none"
                          stroke="#d4d4d4"
                          strokeWidth="1.5"
                        />

                        {/* Active fill circle (fades in/out) */}
                        <circle
                          cx={x} cy={y}
                          r={ACTIVE_R}
                          fill="#0a0a0a"
                          stroke="#0a0a0a"
                          strokeWidth="1.5"
                          style={{
                            opacity: isActive ? 1 : 0,
                            transition: 'opacity 0.35s ease',
                          }}
                        />

                        {/* Number label — counter-rotated to stay upright */}
                        <text
                          x={x} y={y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          style={{
                            fontSize: '8px',
                            fontWeight: isActive ? 700 : 400,
                            fill: isActive ? '#ffffff' : '#b4b4b4',
                            fontFamily: 'Inter, sans-serif',
                            transform: `rotate(${-wheelRotDeg}deg)`,
                            transformOrigin: `${x}px ${y}px`,
                            transition: 'fill 0.35s ease, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        >
                          {services[i].number}
                        </text>
                      </g>
                    )
                  })}
                </g>

                {/* ── Fixed active indicator at 3-o'clock ── */}
                {/* Subtle outer ring marking where active node lands */}
                <circle
                  cx={CX + R} cy={CY}
                  r={ACTIVE_R + 5}
                  fill="none"
                  stroke="#0a0a0a"
                  strokeWidth="0.75"
                  opacity={0.12}
                />

                {/* Short pointer line from center going right */}
                <line
                  x1={CX - 4} y1={CY}
                  x2={CX + R - ACTIVE_R - 7} y2={CY}
                  stroke="#d4d4d4"
                  strokeWidth="0.75"
                  strokeDasharray="2 4"
                />

                {/* ── Pulse ring — remounts on each service change ── */}
                <circle
                  key={pulseKey}
                  cx={CX + R} cy={CY}
                  r={ACTIVE_R}
                  fill="none"
                  stroke="#0a0a0a"
                  strokeWidth="2"
                  className="wheel-pulse"
                />

                {/* ── Secondary glow burst ── */}
                <circle
                  key={`glow-${pulseKey}`}
                  cx={CX + R} cy={CY}
                  r={ACTIVE_R + 4}
                  fill="#0a0a0a"
                  stroke="none"
                  className="wheel-glow"
                />
              </svg>
            </div>

            {/* ── Service content column ─────────────────────── */}
            <div
              className="flex-1 relative"
              style={{ perspective: '1000px' }}
            >
              {services.map((service, index) => {
                const diff     = index - activeIndex
                const isActive = diff === 0
                const isPrev   = diff < 0

                return (
                  <div
                    key={service.number}
                    aria-hidden={!isActive}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 48px',
                      pointerEvents: isActive ? 'auto' : 'none',
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? 'perspective(1000px) rotateX(0deg) translateY(0px) scale(1)'
                        : isPrev
                          ? 'perspective(1000px) rotateX(16deg) translateY(-56px) scale(0.97)'
                          : 'perspective(1000px) rotateX(-16deg) translateY(56px) scale(0.97)',
                      transformOrigin: isPrev ? 'bottom center' : 'top center',
                      transition:
                        'opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div className="max-w-2xl">
                      {/* Service content */}
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] mb-5">
                        {service.title}
                      </h3>
                      <p className="text-lg text-neutral-500 leading-relaxed mb-7">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map(tag => (
                          <span
                            key={tag}
                            className="rounded-full bg-white border border-neutral-200 px-3.5 py-1 text-xs font-semibold text-neutral-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
                  </div>
                </div>

          {/* ── Bottom progress bar ───────────────────────────── */}
          <div className="flex-shrink-0 border-t border-neutral-200 bg-brand-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between gap-8">

              {/* Pill dots */}
              <div className="flex items-center gap-2">
                {services.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      height: '6px',
                      borderRadius: '9999px',
                      backgroundColor:
                        i === activeIndex ? '#0a0a0a'
                        : i < activeIndex  ? '#d4d4d4'
                        :                   '#e9e9e9',
                      width: i === activeIndex ? '28px' : '6px',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                ))}
                </div>

              {/* Active service name — slides in */}
              <span
                className="hidden sm:block text-sm font-semibold text-neutral-400 truncate"
                key={activeIndex}
                style={{ animation: 'fade-in 0.4s ease-out forwards' }}
              >
                {services[activeIndex].title}
              </span>

              {/* Counter */}
              <div className="flex-shrink-0 flex items-center gap-2 tabular-nums">
                <span className="text-sm font-bold text-neutral-950">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-neutral-200 text-sm">/</span>
                <span className="text-sm text-neutral-400">
                  {String(N).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
