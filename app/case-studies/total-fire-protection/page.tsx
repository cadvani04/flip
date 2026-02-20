import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export default function TotalFireProtectionCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-neutral-900 to-neutral-950 py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.12)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 text-blue-400 text-sm font-semibold border border-blue-500/25">
                Case Study — Operations
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Saved 12+ Hours Per Week and Improved Route Efficiency by 23%
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-300 mb-4 font-medium">
              How Flip eliminated dispatch chaos and rebuilt field operations infrastructure for Total Fire Protection
            </p>
            <p className="text-base text-blue-400 font-semibold tracking-wide uppercase">
              Total Fire Protection — Service Business / Field Operations
            </p>

            {/* Hero metrics */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              {[
                { value: '12+ hrs', label: 'Saved per week' },
                { value: '20–35%', label: 'Scheduling friction reduced' },
                { value: '15–25%', label: 'Fewer missed jobs' },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl bg-white/[0.06] border border-white/10 p-5 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-blue-400 mb-1">{m.value}</div>
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
              A growing service business held back by operational friction.
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Total Fire Protection is a field service business specializing in fire safety systems across commercial and industrial properties. With multiple technicians, daily dispatch requirements, and complex equipment tracking, operations had become increasingly difficult to manage manually.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              The business was growing — but backend operations weren't keeping pace. More jobs meant more coordination overhead, more missed communications, and more money left on the table from inefficient routing.
            </p>
            <div className="rounded-2xl bg-blue-50 border-l-4 border-blue-500 p-8 mt-8">
              <p className="text-xl font-semibold text-neutral-900 mb-1">The technicians were ready.</p>
              <p className="text-xl font-bold text-blue-600">The systems behind them weren't.</p>
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
              Four operational bottlenecks compounding daily.
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Manual dispatch coordination',
                  desc: 'Job assignments were handled through phone calls, texts, and spreadsheets — creating endless back-and-forth, miscommunications, and wasted time on both sides.',
                },
                {
                  title: 'Route inefficiencies',
                  desc: 'Technicians were often routed based on familiarity rather than logic — costing significant drive time, fuel, and billable hours every single week.',
                },
                {
                  title: 'Equipment tracking confusion',
                  desc: 'No centralized system for knowing which equipment was at which job, in what condition, or when servicing was due — leading to reactive scrambles.',
                },
                {
                  title: 'Limited operational visibility',
                  desc: 'Management had no real-time view of job status, technician location, or schedule performance. Decisions were made on memory and gut feel.',
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
              A complete field operations system — not a band-aid.
            </h2>
            <p className="text-lg text-neutral-500 mb-12">
              We audited the full operational workflow and rebuilt it around a single source of truth.
            </p>

            <div className="space-y-6">
              {[
                {
                  color: 'bg-blue-50 border-blue-200',
                  accent: 'text-blue-700',
                  icon: '🗂',
                  title: 'CRM-Based Scheduling System',
                  items: [
                    'Centralized job management — every job visible in one place',
                    'Automated assignment logic based on technician availability and location',
                    'Status tracking from dispatch through completion',
                    'Customer notification automation tied to job milestones',
                  ],
                },
                {
                  color: 'bg-emerald-50 border-emerald-200',
                  accent: 'text-emerald-700',
                  icon: '🗺',
                  title: 'Route Planning Logic',
                  items: [
                    'Proximity-based routing to cluster jobs by geography',
                    'Drive time optimization reducing wasted transit hours',
                    'Daily route output delivered automatically each morning',
                  ],
                },
                {
                  color: 'bg-violet-50 border-violet-200',
                  accent: 'text-violet-700',
                  icon: '🔧',
                  title: 'Equipment Set Standardization',
                  items: [
                    'Equipment inventory mapped to job types and technician roles',
                    'Standardized loadout checklists per job category',
                    'Maintenance tracking and service history per asset',
                  ],
                },
                {
                  color: 'bg-amber-50 border-amber-200',
                  accent: 'text-amber-700',
                  icon: '⏱',
                  title: 'Job Duration Estimation Model',
                  items: [
                    'Historical data used to build time estimates per job type',
                    'Schedule buffer logic to prevent chronic overrun and cascading delays',
                    'Technician capacity planning by day and week',
                  ],
                },
                {
                  color: 'bg-neutral-100 border-neutral-200',
                  accent: 'text-neutral-700',
                  icon: '📊',
                  title: 'Real-Time Dashboard Visibility',
                  items: [
                    'Management dashboard showing live job status and technician positions',
                    'KPI tracking: jobs completed, utilization rate, on-time rate',
                    'Weekly performance reporting built into the system',
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
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-4">Results</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 tracking-tight">
              Operations got measurably faster. And management could finally see it in real time.
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { value: '8–15 hrs', label: 'Per week saved in coordination', sub: 'Freed up for revenue-generating activity' },
                { value: '20–35%', label: 'Reduction in scheduling friction', sub: 'Fewer errors, callbacks, and fix-its' },
                { value: '15–30%', label: 'Faster job assignment', sub: 'From request to confirmed technician' },
                { value: '10–20%', label: 'Improvement in technician utilization', sub: 'More billable hours per shift' },
                { value: '15–25%', label: 'Reduction in missed jobs', sub: 'Via automated confirmation + reminders' },
                { value: 'Real-time', label: 'Operational visibility', sub: 'Live dashboard for management' },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6">
                  <div className="text-2xl sm:text-3xl font-black text-blue-400 mb-2 leading-none">{m.value}</div>
                  <div className="text-sm font-semibold text-white mb-1">{m.label}</div>
                  <div className="text-xs text-neutral-500">{m.sub}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-8">
              <p className="text-lg font-semibold text-white leading-relaxed">
                "Saved 12+ hours per week in dispatch coordination and improved route efficiency by 23%."
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
              Most software implementations fix one problem and create three others. We mapped the full operational chain before touching a single tool.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'We audited how work actually flowed — not how management thought it did',
                'The system was built around technicians\' real workflows, not generic templates',
                'Every piece of the stack connects: scheduling → routing → equipment → tracking',
                'Management visibility was built in from day one — not bolted on after the fact',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-lg text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-neutral-950 p-8">
              <p className="text-lg font-semibold text-white mb-2">
                Total Fire Protection didn't need new software.
              </p>
              <p className="text-lg font-bold text-blue-400">
                They needed a system that actually fit how their business runs.
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
