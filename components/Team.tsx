'use client'

import { useInView } from '@/components/useInView'

const teamMembers = [
  {
    name: 'Iman Yael Schaefer',
    role: 'Project Management & Design',
    image: '/team/iman-yael-schafer.jpg',
    achievements: [
      'Background in PM and web design at Crabb Blount Group & GetVirtual',
      'Led business expansion for GetVirtual Non-Profit',
      'NASA Lucy Mission Ambassador',
      'Co-founded Medlog, runner-up at UCSC Launchpad 2024',
    ],
  },
  {
    name: 'Bee Shondi Schafer',
    role: 'Innovation & Impact',
    image: '/team/bee-shondi-schafer.jpg',
    achievements: [
      'Founded three mission-driven companies in 2023',
      'Co-founded FitFormFitness, wearable tech for preventive care',
      'Co-founded Happy Habits, AI-powered habit tracking',
    ],
  },
  {
    name: 'Curran Advani',
    role: 'Software Engineering & AI',
    image: '/team/curran-advani.jpg',
    achievements: [
      'Software engineering, AI dev & technical product management',
      'Co-founded Revamp; interned as data scientist at Western Digital',
      "AI solutions at Tech4Good; multiple Dean's List honoree",
    ],
  },
  {
    name: 'Sergio Pineros',
    role: 'Marketing & Growth',
    image: '/team/sergio-pineros.jpg',
    achievements: [
      'Marketing professional since age 14',
      "Grew a casino's social media from 0 to 440K followers",
      'Transformed restaurants with no social footprint into fully booked establishments',
    ],
  },
]

export default function Team() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const { ref: gridRef, isVisible: gridVisible } = useInView()

  return (
    <section id="team" className="bg-brand-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ──────────────────────────────────────── */}
        <div ref={headerRef} className="mb-14">
          <p
            className={`reveal-eyebrow text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4 ${headerVisible ? 'visible' : ''}`}
          >
            The Team
          </p>
          <h2
            className={`reveal-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] max-w-xl mb-4 ${headerVisible ? 'visible' : ''}`}
            style={{ transitionDelay: headerVisible ? '0.1s' : '0s' }}
          >
            The experts behind Flip.
          </h2>
          <p
            className={`reveal text-lg text-neutral-500 ${headerVisible ? 'visible' : ''}`}
            style={{ transitionDelay: headerVisible ? '0.18s' : '0s' }}
          >
            A tight-knit team of engineers, creatives, and operators.
          </p>
        </div>

        {/* ── Cards — staggered fade up ────────────────────── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`reveal-scale rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col hover:border-neutral-300 hover:shadow-sm transition-all duration-200 ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: gridVisible ? `${i * 0.1}s` : '0s' }}
            >
              {/* Photo */}
              <div className="mb-5">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement
                      t.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=64&background=111111&color=ffffff&bold=true`
                    }}
                  />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-base font-bold text-neutral-950 mb-0.5">{member.name}</h3>
              <p className="text-xs font-semibold text-neutral-400 mb-4 uppercase tracking-wide">{member.role}</p>

              {/* Achievements */}
              <ul className="space-y-2.5 flex-1">
                {member.achievements.map((a, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-300 text-xs mt-1 flex-shrink-0">·</span>
                    <span className="text-xs text-neutral-500 leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
