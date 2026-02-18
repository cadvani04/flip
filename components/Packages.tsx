'use client'

import { useInView } from '@/components/useInView'

const packages = [
  {
    name: 'Growth Starter',
    price: '$3,000',
    period: '/mo',
    description: 'For businesses establishing their digital presence and starting to scale.',
    features: [
      'Social Media Management (2 platforms)',
      'Content Strategy & Calendar',
      '8 Custom Posts / Month',
      'Copywriting & Captions',
      'Monthly Analytics Report',
      'Email Marketing Setup',
      'Brand Guidelines',
      'Monthly Strategy Call',
      'Community Management',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Scale Pro',
    price: '$7,000',
    period: '/mo',
    description: 'For growing businesses ready to dominate with comprehensive marketing.',
    features: [
      'Everything in Growth Starter',
      'Social Media Management (4 platforms)',
      '20 Custom Posts / Month',
      'Paid Ad Management',
      'Landing Page Design & Dev',
      'Email Campaigns (4/month)',
      'SEO Optimization',
      'Video Content (2 videos/month)',
      'Dedicated Account Manager',
      'Weekly Strategy Calls',
    ],
    cta: 'Start Scaling',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$10,000',
    period: '/mo',
    description: 'Full-scale operations for businesses serious about market leadership.',
    features: [
      'Everything in Scale Pro',
      'All Platforms, Unlimited Content',
      'Multi-platform Paid Ads',
      'Marketing Automation & AI',
      'Custom Software Development',
      'Advanced Funnel Development',
      'Podcast Production',
      '24/7 Priority Support',
      'Performance Guarantees',
    ],
    cta: 'Dominate Your Market',
    highlight: false,
  },
]

export default function Packages() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const { ref: cardsRef, isVisible: cardsVisible } = useInView()
  const { ref: bottomRef, isVisible: bottomVisible } = useInView()

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ──────────────────────────────────────── */}
        <div ref={headerRef} className="mb-14">
          <p
            className={`reveal-eyebrow text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4 ${headerVisible ? 'visible' : ''}`}
          >
            Pricing
          </p>
          <h2
            className={`reveal-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] max-w-xl mb-3 ${headerVisible ? 'visible' : ''}`}
            style={{ transitionDelay: headerVisible ? '0.1s' : '0s' }}
          >
            Choose your growth path.
          </h2>
          <p
            className={`reveal text-lg text-neutral-500 ${headerVisible ? 'visible' : ''}`}
            style={{ transitionDelay: headerVisible ? '0.18s' : '0s' }}
          >
            Transparent pricing, powerful results.
          </p>
        </div>

        {/* ── Cards — staggered scale-in ───────────────────── */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`reveal-scale relative rounded-2xl border p-8 flex flex-col ${
                pkg.highlight
                  ? 'border-neutral-950 bg-neutral-950 text-white'
                  : 'border-neutral-200 bg-white text-neutral-950'
              } ${cardsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: cardsVisible ? `${i * 0.12}s` : '0s' }}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-white text-neutral-950 px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package name + price */}
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                  {pkg.name}
                </p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-extrabold tracking-tight">{pkg.price}</span>
                  <span className="text-sm font-medium text-neutral-400">{pkg.period}</span>
                </div>
                <p className={`text-sm leading-relaxed ${pkg.highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {pkg.description}
                </p>
              </div>

              {/* Divider */}
              <div className={`border-t mb-6 ${pkg.highlight ? 'border-neutral-800' : 'border-neutral-100'}`} />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-neutral-400' : 'text-neutral-400'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${pkg.highlight ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://calendly.com/advanicurran/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full rounded-full py-3 px-6 text-center text-sm font-semibold transition-colors ${
                  pkg.highlight
                    ? 'bg-white text-neutral-950 hover:bg-neutral-100'
                    : 'bg-neutral-950 text-white hover:bg-neutral-800'
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* ── Bottom note ─────────────────────────────────── */}
        <div
          ref={bottomRef}
          className={`reveal mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-neutral-200 bg-brand-50 px-8 py-6 ${bottomVisible ? 'visible' : ''}`}
        >
          <p className="text-neutral-600 text-sm">Not sure which package is right for you?</p>
          <a
            href="https://calendly.com/advanicurran/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-neutral-950 text-white px-6 py-2.5 text-sm font-semibold hover:bg-neutral-800 transition-colors flex-shrink-0"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
