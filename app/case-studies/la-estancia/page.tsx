import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export default function LaEstanciaCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-28 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30">
                Case Study
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              1M+ Views. $30K in Revenue. One Local Restaurant.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4">
              How a legacy restaurant rebuilt demand using modern content, automation, and local momentum
            </p>
            <p className="text-lg text-gray-400">
              La Estancia Steakhouse
            </p>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Background</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La Estancia is a long-standing steakhouse with a loyal local following. The food was never the problem.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-gray-900">The problem was visibility.</strong>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Like many established restaurants, La Estancia relied on reputation, walk-ins, and word of mouth. That worked for years. But consumer behavior shifted:
              </p>
              <ul className="text-lg text-gray-700 leading-relaxed mb-6 space-y-3 list-disc list-inside">
                <li>Fewer people searched "restaurants" on Google</li>
                <li>More people discovered places through Instagram, TikTok, and short-form video</li>
                <li>Attention moved from websites to feeds</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La Estancia had no consistent content engine, no distribution system, and no way to turn online attention into measurable revenue.
              </p>
              <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600 mt-8">
                <p className="text-xl font-semibold text-gray-900 mb-2">They didn't need a rebrand.</p>
                <p className="text-xl font-semibold text-blue-600">They needed demand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The Problem</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Before working together, La Estancia faced three core issues:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Zero predictable inbound traffic</h3>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li>No system for generating daily or weekly discovery</li>
                  <li>Social posting was inconsistent and low reach</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. No connection between marketing and revenue</h3>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li>Promotions were manual and sporadic</li>
                  <li>No way to track what content actually drove customers</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. High effort, low leverage</h3>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li>Any growth required staff time or one-off campaigns</li>
                  <li>Nothing compounded</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 text-center">
              <p className="text-xl font-semibold text-white">
                The goal wasn't "better social media."
              </p>
              <p className="text-2xl font-bold text-blue-400 mt-2">
                The goal was <span className="text-white">repeatable demand</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The Approach</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We treated La Estancia like a media brand first, restaurant second.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Instead of ads or discounts, we built a system around three principles:
            </p>

            <div className="space-y-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Short-form content that earns attention</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We focused on content people actually stop scrolling for:
                </p>
                <ul className="text-gray-700 space-y-2 list-disc list-inside mb-4">
                  <li>Food visuals</li>
                  <li>Kitchen energy</li>
                  <li>Human moments</li>
                  <li>Local relevance</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Everything was designed to feel native to TikTok and Instagram, not like an ad.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Distribution at scale</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Posting wasn't the bottleneck. Distribution was.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We implemented a system to:
                </p>
                <ul className="text-gray-700 space-y-2 list-disc list-inside mb-4">
                  <li>Repurpose content across platforms</li>
                  <li>Maintain consistent volume</li>
                  <li>Test formats rapidly</li>
                  <li>Double down on what performed</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Revenue connection</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Attention without conversion is vanity.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We tied content back to:
                </p>
                <ul className="text-gray-700 space-y-2 list-disc list-inside mb-4">
                  <li>In-store demand</li>
                  <li>Time-based promotions</li>
                  <li>Measurable sales lift</li>
                </ul>
                <p className="text-lg font-semibold text-gray-900">
                  The focus was simple: <span className="text-green-700">if it didn't move customers, it didn't matter.</span>
                </p>
              </div>
            </div>

            {/* Video Thumbnail Placeholder */}
            <div className="bg-gray-100 rounded-xl p-12 border-2 border-dashed border-gray-300 text-center mb-8">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-600 font-medium">Video Thumbnail Placeholder</p>
              <p className="text-sm text-gray-500 mt-2">Example: Short-form content showcase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Execution</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Over the first month, we launched:
              </p>
              <ul className="text-lg text-gray-700 leading-relaxed mb-6 space-y-3 list-disc list-inside">
                <li>A consistent short-form content pipeline</li>
                <li>High-frequency posting optimized for local discovery</li>
                <li>Performance tracking on views, engagement, and customer response</li>
                <li>Iteration loops to refine what worked</li>
              </ul>
              <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600 mt-8">
                <p className="text-xl font-semibold text-gray-900 mb-2">No influencers.</p>
                <p className="text-xl font-semibold text-gray-900 mb-2">No paid ads at the start.</p>
                <p className="text-xl font-semibold text-blue-600">Just systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Results</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Within the first month:
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center border border-blue-200">
                <div className="text-5xl sm:text-6xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Organic Views</div>
                <div className="text-sm text-gray-600">Across social platforms</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center border border-purple-200">
                <div className="text-5xl sm:text-6xl font-bold text-purple-600 mb-2">$30K</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Additional Revenue</div>
                <div className="text-sm text-gray-600">Attributed to demand</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center border border-green-200">
                <div className="text-5xl sm:text-6xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Organic Growth</div>
                <div className="text-sm text-gray-600">No paid ads</div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                More importantly:
              </p>
              <ul className="text-lg text-gray-700 leading-relaxed mb-6 space-y-3 list-disc list-inside">
                <li>Content continued to perform after posting</li>
                <li>Momentum compounded instead of resetting each week</li>
                <li>La Estancia became discoverable to people who had never heard of it before</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border-l-4 border-green-600">
              <p className="text-xl font-semibold text-gray-900">
                This wasn't a viral fluke.
              </p>
              <p className="text-xl font-semibold text-green-600 mt-2">
                It was predictable.
              </p>
            </div>

            {/* Graph Placeholder */}
            <div className="mt-12 bg-gray-100 rounded-xl p-12 border-2 border-dashed border-gray-300 text-center">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-gray-600 font-medium">Performance Graph Placeholder</p>
              <p className="text-sm text-gray-500 mt-2">Example: Views over time, Revenue lift chart</p>
            </div>

            {/* Quote Placeholder */}
            <div className="mt-8 bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
              <svg className="w-12 h-12 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-lg text-gray-700 italic mb-4">
                "Quote placeholder from owner/staff about the results and impact."
              </p>
              <p className="text-base font-semibold text-gray-900">
                Restaurant Owner/Staff Name
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Worked Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Why It Worked</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Most restaurants try to "do marketing."
              </p>
              <p className="text-xl font-semibold text-gray-900 mb-8">
                We built an <span className="text-blue-600">engine</span>.
              </p>
              <ul className="text-lg text-gray-700 leading-relaxed mb-6 space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Content was designed for attention, not aesthetics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Distribution was treated as a system, not a task</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Revenue was the feedback loop, not likes</span>
                </li>
              </ul>
              <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600 mt-8">
                <p className="text-xl font-semibold text-gray-900">
                  La Estancia didn't change who they were.
                </p>
                <p className="text-xl font-semibold text-blue-600 mt-2">
                  They changed how people discovered them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Takeaway Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The Takeaway</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-semibold text-gray-900 mb-6">
                Local businesses don't lose because they're bad.
              </p>
              <p className="text-xl font-semibold text-gray-900 mb-8">
                They lose because they're invisible.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La Estancia proved that:
              </p>
              <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-3 list-disc list-inside">
                <li>Legacy brands can win online</li>
                <li>Organic attention can drive real revenue</li>
                <li>Systems beat campaigns every time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
