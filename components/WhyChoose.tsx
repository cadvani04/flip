export default function WhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose{' '}
              <span className="text-blue-600">Flip</span>
            </h2>
            <p className="text-2xl font-semibold text-gray-700 mb-8">
              One Team. One Workflow. Everything You Need.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-4">
              Most companies hire separate teams for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Development</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Branding</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Video</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Content editing</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Marketing</span>
              </div>
            </div>
            <p className="text-gray-600 italic">
              This leads to fragmented execution, misaligned strategy, and slow growth.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
            <p className="text-lg text-gray-900 font-semibold mb-4">
              Flip E-Commerce solves this by operating as your integrated technical + creative + operations partner.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We don't just build apps.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We build your brand, content ecosystem, sales engine, automations, and operational infrastructure, all at once.
            </p>
            <p className="text-xl font-bold text-blue-600">
              This is why our clients scale faster and tell stronger stories.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

