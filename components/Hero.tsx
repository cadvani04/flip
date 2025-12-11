import RotatingHeadline from '@/components/RotatingHeadline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Blue Pill Button */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Flip E-Commerce
            </span>
          </div>

          {/* Rotating Headline */}
          <RotatingHeadline />

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-8">
            Flip E-Commerce is a full-stack growth and innovation studio.
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            We merge custom software development, automation pipelines, ERP workflows, brand identity, video production, content editing, and marketing execution into one seamless infrastructure.
          </p>

          <p className="text-xl font-semibold text-gray-900 mb-4">
            From concept to scale, we architect everything a company needs to grow.
          </p>

          <p className="text-2xl font-bold text-blue-600 mb-8">
            One partner. One workflow. Infinite scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-colors">
              See Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
