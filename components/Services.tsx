const serviceTags = [
  'Custom App Development',
  'Automation Pipelines',
  'ERP Systems',
  'AI Integration',
  'Video Production',
  'Brand Identity',
  'Content Editing',
  'Paid Ads',
  'Organic Social',
  'SEO Strategy',
  'Email Marketing',
  'Influencer Ecosystems',
  'Landing Pages',
  'Growth Funnels',
  'Podcast Production',
  '+ more',
]

const services = [
  {
    number: '01',
    title: 'Custom App Development & Dev Systems',
    description:
      'Full-stack apps, AI-powered tools, internal dashboards, customer-facing platforms, API integrations, and cloud infrastructure — every build designed to optimize workflows, reduce overhead, and unlock revenue.',
  },
  {
    number: '02',
    title: 'Automation Pipelines',
    description:
      "CRM workflows, email/SMS systems, lead capture, sales funnels, booking, content distribution, and ERP-linked automations — your business runs even when you're not awake.",
  },
  {
    number: '03',
    title: 'ERP Systems & Internal Architecture',
    description:
      'Inventory management, multi-location operations, HR flows, financial tracking, customer management, supply chain visibility, and task management — unified on one reliable backbone.',
  },
  {
    number: '04',
    title: 'Video Production & Cinematic Storytelling',
    description:
      'Brand films, lifestyle & product shoots, founder stories, social reels, and campaign footage. Finished, ready-to-publish assets delivered across all platforms.',
  },
  {
    number: '05',
    title: 'Content Editing & Post-Production',
    description:
      'Short-form and long-form editing, social media repurposing, automated posting, motion graphics, and caption optimization — content becomes effortless, every day.',
  },
  {
    number: '06',
    title: 'Marketing, Brand Identity & Growth',
    description:
      'Positioning, website design, paid ads, social growth, SEO, email/SMS, influencer ecosystems, and product launch strategy. From awareness to conversion — the full lifecycle.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-brand-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">What We Do</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] max-w-2xl mb-8">
            Everything a modern brand needs, in one place.
          </h2>

          {/* Service tag pills */}
          <div className="flex flex-wrap gap-2">
            {serviceTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Service list */}
        <div className="space-y-0 divide-y divide-neutral-200 border-y border-neutral-200">
          {services.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col sm:flex-row sm:items-start gap-6 py-8 hover:bg-white transition-colors duration-150 px-4 -mx-4 rounded-lg cursor-default"
            >
              <div className="flex-shrink-0 text-xs font-bold text-neutral-300 w-8 pt-1">{service.number}</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-neutral-950 mb-2 group-hover:text-neutral-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
