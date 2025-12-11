export default function Stats() {
  return (
    <section className="bg-white py-16 sm:py-24 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Proven Results
            </h2>
            <p className="text-gray-600">
              Real numbers from real clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Views Stat */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center border border-blue-200">
              <div className="text-5xl sm:text-6xl font-bold text-blue-600 mb-2">800K</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Views</div>
              <div className="text-sm text-gray-600">Across all platforms</div>
            </div>

            {/* Followers Stat */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center border border-purple-200">
              <div className="text-5xl sm:text-6xl font-bold text-purple-600 mb-2">1.4K</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Followers</div>
              <div className="text-sm text-gray-600">Organic growth</div>
            </div>

            {/* Revenue Stat */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center border border-green-200">
              <div className="text-5xl sm:text-6xl font-bold text-green-600 mb-2">+$30K</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Revenue Increase</div>
              <div className="text-sm text-gray-600">Steakhouse: $63K → $93K</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

