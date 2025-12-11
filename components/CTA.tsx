export default function CTA() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Build Your Complete System?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            Join founders and brands who've chosen one partner for everything: development, automation, branding, video, content, and marketing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">
              Get Started Today
            </button>
            <button className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
