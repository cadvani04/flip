const comparisons = [
  { label: 'Development', fragmented: true },
  { label: 'Automation', fragmented: true },
  { label: 'Branding', fragmented: true },
  { label: 'Video', fragmented: true },
  { label: 'Content Editing', fragmented: true },
  { label: 'Marketing', fragmented: true },
]

export default function WhyChoose() {
  return (
    <section className="bg-brand-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: The problem */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">The Problem</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] mb-6">
              One team. One workflow. Everything you need.
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed mb-8">
              Most companies hire separate teams for every function. This leads to fragmented execution, misaligned strategy, and slow growth.
            </p>

            <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
              <div className="grid grid-cols-3 text-xs font-semibold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 px-6 py-3">
                <span>Capability</span>
                <span className="text-center">Others</span>
                <span className="text-center">Flip</span>
              </div>
              {comparisons.map((item) => (
                <div key={item.label} className="grid grid-cols-3 items-center px-6 py-3.5 border-b border-neutral-100 last:border-0">
                  <span className="text-sm font-medium text-neutral-700">{item.label}</span>
                  <div className="flex justify-center">
                    <span className="text-xs text-neutral-400 font-medium bg-neutral-100 rounded-full px-2.5 py-0.5">
                      Separate vendor
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <span className="text-xs text-neutral-950 font-semibold bg-neutral-950 text-white rounded-full px-2.5 py-0.5">
                      ✓ Included
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The solution */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-neutral-950 text-white p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">The Flip Difference</p>
              <p className="text-xl font-semibold leading-snug mb-4">
                Flip operates as your integrated technical + creative + operations partner.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                We don't just build apps. We build your brand, content ecosystem, sales engine, automations, and operational infrastructure — all at once.
              </p>
              <p className="text-white font-bold text-lg">
                This is why our clients scale faster and tell stronger stories.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '100%', desc: 'In-house execution' },
                { stat: '1', desc: 'Point of contact' },
                { stat: '6×', desc: 'Faster time-to-market' },
                { stat: '∞', desc: 'Scalable capacity' },
              ].map((item) => (
                <div key={item.desc} className="rounded-2xl border border-neutral-200 bg-white p-5 text-center">
                  <div className="text-2xl font-extrabold text-neutral-950 mb-1">{item.stat}</div>
                  <div className="text-xs text-neutral-500 font-medium">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
