import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export default function SantaCruzPortfolioCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-neutral-900 to-neutral-950 py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.12)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/15 text-violet-400 text-sm font-semibold border border-violet-500/25">
                Case Study — Local Lead Gen
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              A Repeatable Short-Form Growth Engine Across Santa Cruz's Restaurant Scene
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-300 mb-4 font-medium">
              How Flip built local visibility, inbound demand, and consistent foot traffic across multiple restaurant locations
            </p>
            <p className="text-base text-violet-400 font-semibold tracking-wide uppercase">
              Santa Cruz Restaurant Portfolio — Multi-Location Hospitality
            </p>

            {/* Hero metrics */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              {[
                { value: 'Multi-loc', label: 'Unified growth engine' },
                { value: 'Organic', label: 'Inbound DMs & bookings' },
                { value: 'Foot traffic', label: 'Promo-driven lift' },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl bg-white/[0.06] border border-white/10 p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-violet-400 mb-1">{m.value}</div>
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
              Great food. Great culture. An invisible digital presence.
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              The Santa Cruz restaurant scene is a competitive local market with passionate owners and loyal regulars. But in a world where discovery increasingly happens through short-form video and social feeds, even the best-loved local spots were flying under the radar digitally.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Across multiple Santa Cruz restaurants, we identified a consistent pattern: high-quality food and atmosphere, but no systematic way to translate that into online visibility, inbound bookings, or measurable foot traffic from content.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              These weren't brands that needed to change — they needed to be seen.
            </p>
            <div className="rounded-2xl bg-violet-50 border-l-4 border-violet-500 p-8 mt-8">
              <p className="text-xl font-semibold text-neutral-900 mb-1">The experience was there.</p>
              <p className="text-xl font-bold text-violet-600">The distribution system wasn't.</p>
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
              The same gaps, repeated across every location.
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Minimal consistent posting',
                  desc: 'Content was sporadic at best — a photo here, a Story there, with no strategy, no cadence, and no compounding momentum.',
                },
                {
                  title: 'Low engagement',
                  desc: 'When content did go out, it wasn\'t built to stop the scroll. Low engagement meant the algorithm deprioritized it further, creating a downward spiral.',
                },
                {
                  title: 'No systemized content capture',
                  desc: 'Staff had no process for capturing content during service — meaning the best visual moments were lost daily and never made it online.',
                },
                {
                  title: 'No inbound funnel from social',
                  desc: 'Followers (when they existed) had no clear path to action — no CTAs, no DM workflows, no way to turn attention into a booking or reservation.',
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
              A content-to-customer engine that scales across locations.
            </h2>
            <p className="text-lg text-neutral-500 mb-12">
              We didn't create a one-off campaign. We built a repeatable system that each restaurant could run and maintain.
            </p>

            <div className="space-y-6">
              {[
                {
                  color: 'bg-violet-50 border-violet-200',
                  accent: 'text-violet-700',
                  icon: '🎬',
                  title: '3–5 Video / Week Short-Form Cadence',
                  items: [
                    'Consistent publishing schedule across TikTok, Instagram Reels, and YouTube Shorts',
                    'Content batching model so restaurants could capture a week of content in one session',
                    'Platform-specific formatting and optimization for each channel',
                  ],
                },
                {
                  color: 'bg-blue-50 border-blue-200',
                  accent: 'text-blue-700',
                  icon: '🎭',
                  title: 'Story-Based Restaurant Content Format',
                  items: [
                    'Behind-the-scenes kitchen content that humanized each brand',
                    'Chef and staff-led storytelling to build authentic connection with local audience',
                    'Visual food narratives designed to create desire and urgency',
                  ],
                },
                {
                  color: 'bg-emerald-50 border-emerald-200',
                  accent: 'text-emerald-700',
                  icon: '🪝',
                  title: 'Hook + Retention Scripting',
                  items: [
                    'Every video opens with a scroll-stopping hook designed for the platform',
                    'Retention scripting to keep viewers watching through to the CTA',
                    'Testing framework for hook variations to find highest-performing formats',
                  ],
                },
                {
                  color: 'bg-amber-50 border-amber-200',
                  accent: 'text-amber-700',
                  icon: '📍',
                  title: 'Local CTA Structure',
                  items: [
                    'Location-specific calls to action: reservation links, DM prompts, address drops',
                    'Promo-timed CTAs tied to weekly specials or events',
                    'Bio and link optimization to capture inbound traffic from content',
                  ],
                },
                {
                  color: 'bg-rose-50 border-rose-200',
                  accent: 'text-rose-700',
                  icon: '🤳',
                  title: 'UGC Capture Workflow',
                  items: [
                    'Staff training to identify and capture content moments in real time',
                    'Customer-facing prompts to generate organic UGC during visits',
                    'Repurposing pipeline to turn customer content into owned content',
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
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-4">Results</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Visibility that turns into tables.
            </h2>
            <p className="text-base text-neutral-400 mb-12">
              Unlike vanity metrics, every KPI we track maps back to foot traffic, bookings, and inbound demand.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { value: '60–120%', label: 'Follower growth in 60–90 days', sub: 'Per restaurant, organic only' },
                { value: '100K–250K', label: 'Local video views', sub: 'Per location over the campaign period' },
                { value: '8–12%', label: 'Engagement rate', sub: 'Well above platform averages' },
                { value: '10–25', label: 'Inbound DMs per month', sub: 'From local customers asking about hours, specials, reservations' },
                { value: 'Noticeable', label: 'Promo-driven foot traffic lift', sub: 'Measurable spike during promotion-linked content' },
                { value: 'Repeatable', label: 'System across all locations', sub: 'One engine, deployed across the portfolio' },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6">
                  <div className="text-2xl sm:text-3xl font-black text-violet-400 mb-2 leading-none">{m.value}</div>
                  <div className="text-sm font-semibold text-white mb-1">{m.label}</div>
                  <div className="text-xs text-neutral-500">{m.sub}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-8">
              <p className="text-lg font-semibold text-white leading-relaxed">
                "Built a repeatable short-form growth engine across multiple Santa Cruz restaurants, generating cumulative local views and consistent inbound inquiries."
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
              Local restaurants don't need national reach. They need the right people in the right 10-mile radius to know they exist and feel compelled to visit.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Content was designed for local discovery — every post built to surface to nearby audiences',
                'Authenticity was the strategy — no over-produced content, just real moments from real kitchens',
                'The system was built to sustain itself — not dependent on Flip being in-house daily',
                'Each location had its own voice, but ran on the same proven engine',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-violet-500 flex-shrink-0" />
                  <span className="text-lg text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-neutral-950 p-8">
              <p className="text-lg font-semibold text-white mb-2">
                These restaurants didn't need a rebrand or a bigger ad budget.
              </p>
              <p className="text-lg font-bold text-violet-400">
                They needed a system to make their existing experience discoverable.
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
