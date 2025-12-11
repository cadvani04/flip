export default function Services() {
  const services = [
    {
      number: '01',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Custom App Development & Dev Systems',
      description: 'We design and develop software that becomes the backbone of your business. From MVPs to enterprise systems, our engineering team builds full-stack apps, AI-powered tools, internal operation dashboards, customer-facing platforms, API-based integrations, and cloud and serverless infrastructure. Every build is designed to optimize workflows, reduce overhead, and unlock revenue.',
    },
    {
      number: '02',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Automation Pipelines (AI + No-Code + Workflow Ops)',
      description: "Your business should run even when you're not awake. We build automations that eliminate bottlenecks across CRM workflows, email/SMS systems, lead capture + qualification, sales funnels, booking + scheduling, content distribution, team communication, and ERP-linked automations. Result: Less manual work. More scale. Faster growth.",
    },
    {
      number: '03',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'ERP Systems & Internal Operational Architecture',
      description: 'For companies that need structure, we build internal systems that unify teams and data: inventory management, multi-location operations, HR + onboarding flows, financial tracking, customer management, supply chain visibility, and task + project management. Your entire org runs on a single, reliable backbone built to scale.',
    },
    {
      number: '04',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Video Production & Cinematic Storytelling',
      description: 'Modern brands compete through narrative. We produce high-impact cinematic videos that define your brand identity and capture your market: commercials & brand films, lifestyle & product shoots, Wes Anderson style creative storytelling, founder stories, social media reels, event coverage, and campaign footage. We deliver finished, ready-to-publish assets across all platforms.',
    },
    {
      number: '05',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Content Editing & Post-Production Pipelines',
      description: 'Our editors create polished, high-volume content backed by automated workflows: short-form editing, long-form editing, social media repurposing, automated posting systems, motion graphics, and story and caption optimization. Content becomes effortless: every day, every channel.',
    },
    {
      number: '06',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Marketing, Brand Identity & Growth Systems',
      description: 'We blend creative direction with data-driven strategy to build brands that convert: positioning & brand identity, website design & funnels, paid ads, social media growth, SEO + content strategy, email/SMS and lifecycle marketing, influencer ecosystems, and product launch strategy. From awareness to conversion, we handle the entire lifecycle.',
    },
  ]

  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
        </div>
        <div className="max-w-6xl mx-auto space-y-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                    {service.number}
                  </div>
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
