import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export default function OutreachSystemCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-neutral-900 to-neutral-950 py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.1)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 text-amber-400 text-sm font-semibold border border-amber-500/25">
                Case Study — Outbound
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              100 Leads Per Day. 22 Qualified Conversations Per Month.
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-300 mb-4 font-medium">
              How Flip built an AI-driven outbound system that generates predictable pipeline at scale
            </p>
            <p className="text-base text-amber-400 font-semibold tracking-wide uppercase">
              Multi-Client Outreach System — AI-Driven Lead Generation
            </p>

            {/* Hero metrics */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              {[
                { value: '100/day', label: 'Leads generated' },
                { value: '2–6%', label: 'Reply rate' },
                { value: '22', label: 'Qualified convos / mo' },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl bg-white/[0.06] border border-white/10 p-5 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">{m.value}</div>
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
              Pipeline generation is the #1 bottleneck for growing agencies and service businesses.
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Most businesses rely on referrals, word of mouth, or hope. When the pipeline dries up, they scramble. When it comes back, they're too busy to do outreach consistently.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              The problem isn't effort — it's infrastructure. Without a systematized outbound engine, pipeline becomes dependent on individual hustle rather than repeatable process.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Flip built a multi-client outreach system that automates the heavy lifting: lead discovery, enrichment, personalization, sequencing, and tracking — so qualified conversations happen on autopilot.
            </p>
            <div className="rounded-2xl bg-amber-50 border-l-4 border-amber-500 p-8 mt-8">
              <p className="text-xl font-semibold text-neutral-900 mb-1">Most outreach is random activity.</p>
              <p className="text-xl font-bold text-amber-600">This is a predictable pipeline machine.</p>
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
              Outbound breaks down at four critical points.
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Lead sourcing is slow and manual',
                  desc: 'Finding qualified prospects takes hours of manual research — time that most teams simply don\'t have or won\'t sustain consistently.',
                },
                {
                  title: 'Personalization doesn\'t scale',
                  desc: 'Generic cold emails get ignored. True personalization at scale feels impossible without AI — so most teams choose volume over quality and get neither.',
                },
                {
                  title: 'No multi-channel coordination',
                  desc: 'Effective outreach requires email + LinkedIn + DM + follow-up in the right sequence. Managing that manually across hundreds of contacts creates chaos.',
                },
                {
                  title: 'No visibility into what\'s working',
                  desc: 'Without tracking, you\'re flying blind — unable to optimize messaging, timing, or targeting because you can\'t see the data.',
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
              An end-to-end AI-powered outbound engine.
            </h2>
            <p className="text-lg text-neutral-500 mb-12">
              Every stage of the outbound process automated — from lead discovery to qualified conversation.
            </p>

            {/* System diagram */}
            <div className="flex flex-col gap-3 mb-12">
              {[
                { step: '01', label: 'Scraping + Enrichment', color: 'bg-amber-500' },
                { step: '02', label: 'Personalized Cold Email', color: 'bg-orange-500' },
                { step: '03', label: 'LinkedIn + Instagram DM Sequencing', color: 'bg-rose-500' },
                { step: '04', label: 'Dashboard Tracking + Optimization', color: 'bg-violet-500' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs font-black">{s.step}</span>
                  </div>
                  {i < 3 && (
                    <div className="absolute ml-4.5 mt-10 w-0.5 h-3 bg-neutral-200" />
                  )}
                  <div className="flex-1 rounded-xl bg-neutral-50 border border-neutral-200 px-5 py-3">
                    <span className="font-semibold text-neutral-900">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                {
                  color: 'bg-amber-50 border-amber-200',
                  accent: 'text-amber-700',
                  icon: '🔍',
                  title: 'Scraping + Lead Enrichment',
                  items: [
                    'Automated scraping from LinkedIn, Apollo, and industry-specific databases',
                    'AI-powered enrichment to add context: company size, recent activity, tech stack, hiring signals',
                    '100+ verified, enriched leads generated per day',
                    'ICP (Ideal Customer Profile) filtering to ensure only qualified leads enter the pipeline',
                  ],
                },
                {
                  color: 'bg-orange-50 border-orange-200',
                  accent: 'text-orange-700',
                  icon: '✉️',
                  title: 'Personalized Cold Email',
                  items: [
                    'AI-generated personalization using scraped context (not just {FirstName} merge tags)',
                    'Multi-step sequences: hook → value prop → social proof → CTA → follow-up',
                    'Domain warming + deliverability optimization to stay out of spam',
                    'A/B testing framework for subject lines, CTAs, and offer framing',
                  ],
                },
                {
                  color: 'bg-rose-50 border-rose-200',
                  accent: 'text-rose-700',
                  icon: '📱',
                  title: 'LinkedIn + Instagram DM Sequencing',
                  items: [
                    'Automated LinkedIn connection + message sequences timed around email touchpoints',
                    'Instagram DM outreach for visual-first industries and founder-led brands',
                    'Multi-channel coordination ensures prospects hear from us 3–4 times across different channels before we stop',
                  ],
                },
                {
                  color: 'bg-violet-50 border-violet-200',
                  accent: 'text-violet-700',
                  icon: '📊',
                  title: 'Dashboard Tracking',
                  items: [
                    'Real-time visibility: send rate, open rate, reply rate, conversion rate by stage',
                    'Prospect-level tracking to know exactly where each lead is in the sequence',
                    'Weekly performance report with actionable optimization flags',
                    'Feedback loop: replies analyzed to improve messaging continuously',
                  ],
                },
              ].map((block, i) => (
                <div key={i} className={`rounded-2xl border p-8 ${block.color}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{block.icon}</span>
                    <h3 className={`text-xl font-bold ${block.accent}`}>{block.title}</h3>
                  </div>
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
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-4">Results</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 tracking-tight">
              Predictable pipeline. Not hope.
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { value: '100+', label: 'Leads per day generated', sub: 'Verified, enriched, ICP-matched' },
                { value: '2–6%', label: 'Reply rate', sub: 'Significantly above cold email benchmarks' },
                { value: '15–30', label: 'Qualified conversations per month', sub: 'Prospects actively engaged in dialogue' },
                { value: '1–3', label: 'New retainers per campaign cycle', sub: 'Consistent deal flow, not feast or famine' },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6">
                  <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-2 leading-none">{m.value}</div>
                  <div className="text-sm font-semibold text-white mb-1">{m.label}</div>
                  <div className="text-xs text-neutral-500">{m.sub}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8">
              <p className="text-lg font-semibold text-white leading-relaxed">
                "Built a 100-leads-per-day outbound engine generating 22 qualified conversations per month."
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
              Generic cold outreach fails because it treats everyone the same. This system personalizes at scale — and covers every channel where a prospect might engage.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'AI handles the personalization burden — making every message feel 1:1 at 1-to-many scale',
                'Multi-channel sequencing dramatically increases the chance of getting a response',
                'ICP filtering means every lead in the pipeline is worth talking to',
                'The feedback loop means the system gets smarter every week',
                'Dashboard visibility means we optimize based on data, not gut feel',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <span className="text-lg text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-neutral-950 p-8">
              <p className="text-lg font-semibold text-white mb-2">
                Most businesses can't afford to rely on referrals forever.
              </p>
              <p className="text-lg font-bold text-amber-400">
                This is the infrastructure that makes pipeline predictable.
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
