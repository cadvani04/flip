export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              A Single Agency With{' '}
              <span className="text-blue-600">Every Capability You Need</span>
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Flip E-Commerce (under SBCI) was created for founders, startups, and established brands who need more than a marketing agency. They need a technical, creative, and operational team that builds the entire machine.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Where most agencies specialize in one service, Flip integrates software engineering, automation, brand development, creative production, and sales enablement into a unified system.
            </p>
            
            <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-sm">
              <p className="text-xl font-semibold text-gray-900 mb-2">Our core philosophy:</p>
              <p className="text-lg text-gray-700 italic">
                Your brand should operate like a well-designed product: predictable, automated, scalable, and unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

