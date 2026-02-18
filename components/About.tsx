export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">About Flip</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] mb-6">
              A single agency with every capability you need.
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed mb-6">
              Flip E-Commerce (under SBCI) was created for founders, startups, and established brands who need more than a marketing agency — they need a technical, creative, and operational team that builds the entire machine.
            </p>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Where most agencies specialize in one service, Flip integrates software engineering, automation, brand development, creative production, and sales enablement into a unified system.
            </p>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-brand-50 border border-neutral-200 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">Our Philosophy</p>
              <p className="text-xl font-semibold text-neutral-950 leading-snug">
                "Your brand should operate like a well-designed product: predictable, automated, scalable, and unforgettable."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Software Engineering', icon: '⚙️' },
                { label: 'Automation', icon: '⚡' },
                { label: 'Brand Identity', icon: '✦' },
                { label: 'Video Production', icon: '▶' },
                { label: 'Content Editing', icon: '✂' },
                { label: 'Growth Marketing', icon: '↗' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-xl border border-neutral-200 bg-white px-4 py-3"
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="text-sm font-medium text-neutral-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
