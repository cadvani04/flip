export default function CTA() {
  return (
    <section className="bg-brand-50 border-y border-neutral-200 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Let's Talk</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] mb-4">
              Ready to build your complete system?
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Join founders and brands who've chosen one partner for everything — development, automation, branding, video, content, and marketing.
            </p>
          </div>

          {/* Right: actions */}
          <div className="space-y-4">
            <a
              href="https://calendly.com/advanicurran/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between rounded-2xl border border-neutral-200 bg-white px-6 py-5 hover:border-neutral-400 hover:shadow-sm transition-all group"
            >
              <div>
                <p className="text-sm font-bold text-neutral-950 mb-0.5">Book a Strategy Call</p>
                <p className="text-xs text-neutral-500">30 minutes — free, no obligation</p>
              </div>
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-neutral-950 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href="mailto:advanicurran@gmail.com"
              className="flex w-full items-center justify-between rounded-2xl border border-neutral-200 bg-white px-6 py-5 hover:border-neutral-400 hover:shadow-sm transition-all group"
            >
              <div>
                <p className="text-sm font-bold text-neutral-950 mb-0.5">Send a Message</p>
                <p className="text-xs text-neutral-500">We'll be in touch within 24 hours</p>
              </div>
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-neutral-950 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <div className="rounded-2xl bg-neutral-950 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">Start your project</p>
              <p className="text-white font-bold text-sm mb-4">Get custom solutions hand-picked for your scope, brand, and goals.</p>
              <a
                href="https://calendly.com/advanicurran/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-950 px-6 py-2.5 text-sm font-semibold hover:bg-neutral-100 transition-colors"
              >
                Get Started Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
