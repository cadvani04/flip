'use client'

import { useInView } from '@/components/useInView'

const stats = [
  { value: '800K+', label: 'Views across all platforms' },
  { value: '1.4K', label: 'Followers, organic growth' },
  { value: '+$30K', label: 'Revenue increase for clients' },
  { value: '5+', label: 'Industries served' },
]

export default function Stats() {
  const { ref, isVisible } = useInView()

  return (
    <section className="border-y border-neutral-200 bg-brand-50 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-200">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`reveal-stat px-6 lg:px-10 py-4 first:pl-0 last:pr-0 text-center lg:text-left ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 0.1}s` : '0s' }}
            >
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-neutral-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
