'use client'

export default function Clients() {
  const clients = [
    { name: 'Total Fire Protection', sector: 'Industrial Services & Operations Systems', logo: '/clients/total-fire-protection.png' },
    { name: 'Airbnb Expansion Projects', sector: 'Automation, listing ops, and growth', logo: '/clients/airbnb.png' },
    { name: 'Onyx Lifestyle Club', sector: 'Luxury membership club systems & media', logo: '/clients/onyx-lifestyle.png' },
    { name: 'The Chaga Company', sector: 'E-commerce growth engine', logo: '/clients/chaga-company.png' },
    { name: 'AdasEco', sector: 'Robotics, AI mobility, B2B marketing', logo: '/clients/adaseco.png' }  ]

  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients]

  return (
    <section id="clients" className="bg-gray-50 py-16 sm:py-24 overflow-hidden">
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
        
        {/* Carousel Container */}
        <div className="relative w-full mb-12">
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedClients.map((client, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-80 mx-4 bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  {client.logo && (
                    <div className="flex justify-center mb-4 h-16">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          // Hide logo if it doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="font-bold text-gray-900 text-lg mb-2 text-center">{client.name}</div>
                  <div className="text-sm text-gray-600 text-center">{client.sector}</div>
                </div>
              ))}
            </div>
          </div>
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

