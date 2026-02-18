'use client'

import { useInView } from '@/components/useInView'

const clients = [
  { name: 'Total Fire Protection', sector: 'Industrial Services & Operations', logo: '/clients/total-fire-protection.png' },
  { name: 'Airbnb Expansion Projects', sector: 'Automation, listing ops & growth', logo: '/clients/airbnb.png' },
  { name: 'Onyx Lifestyle Club', sector: 'Luxury membership & media', logo: '/clients/onyx-lifestyle.png' },
  { name: 'The Chaga Company', sector: 'E-commerce growth engine', logo: '/clients/chaga-company.png' },
  { name: 'AdasEco', sector: 'Robotics, AI mobility & B2B marketing', logo: '/clients/adaseco.png' },
]

export default function Clients() {
  const doubled = [...clients, ...clients]
  const { ref: headerRef, isVisible: headerVisible } = useInView()

  return (
    <section id="clients" className="bg-white py-20 sm:py-28 overflow-hidden">

      {/* ── Header ────────────────────────────────────────── */}
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <p
          className={`reveal-eyebrow text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4 ${headerVisible ? 'visible' : ''}`}
        >
          Our Clients
        </p>
        <h2
          className={`reveal-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] max-w-2xl mb-4 ${headerVisible ? 'visible' : ''}`}
          style={{ transitionDelay: headerVisible ? '0.1s' : '0s' }}
        >
          Brands we've built systems for.
        </h2>
        <p
          className={`reveal text-lg text-neutral-500 max-w-xl ${headerVisible ? 'visible' : ''}`}
          style={{ transitionDelay: headerVisible ? '0.18s' : '0s' }}
        >
          We work across industries because we build systems, not templates. If you can imagine it, we can build the infrastructure behind it.
        </p>
      </div>

      {/* ── Scrolling carousel ────────────────────────────── */}
      <div className="relative w-full">
        {/* Left/right fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-5 px-4">
            {doubled.map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 rounded-2xl border border-neutral-200 bg-brand-50 p-6 hover:border-neutral-300 hover:bg-white transition-all duration-200"
              >
                {client.logo && (
                  <div className="h-12 flex items-center mb-4">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement
                        t.style.display = 'none'
                      }}
                    />
                  </div>
                )}
                <p className="font-bold text-neutral-950 text-base mb-1">{client.name}</p>
                <p className="text-sm text-neutral-500">{client.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom tagline ────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <p className="text-sm text-neutral-400 italic">
          Our versatility is driven by an infrastructure-first approach.
        </p>
      </div>
    </section>
  )
}
