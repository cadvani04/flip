export default function Clients() {
  const clients = [
    { name: 'NailedIt Labs', sector: 'Beauty / Retail Tech Marketing' },
    { name: 'Total Fire Protection', sector: 'Industrial Services & Operations Systems' },
    { name: 'Airbnb Expansion Projects', sector: 'Automation, listing ops, and growth' },
    { name: 'Onyx Lifestyle Club', sector: 'Luxury membership club systems & media' },
    { name: 'The Chaga Company', sector: 'E-commerce growth engine' },
    { name: '1zKing', sector: 'Apparel + marketplace scaling' },
    { name: 'LITLab Healthcare', sector: 'Medical marketing + education systems' },
    { name: 'AdasEco', sector: 'Robotics, AI mobility, B2B marketing' },
    { name: 'WattNest / WattSync', sector: 'Hardware SaaS branding + investor readiness' },
    { name: 'Founder & Startup Ecosystem Projects', sector: 'App builds + content pipelines' },
  ]

  return (
    <section id="clients" className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Clients &{' '}
            <span className="text-blue-600">Sectors Served</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            We work across industries because we build systems, not templates.
          </p>
          <p className="text-base text-gray-500 mt-4">
            A snapshot of brands we support:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
              <div className="font-bold text-gray-900 text-lg mb-2">{client.name}</div>
              <div className="text-sm text-gray-600">{client.sector}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 italic">
            Our versatility is driven by our infrastructure-first approach.
          </p>
          <p className="text-xl font-semibold text-gray-900 mt-2">
            If you can imagine it, we can build the system behind it.
          </p>
        </div>
      </div>
    </section>
  )
}

