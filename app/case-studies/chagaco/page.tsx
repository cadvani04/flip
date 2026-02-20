import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export default function ChagaCoCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-neutral-900 to-neutral-950 py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(16,185,129,0.12)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 text-emerald-400 text-sm font-semibold border border-emerald-500/25">
                Case Study — Ecommerce
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Turned Email Into a 30%+ Revenue Channel in Under 90 Days
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-300 mb-4 font-medium">
              How Flip rebuilt ChagaCo's backend monetization from the ground up
            </p>
            <p className="text-base text-emerald-400 font-semibold tracking-wide uppercase">
              ChagaCo — Wellness / Functional Beverage
            </p>

            {/* Hero metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
              {[
                { value: '4K/mo', label: 'Newsletter subscribers' },
                { value: '18–35%', label: 'Email revenue lift' },
                { value: '25–40%', label: 'Of total store revenue' },
                { value: '10–20%', label: 'Repeat purchase lift' },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl bg-white/[0.06] border border-white/10 p-5 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 mb-1">{m.value}</div>
                  <div className="text-xs text-neutral-400 font-medium leading-tight">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Background</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-8 tracking-tight">
              Great product. Untapped revenue sitting in the backend.
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              ChagaCo is a wellness brand in the functional beverage space — a category with strong consumer demand and repeat purchasing potential. They had traffic. They had product-market fit. They had a growing email list.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              But the revenue didn't reflect it.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Like many DTC brands at their stage, ChagaCo was leaving money on the table. Not because of a bad product — but because the infrastructure to monetize their existing audience simply wasn't in place.
            </p>
            <div className="rounded-2xl bg-emerald-50 border-l-4 border-emerald-500 p-8 mt-8">
              <p className="text-xl font-semibold text-neutral-900 mb-1">The traffic was there.</p>
              <p className="text-xl font-bold text-emerald-600">The lifecycle system wasn't.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-neutral-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">The Challenge</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-10 tracking-tight">
              Four gaps killing backend monetization.
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Traffic without backend monetization',
                  desc: 'Visitors were arriving but no structured system existed to capture them into a revenue-generating lifecycle.',
                },
                {
                  title: 'No campaign calendar',
                  desc: 'Email sends were sporadic and reactive — no consistent cadence meant missed opportunities every single week.',
                },
                {
                  title: 'Zero lifecycle automation',
                  desc: 'No welcome series. No abandoned cart flows. No post-purchase nurture. No winback sequences.',
                },
                {
                  title: 'Low repeat purchase optimization',
                  desc: 'Existing customers weren\'t being nurtured into a second, third, or fourth purchase — a critical failure for a subscription-eligible product.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border-l-4 border-rose-400 shadow-sm">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Flip Built */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">What Flip Built</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-6 tracking-tight">
              A complete lifecycle revenue engine.
            </h2>
            <p className="text-lg text-neutral-500 mb-12">
              We didn't "improve" their email. We rebuilt the entire backend revenue architecture from the ground up.
            </p>

            {/* Content photo */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 mb-8">
              <img
                src="/clients/chagaco-content.jpg"
                alt="The Chaga Company — content marketing in action"
                className="w-full object-cover max-h-[480px]"
              />
              <div className="bg-neutral-50 px-5 py-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                <p className="text-sm text-neutral-500">
                  Real content we produced for ChagaCo — story-driven, audience-first, brand-authentic.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  color: 'bg-emerald-50 border-emerald-200',
                  accent: 'text-emerald-700',
                  title: 'Newsletter Growth to 4,000 Subscribers / Month',
                  items: [
                    'Built and scaled a consistent newsletter from scratch to 4,000 active subscribers per month',
                    'Story-driven content format covering wellness education, product spotlights, and brand narrative',
                    'List segmentation to deliver the right message to the right subscriber at the right time',
                    'Newsletter-to-store conversion flows turning readers into repeat buyers',
                  ],
                },
                {
                  color: 'bg-sky-50 border-sky-200',
                  accent: 'text-sky-700',
                  title: 'Full Lifecycle Email Automation',
                  items: [
                    'Welcome series — brand story, social proof, first-purchase conversion',
                    'Cart abandonment flows — 3-step recovery sequence with offer escalation',
                    'Post-purchase nurture — cross-sell, education, loyalty building',
                    'Winback campaign — dormant customer reactivation with time-sensitive hooks',
                  ],
                },
                {
                  color: 'bg-blue-50 border-blue-200',
                  accent: 'text-blue-700',
                  title: 'Weekly Campaign Calendar',
                  items: [
                    'Structured send schedule across the full month',
                    'Content themes aligned to product launches, seasons, and promotions',
                    'A/B test slots baked into the calendar from day one',
                  ],
                },
                {
                  color: 'bg-violet-50 border-violet-200',
                  accent: 'text-violet-700',
                  title: 'Offer Testing Structure',
                  items: [
                    'Systematic framework for testing discount levels, bundle offers, and urgency mechanics',
                    'Data-driven iteration to find the highest-converting offer for each segment',
                  ],
                },
                {
                  color: 'bg-amber-50 border-amber-200',
                  accent: 'text-amber-700',
                  title: 'Landing Page Iteration Framework',
                  items: [
                    'CRO-focused landing pages tied to each campaign',
                    'Structured testing loop: hypothesis → variant → measure → iterate',
                    '6–12% lift in conversion from offer + page refinement',
                  ],
                },
              ].map((block, i) => (
                <div key={i} className={`rounded-2xl border p-8 ${block.color}`}>
                  <h3 className={`text-xl font-bold mb-4 ${block.accent}`}>{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-neutral-700">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${block.accent.replace('text-', 'bg-')}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-neutral-950 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">Results</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 tracking-tight">
              Email went from an afterthought to the primary revenue lever.
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { value: '4,000/mo', label: 'Newsletter subscribers', sub: 'Built and scaled from the ground up' },
                { value: '18–35%', label: 'Increase in email-attributed revenue', sub: 'Tracked across campaign + flow performance' },
                { value: '25–40%', label: 'Of total store revenue from email', sub: 'After lifecycle optimization' },
                { value: '6–12%', label: 'Conversion rate lift', sub: 'From offer + landing page refinement' },
                { value: '10–20%', label: 'Repeat purchase rate increase', sub: 'From post-purchase nurture + winback' },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6">
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 mb-2 leading-none">{m.value}</div>
                  <div className="text-sm font-semibold text-white mb-1">{m.label}</div>
                  <div className="text-xs text-neutral-500">{m.sub}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8">
              <p className="text-lg font-semibold text-white leading-relaxed">
                "Built ChagaCo's newsletter to 4,000 subscribers per month and turned email into a 30%+ revenue channel in under 90 days."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Worked */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-8 tracking-tight">Why It Worked</h2>
            <p className="text-lg text-neutral-500 mb-8">
              Most brands treat email as a broadcast channel. We treated it as a revenue infrastructure problem.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Every flow was built around buyer psychology, not just aesthetics',
                'The campaign calendar created consistency — which compounded over time',
                'Offer testing meant we kept optimizing, not guessing',
                'Landing pages were extensions of the email, not separate afterthoughts',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-neutral-950 p-8">
              <p className="text-lg font-semibold text-white mb-2">
                ChagaCo didn't need more traffic.
              </p>
              <p className="text-lg font-bold text-emerald-400">
                They needed a system to monetize the traffic they already had.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
