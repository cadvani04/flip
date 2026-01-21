export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Build Your Complete System?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-blue-100 leading-relaxed mb-8">
            Join founders and brands who've chosen one partner for everything: development, automation, branding, video, content, and marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://calendly.com/advanicurran/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule Your Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="mailto:advanicurran@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Contact Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
