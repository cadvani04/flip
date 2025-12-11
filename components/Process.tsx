export default function Process() {
  const steps = [
    {
      number: '01',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Intake & Strategy Blueprint',
      description: 'We analyze your current systems, brand, and growth goals.',
    },
    {
      number: '02',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Infrastructure Buildout',
      description: 'Development, automations, ERP workflows, and backend systems.',
    },
    {
      number: '03',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Brand & Creative Identity',
      description: 'Video, visuals, content pipelines, and messaging.',
    },
    {
      number: '04',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Sales & Marketing Engine',
      description: 'Paid, organic, funnels, automation.',
    },
    {
      number: '05',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Growth & Optimization',
      description: 'Continuous improvement across every layer.',
    },
  ]

  return (
    <section id="process" className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Process
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4">
            Everything we build stacks: no wasted work, no isolated teams.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto relative">
          {/* Connecting lines for desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gray-200"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 h-full">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="text-blue-600 mb-3">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
