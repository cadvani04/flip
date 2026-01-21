'use client'

import { Check } from 'lucide-react'

const packages = [
  {
    name: 'Growth Starter',
    price: '$3,000',
    duration: '/month',
    description: 'Perfect for businesses looking to establish their digital presence and start scaling',
    features: [
      'Social Media Management (2 platforms)',
      'Content Strategy & Calendar',
      '8 Custom Posts per Month',
      'Basic Copywriting & Captions',
      'Monthly Analytics Report',
      'Email Marketing Setup',
      'Brand Guidelines Development',
      'Monthly Strategy Call',
      'Community Management',
      'Hashtag Strategy'
    ],
    cta: 'Get Started',
    popular: false,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Scale Pro',
    price: '$7,000',
    duration: '/month',
    description: 'For growing businesses ready to dominate their market with comprehensive marketing',
    features: [
      'Everything in Growth Starter',
      'Social Media Management (4 platforms)',
      '20 Custom Posts per Month',
      'Advanced Content Creation',
      'Paid Ad Management (ad spend not included)',
      'Landing Page Design & Development',
      'Email Marketing Campaigns (4/month)',
      'SEO Optimization',
      'Influencer Outreach & Partnerships',
      'Weekly Strategy Calls',
      'CRM Setup & Optimization',
      'Video Content Production (2 videos/month)',
      'A/B Testing & Conversion Optimization',
      'Dedicated Account Manager'
    ],
    cta: 'Start Scaling',
    popular: true,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Enterprise Domination',
    price: '$10,000',
    duration: '/month',
    description: 'Full-scale marketing operations for businesses serious about market leadership',
    features: [
      'Everything in Scale Pro',
      'Social Media Management (All platforms)',
      'Unlimited Custom Content',
      'Full-Service Content Production',
      'Paid Ad Management (Multi-platform)',
      'Advanced Funnel Development',
      'Marketing Automation & AI Integration',
      'Custom Software/Tool Development',
      'Podcast Production & Distribution',
      'Advanced Analytics & Attribution',
      'White-glove Customer Support Systems',
      'Team Training & SOPs',
      '24/7 Priority Support',
      'Bi-weekly Strategy Sessions',
      'Custom Integrations & API Development',
      'Performance Guarantees'
    ],
    cta: 'Dominate Your Market',
    popular: false,
    gradient: 'from-amber-500 to-orange-500'
  }
]

export default function Packages() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Growth Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing, powerful results. Select the package that aligns with your ambitions.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                pkg.popular ? 'ring-4 ring-purple-500 ring-opacity-50 md:-mt-4 md:mb-4' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className={`inline-block px-6 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${pkg.gradient}`}>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Package Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className={`text-5xl font-extrabold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                      {pkg.price}
                    </span>
                    <span className="text-gray-500 ml-2">{pkg.duration}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${pkg.gradient} flex items-center justify-center mr-3 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white bg-gradient-to-r ${pkg.gradient} hover:shadow-lg transform transition-all duration-200 hover:scale-105`}
                >
                  {pkg.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which package is right for you?
          </p>
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Schedule a Free Consultation
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
            <div className="text-gray-600">Successful Campaigns</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">$5M+</div>
            <div className="text-gray-600">Revenue Generated for Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
