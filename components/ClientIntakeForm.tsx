'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

interface FormData {
  // Section 0: Opening Frame
  openingFrame: boolean
  
  // Section 1: Identity & Contact (Q1-Q7)
  fullName: string
  companyName: string
  role: string
  email: string
  phone: string
  website: string
  socialLinks: string[]
  
  // Section 2: Business Snapshot & Stage (Q8)
  businessStage: string
  operatingTime: string
  revenueRange: string
  teamSize: string
  
  // Section 3: Primary Problem Diagnosis (Q9)
  mainChallenges: string[]
  bottleneck: string
  
  // Section 4: Operations & Internal Systems (Q10-Q12)
  currentSystems: string
  brokenProcesses: string[]
  interestAreas: string[]
  
  // Section 5: Automations (Q13-Q14)
  currentAutomations: string
  wantAutomated: string[]
  
  // Section 6: AI Agents & Agentic Systems (Q15)
  aiOpenness: string
  aiFirstArea: string
  
  // Section 7: Acquisition & Funnel Systems (Q16-Q18)
  discoveryChannels: string[]
  funnelComponents: string[]
  adSpend: string
  
  // Section 8: Content Output & Distribution (Q19-Q20)
  contentTypes: string[]
  publishingPlatforms: string[]
  
  // Section 9: Content Systems & Creative Services (Q21)
  contentHelp: string[]
  contentApproach: string
  
  // Section 10: Technical Builds & Complex Work (Q22-Q23)
  technicalNeeds: string[]
  hardProblem: string
  
  // Section 11: Engagement Type & Success Definition (Q24-Q25)
  engagementType: string
  success90Days: string
  
  // Section 12: Budget, Timeline, Decision Authority (Q26-Q28)
  budgetRange: string
  timeline: string
  decisionMaker: string
  
  // Section 13: Fit, Motivation, Context (Q29-Q30)
  whyFlip: string
  anythingElse: string
  
  // Section 14: Business Model & Constraints (Q31-Q33)
  businessModel: string
  revenueStreams: string[]
  primaryConstraint: string
  
  // Section 15: Tech Stack, Data, Infrastructure (Q34-Q36)
  currentTools: string
  dataLocation: string
  infraHelp: string[]
  
  // Section 16: AI Depth & Direction (Q37-Q39)
  currentAiUsage: string
  aiServicesInterest: string[]
  aiOperatingMode: string
  
  // Section 17: Brand, Messaging, Positioning (Q40-Q41)
  brandClarity: string
  brandSupport: string[]
  
  // Section 18: Filming & Production Optimization (Q42-Q45)
  inHouseFilming: string
  filmingLocations: string[]
  productionAudit: string[]
  productionSystems: string
  
  // Section 19: Social Media Systems (Q46-Q47)
  socialBroken: string[]
  socialSystems: string[]
  
  // Section 20: Podcast / Spotify / Long-Form Expansion (Q48-Q49)
  podcastPlans: string
  podcastSupport: string[]
  
  // Section 21: Monetization & Revenue Optimization (Q50-Q51)
  conversionTracking: string
  revenueOptimization: string[]
  
  // Section 22: Team & Scale Readiness (Q52-Q54)
  teamSizeFinal: string
  teamHelp: string[]
  scalingPlans: string
}

export default function ClientIntakeForm() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState<FormData>({
    openingFrame: false,
    fullName: '',
    companyName: '',
    role: '',
    email: '',
    phone: '',
    website: '',
    socialLinks: [],
    businessStage: '',
    operatingTime: '',
    revenueRange: '',
    teamSize: '',
    mainChallenges: [],
    bottleneck: '',
    currentSystems: '',
    brokenProcesses: [],
    interestAreas: [],
    currentAutomations: '',
    wantAutomated: [],
    aiOpenness: '',
    aiFirstArea: '',
    discoveryChannels: [],
    funnelComponents: [],
    adSpend: '',
    contentTypes: [],
    publishingPlatforms: [],
    contentHelp: [],
    contentApproach: '',
    technicalNeeds: [],
    hardProblem: '',
    engagementType: '',
    success90Days: '',
    budgetRange: '',
    timeline: '',
    decisionMaker: '',
    whyFlip: '',
    anythingElse: '',
    businessModel: '',
    revenueStreams: [],
    primaryConstraint: '',
    currentTools: '',
    dataLocation: '',
    infraHelp: [],
    currentAiUsage: '',
    aiServicesInterest: [],
    aiOperatingMode: '',
    brandClarity: '',
    brandSupport: [],
    inHouseFilming: '',
    filmingLocations: [],
    productionAudit: [],
    productionSystems: '',
    socialBroken: [],
    socialSystems: [],
    podcastPlans: '',
    podcastSupport: [],
    conversionTracking: '',
    revenueOptimization: [],
    teamSizeFinal: '',
    teamHelp: [],
    scalingPlans: '',
  })

  const totalSections = 23 // 0-22

  const handleCheckboxChange = (field: keyof FormData, value: string) => {
    setFormData(prev => {
      const current = prev[field] as string[]
      if (Array.isArray(current)) {
        return {
          ...prev,
          [field]: current.includes(value)
            ? current.filter(item => item !== value)
            : [...current, value]
        }
      }
      return prev
    })
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('https://curran.app.n8n.cloud/webhook/intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      setSubmitStatus('success')
      alert('Form submitted successfully! We\'ll be in touch soon.')
      console.log('Form Data submitted:', formData)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      alert('There was an error submitting the form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Conditional logic to determine which sections to show
  const shouldShowSection = (sectionIndex: number): boolean => {
    switch (sectionIndex) {
      case 0:
      case 1:
      case 2:
      case 3:
        return true // Always show opening and basic info sections
      
      case 4: // Operations & Internal Systems
        return formData.mainChallenges.some(ch => 
          ch.includes('Operations') || 
          ch.includes('Tech stack') || 
          ch.includes('Team lacks systems')
        ) || formData.bottleneck === 'Workflow'
      
      case 5: // Automations
        return formData.mainChallenges.some(ch => 
          ch.includes('Operations') || 
          ch.includes('manual')
        ) || formData.bottleneck === 'Time'
      
      case 6: // AI Agents
        return formData.currentAiUsage !== 'No' || 
               formData.aiOpenness !== '' ||
               formData.mainChallenges.some(ch => ch.includes('Operations'))
      
      case 7: // Acquisition & Funnel
        return formData.mainChallenges.some(ch => 
          ch.includes('Leads') || 
          ch.includes('Sales') || 
          ch.includes('Ads')
        ) || formData.bottleneck === 'Money'
      
      case 8: // Content Output
        return formData.mainChallenges.some(ch => ch.includes('Content')) ||
               formData.discoveryChannels.includes('Organic social')
      
      case 9: // Content Systems
        return formData.contentTypes.length > 0 || 
               formData.publishingPlatforms.length > 0
      
      case 10: // Technical Builds
        return formData.mainChallenges.some(ch => 
          ch.includes('Tech stack') || 
          ch.includes('Technical')
        ) || formData.technicalNeeds.length > 0
      
      case 11:
      case 12:
      case 13:
        return true // Always show engagement, budget, and fit sections
      
      case 14: // Business Model
        return true // Always show
      
      case 15: // Tech Stack
        return formData.currentSystems !== '' || 
               formData.dataLocation !== '' ||
               formData.mainChallenges.some(ch => ch.includes('Tech stack'))
      
      case 16: // AI Depth
        return formData.currentAiUsage !== 'No' || 
               formData.aiOpenness !== '' ||
               formData.aiServicesInterest.length > 0
      
      case 17: // Brand
        return formData.brandClarity !== 'Yes' || 
               formData.brandSupport.length > 0 ||
               formData.contentHelp.some(h => h.includes('Brand'))
      
      case 18: // Filming & Production
        return formData.contentTypes.some(t => 
          t.includes('Short-form') || 
          t.includes('Long-form')
        ) || formData.contentHelp.some(h => 
          h.includes('Filming') || 
          h.includes('production')
        )
      
      case 19: // Social Media
        return formData.publishingPlatforms.length > 0 ||
               formData.socialBroken.length > 0 ||
               formData.discoveryChannels.includes('Organic social')
      
      case 20: // Podcast
        return formData.contentTypes.some(t => t.includes('Long-form')) ||
               formData.publishingPlatforms.includes('Spotify/Podcast') ||
               formData.podcastPlans !== 'No'
      
      case 21: // Monetization
        return formData.mainChallenges.some(ch => 
          ch.includes('Sales') || 
          ch.includes('convert')
        ) || formData.bottleneck === 'Money'
      
      case 22: // Team & Scale
        return true // Always show
      
      default:
        return true
    }
  }

  const getVisibleSections = (): number[] => {
    return Array.from({ length: totalSections }, (_, i) => i)
      .filter(section => shouldShowSection(section))
  }

  const visibleSections = getVisibleSections()
  const currentVisibleIndex = visibleSections.indexOf(currentSection)

  // Ensure current section is visible, if not, jump to first visible
  useEffect(() => {
    if (currentVisibleIndex < 0 && visibleSections.length > 0) {
      setCurrentSection(visibleSections[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData])

  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Opening Frame</h2>
            <p className="text-gray-600">
              Thanks for making the time. Today is a diagnostic call - I'm going to ask a structured set of questions so we can understand what's working, what's broken, and what systems will create the biggest lift. I'll pause often so you can add context. Sound good?
            </p>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.openingFrame}
                onChange={(e) => handleInputChange('openingFrame', e.target.checked.toString())}
                className="w-4 h-4 text-blue-600"
              />
              <span>Confirmed</span>
            </label>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Identity & Contact</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q1. Full name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="First, what's your full name?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q2. Company / brand name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="And what's the company or brand name?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q3. Role / title</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's your role day-to-day?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q4. Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's the best email for follow-ups?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q5. Phone / WhatsApp</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="And best phone number or WhatsApp?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q6. Website</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's your website, if you have one?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q7. Social links</label>
                <p className="text-sm text-gray-600 mb-2">What social channels matter most for you right now?</p>
                {['Instagram', 'TikTok', 'YouTube', 'Spotify', 'LinkedIn', 'Other'].map(platform => (
                  <label key={platform} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.socialLinks.includes(platform)}
                      onChange={() => handleCheckboxChange('socialLinks', platform)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{platform}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Business Snapshot & Stage</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q8. Business stage</label>
                <p className="text-sm text-gray-600 mb-3">How would you describe your stage?</p>
                {['Idea', 'Pre-launch', 'Early revenue', 'Scaling', 'Established'].map(stage => (
                  <label key={stage} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="businessStage"
                      value={stage}
                      checked={formData.businessStage === stage}
                      onChange={(e) => handleInputChange('businessStage', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{stage}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">How long have you been operating?</label>
                <input
                  type="text"
                  value={formData.operatingTime}
                  onChange={(e) => handleInputChange('operatingTime', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">What's your current revenue range or target?</label>
                <input
                  type="text"
                  value={formData.revenueRange}
                  onChange={(e) => handleInputChange('revenueRange', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">How big is your team today?</label>
                <input
                  type="text"
                  value={formData.teamSize}
                  onChange={(e) => handleInputChange('teamSize', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Primary Problem Diagnosis</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q9. Main challenge (pick top 1–3)</label>
                <p className="text-sm text-gray-600 mb-3">If we could only fix 1–3 things right now, what are the biggest pain points?</p>
                {[
                  'Operations are manual / inefficient',
                  'Leads are inconsistent',
                  "Sales don't convert",
                  "Content isn't performing",
                  'Ads are expensive or unprofitable',
                  'Team lacks systems',
                  'Tech stack is broken or missing',
                  "We don't know what to prioritize"
                ].map(challenge => (
                  <label key={challenge} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.mainChallenges.includes(challenge)}
                      onChange={() => handleCheckboxChange('mainChallenges', challenge)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{challenge}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Where do you feel the bottleneck shows up first?</label>
                {['Time', 'Money', 'Workflow'].map(option => (
                  <label key={option} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="bottleneck"
                      value={option}
                      checked={formData.bottleneck === option}
                      onChange={(e) => handleInputChange('bottleneck', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Operations & Internal Systems</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q10. Current internal systems</label>
                <textarea
                  value={formData.currentSystems}
                  onChange={(e) => handleInputChange('currentSystems', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="What systems are you currently using - CRM, ERP, inventory, finance/accounting, project tools, or mostly spreadsheets?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q11. Broken/slow processes</label>
                <p className="text-sm text-gray-600 mb-3">What processes feel the most painful or slow?</p>
                {[
                  'Client onboarding',
                  'Order fulfillment',
                  'Inventory tracking',
                  'Invoicing / payments',
                  'Reporting / dashboards',
                  'Internal comms / handoffs'
                ].map(process => (
                  <label key={process} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.brokenProcesses.includes(process)}
                      onChange={() => handleCheckboxChange('brokenProcesses', process)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{process}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q12. Interest areas</label>
                <p className="text-sm text-gray-600 mb-3">Would you want us to build or improve any of these?</p>
                {[
                  'Custom ERP',
                  'CRM optimization',
                  'Dashboards & reporting',
                  'Integrations',
                  'Workflow automation'
                ].map(area => (
                  <label key={area} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.interestAreas.includes(area)}
                      onChange={() => handleCheckboxChange('interestAreas', area)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{area}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Automations</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q13. Current automations</label>
                <textarea
                  value={formData.currentAutomations}
                  onChange={(e) => handleInputChange('currentAutomations', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Do you have any automations running today - email sequences, SMS/WhatsApp, chatbots, or anything AI-driven?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q14. What they want automated</label>
                <p className="text-sm text-gray-600 mb-3">What would you love to stop doing manually?</p>
                {[
                  'Lead follow-ups',
                  'Appointment booking',
                  'Customer support',
                  'Sales outreach',
                  'Internal workflows',
                  'Reporting & alerts'
                ].map(item => (
                  <label key={item} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.wantAutomated.includes(item)}
                      onChange={() => handleCheckboxChange('wantAutomated', item)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">AI Agents & Agentic Systems</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q15. Openness to AI agents</label>
                <p className="text-sm text-gray-600 mb-3">How open are you to AI agents handling parts of the business?</p>
                {['Yes - fully autonomous', 'Yes - supervised', 'Not sure / want guidance'].map(option => (
                  <label key={option} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="aiOpenness"
                      value={option}
                      checked={formData.aiOpenness === option}
                      onChange={(e) => handleInputChange('aiOpenness', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">If an agent could reliably handle one area first, what would you choose?</label>
                {['Sales', 'Support', 'Operations', 'Content', 'Reporting'].map(area => (
                  <label key={area} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="aiFirstArea"
                      value={area}
                      checked={formData.aiFirstArea === area}
                      onChange={(e) => handleInputChange('aiFirstArea', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{area}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Acquisition & Funnel Systems</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q16. Current discovery channels</label>
                <p className="text-sm text-gray-600 mb-3">How do customers find you today?</p>
                {['Organic social', 'Paid ads', 'Influencers', 'Referrals', 'Cold outreach', 'Other'].map(channel => (
                  <label key={channel} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.discoveryChannels.includes(channel)}
                      onChange={() => handleCheckboxChange('discoveryChannels', channel)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{channel}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q17. Funnel components needed</label>
                <p className="text-sm text-gray-600 mb-3">Which parts of the funnel do you need built or improved?</p>
                {[
                  'Landing pages',
                  'Influencer sourcing & tracking',
                  'Paid ad creatives',
                  'Retargeting',
                  'CRM + pipeline',
                  'Conversion tracking / attribution'
                ].map(component => (
                  <label key={component} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.funnelComponents.includes(component)}
                      onChange={() => handleCheckboxChange('funnelComponents', component)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{component}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q18. Ad spend</label>
                <p className="text-sm text-gray-600 mb-3">What's your monthly ad spend right now - or planned?</p>
                {['$0–$1k', '$1k–$10k', '$10k+', 'Not sure yet'].map(range => (
                  <label key={range} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="adSpend"
                      value={range}
                      checked={formData.adSpend === range}
                      onChange={(e) => handleInputChange('adSpend', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{range}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Content Output & Distribution</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q19. Content types</label>
                <p className="text-sm text-gray-600 mb-3">What content do you produce today?</p>
                {['Short-form (Reels/TikTok)', 'Long-form (YouTube/Podcast)', 'Ads', 'Educational', 'None consistently'].map(type => (
                  <label key={type} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.contentTypes.includes(type)}
                      onChange={() => handleCheckboxChange('contentTypes', type)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q20. Publishing platforms</label>
                <p className="text-sm text-gray-600 mb-3">Where are you publishing?</p>
                {['Instagram', 'TikTok', 'YouTube', 'Spotify/Podcast', 'Website', 'LinkedIn', 'Other'].map(platform => (
                  <label key={platform} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.publishingPlatforms.includes(platform)}
                      onChange={() => handleCheckboxChange('publishingPlatforms', platform)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{platform}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 9:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Content Systems & Creative Services</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q21. What they need help with</label>
                <p className="text-sm text-gray-600 mb-3">What would help most on the content side?</p>
                {[
                  'Content strategy & calendars',
                  'Filming / production optimization',
                  'Editing pipelines',
                  'Brand identity & creative direction',
                  'Ad creative production',
                  'Content automation & repurposing systems'
                ].map(help => (
                  <label key={help} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.contentHelp.includes(help)}
                      onChange={() => handleCheckboxChange('contentHelp', help)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{help}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Do you want a done-for-you content machine, or a system your team can run?</label>
                <textarea
                  value={formData.contentApproach}
                  onChange={(e) => handleInputChange('contentApproach', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
              </div>
            </div>
          </div>
        )

      case 10:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Technical Builds & Complex Work</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q22. Technical needs</label>
                <p className="text-sm text-gray-600 mb-3">Do you need any technical build work?</p>
                {[
                  'Custom software or app',
                  'API integrations',
                  'AI tools or agents',
                  'Data pipelines',
                  'Internal tools',
                  'Hardware / IoT support'
                ].map(need => (
                  <label key={need} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.technicalNeeds.includes(need)}
                      onChange={() => handleCheckboxChange('technicalNeeds', need)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{need}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q23. Describe the hard problem</label>
                <textarea
                  value={formData.hardProblem}
                  onChange={(e) => handleInputChange('hardProblem', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={5}
                  placeholder="What's the most technical or complex task you're trying to solve right now? Even if it's messy or hard to explain - go for it."
                />
              </div>
            </div>
          </div>
        )

      case 11:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Engagement Type & Success Definition</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q24. What they're looking for</label>
                <p className="text-sm text-gray-600 mb-3">Are you looking for a one-time audit, ongoing consulting, a full build + execution team, or advisory only?</p>
                <textarea
                  value={formData.engagementType}
                  onChange={(e) => handleInputChange('engagementType', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q25. 90-day success</label>
                <textarea
                  value={formData.success90Days}
                  onChange={(e) => handleInputChange('success90Days', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="If this partnership goes well, what does success look like in 90 days?"
                />
              </div>
            </div>
          </div>
        )

      case 12:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Budget, Timeline, Decision Authority</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q26. Budget range</label>
                <p className="text-sm text-gray-600 mb-3">What budget range are you comfortable with for this?</p>
                {['Under $2k', '$2k–$5k', '$5k–$15k', '$15k+', 'Depends on scope'].map(range => (
                  <label key={range} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="budgetRange"
                      value={range}
                      checked={formData.budgetRange === range}
                      onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{range}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q27. Timeline</label>
                <p className="text-sm text-gray-600 mb-3">When do you want to start?</p>
                {['ASAP', 'Within 30 days', '60+ days'].map(option => (
                  <label key={option} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="timeline"
                      value={option}
                      checked={formData.timeline === option}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q28. Decision maker</label>
                <p className="text-sm text-gray-600 mb-3">Who makes the final decision?</p>
                {['Me', 'Partner', 'Board / team'].map(option => (
                  <label key={option} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="decisionMaker"
                      value={option}
                      checked={formData.decisionMaker === option}
                      onChange={(e) => handleInputChange('decisionMaker', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 13:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Fit, Motivation, Context</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q29. Why Flip Commerce / SBCI</label>
                <textarea
                  value={formData.whyFlip}
                  onChange={(e) => handleInputChange('whyFlip', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="What made you want to work with us specifically?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q30. Anything else</label>
                <textarea
                  value={formData.anythingElse}
                  onChange={(e) => handleInputChange('anythingElse', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="What else should we know that would help us scope this right?"
                />
              </div>
            </div>
          </div>
        )

      case 14:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Business Model & Constraints</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q31. Business model</label>
                <p className="text-sm text-gray-600 mb-3">Which describes your model best?</p>
                {['B2B', 'B2C', 'Marketplace', 'Subscription / SaaS', 'Agency / Services', 'E-commerce', 'Hybrid'].map(model => (
                  <label key={model} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="businessModel"
                      value={model}
                      checked={formData.businessModel === model}
                      onChange={(e) => handleInputChange('businessModel', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{model}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q32. Revenue streams</label>
                <p className="text-sm text-gray-600 mb-3">Where does revenue come from today?</p>
                {[
                  'Product sales',
                  'Subscriptions',
                  'Retainers',
                  'One-time services',
                  'Licensing',
                  'Sponsorships / brand deals'
                ].map(stream => (
                  <label key={stream} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.revenueStreams.includes(stream)}
                      onChange={() => handleCheckboxChange('revenueStreams', stream)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{stream}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q33. Primary constraints</label>
                <p className="text-sm text-gray-600 mb-3">What's the main constraint right now?</p>
                {['Time', 'Capital', 'Team bandwidth', 'Technical complexity', 'Lack of clarity', 'Execution speed'].map(constraint => (
                  <label key={constraint} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="primaryConstraint"
                      value={constraint}
                      checked={formData.primaryConstraint === constraint}
                      onChange={(e) => handleInputChange('primaryConstraint', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{constraint}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 15:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Tech Stack, Data, Infrastructure</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q34. Current tools</label>
                <textarea
                  value={formData.currentTools}
                  onChange={(e) => handleInputChange('currentTools', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="What tools are in your stack right now? (CRM, email, payments, scheduling, fulfillment, analytics, project mgmt, etc.)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q35. Data location</label>
                <p className="text-sm text-gray-600 mb-3">Where does your data live today?</p>
                {['Spreadsheets', 'CRM', 'Multiple disconnected tools', 'Nowhere centralized'].map(location => (
                  <label key={location} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="dataLocation"
                      value={location}
                      checked={formData.dataLocation === location}
                      onChange={(e) => handleInputChange('dataLocation', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{location}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q36. Infra / systems help</label>
                <p className="text-sm text-gray-600 mb-3">Do you need help with any of the following?</p>
                {[
                  'Stack consolidation',
                  'Data migration',
                  'System architecture design',
                  'Security & access control',
                  'Documentation & SOPs'
                ].map(help => (
                  <label key={help} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.infraHelp.includes(help)}
                      onChange={() => handleCheckboxChange('infraHelp', help)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{help}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 16:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">AI Depth & Direction</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q37. Current AI usage</label>
                <p className="text-sm text-gray-600 mb-3">Are you using AI today?</p>
                {['No', 'Yes (basic tools like ChatGPT)', 'Yes (custom/integrated systems)'].map(usage => (
                  <label key={usage} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="currentAiUsage"
                      value={usage}
                      checked={formData.currentAiUsage === usage}
                      onChange={(e) => handleInputChange('currentAiUsage', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{usage}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q38. AI services interest</label>
                <p className="text-sm text-gray-600 mb-3">Which AI systems would be valuable?</p>
                {[
                  'Custom AI agents (sales/ops/support)',
                  'Internal copilots',
                  'Knowledge bases',
                  'Agent orchestration / workflows',
                  'Fine-tuned models',
                  'Multi-agent systems'
                ].map(service => (
                  <label key={service} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.aiServicesInterest.includes(service)}
                      onChange={() => handleCheckboxChange('aiServicesInterest', service)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q39. AI operating mode</label>
                <textarea
                  value={formData.aiOperatingMode}
                  onChange={(e) => handleInputChange('aiOperatingMode', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Should AI replace tasks, assist humans, or a hybrid?"
                />
              </div>
            </div>
          </div>
        )

      case 17:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Brand, Messaging, Positioning</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q40. Brand clarity</label>
                <p className="text-sm text-gray-600 mb-3">Do you feel your brand identity is clearly defined?</p>
                {['Yes', 'Somewhat', 'No'].map(option => (
                  <label key={option} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="brandClarity"
                      value={option}
                      checked={formData.brandClarity === option}
                      onChange={(e) => handleInputChange('brandClarity', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q41. Brand support needed</label>
                <p className="text-sm text-gray-600 mb-3">Do you need help with any of this?</p>
                {[
                  'Brand strategy & messaging',
                  'Visual identity',
                  'Tone of voice',
                  'Brand systems (templates, rules)',
                  'Repositioning / full rebrand'
                ].map(support => (
                  <label key={support} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.brandSupport.includes(support)}
                      onChange={() => handleCheckboxChange('brandSupport', support)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{support}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 18:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Filming & Production Optimization</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q42. In-house filming</label>
                <p className="text-sm text-gray-600 mb-3">Do you film in-house?</p>
                {['Yes', 'No', 'Occasionally'].map(option => (
                  <label key={option} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="inHouseFilming"
                      value={option}
                      checked={formData.inHouseFilming === option}
                      onChange={(e) => handleInputChange('inHouseFilming', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q43. Filming locations</label>
                <p className="text-sm text-gray-600 mb-3">Where do you typically film?</p>
                {['Office', 'Studio', 'Home', 'On-site / field'].map(location => (
                  <label key={location} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.filmingLocations.includes(location)}
                      onChange={() => handleCheckboxChange('filmingLocations', location)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{location}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q44. Production audit</label>
                <p className="text-sm text-gray-600 mb-3">Would you want an audit of any of these?</p>
                {[
                  'Camera setup',
                  'Lighting',
                  'Audio',
                  'Framing & workflow',
                  'Editing efficiency'
                ].map(audit => (
                  <label key={audit} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.productionAudit.includes(audit)}
                      onChange={() => handleCheckboxChange('productionAudit', audit)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{audit}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Q45. Production systems</label>
                <textarea
                  value={formData.productionSystems}
                  onChange={(e) => handleInputChange('productionSystems', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Are you interested in building systems like: filming SOPs, batching workflows, creator playbooks, or remote editing pipelines?"
                />
              </div>
            </div>
          </div>
        )

      case 19:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Social Media Systems</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q46. What's broken on social</label>
                <p className="text-sm text-gray-600 mb-3">What feels broken about social media right now?</p>
                {[
                  'Inconsistent posting',
                  'Low engagement',
                  'No conversion',
                  'Poor storytelling',
                  'No system'
                ].map(issue => (
                  <label key={issue} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.socialBroken.includes(issue)}
                      onChange={() => handleCheckboxChange('socialBroken', issue)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{issue}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q47. Systems they want</label>
                <p className="text-sm text-gray-600 mb-3">Which systems do you want built?</p>
                {[
                  'Content calendars',
                  'Automation pipelines',
                  'Repurposing systems',
                  'Analytics dashboards',
                  'Influencer collab workflows'
                ].map(system => (
                  <label key={system} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.socialSystems.includes(system)}
                      onChange={() => handleCheckboxChange('socialSystems', system)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{system}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 20:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Podcast / Spotify / Long-Form Expansion</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q48. Podcast plans</label>
                <p className="text-sm text-gray-600 mb-3">Do you have or plan to launch a podcast or long-form series?</p>
                {['Yes', 'No', 'Planning'].map(option => (
                  <label key={option} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="podcastPlans"
                      value={option}
                      checked={formData.podcastPlans === option}
                      onChange={(e) => handleInputChange('podcastPlans', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q49. Podcast support</label>
                <p className="text-sm text-gray-600 mb-3">What support would you need?</p>
                {[
                  'Concept & format',
                  'Recording setup',
                  'Editing & distribution',
                  'Guest booking systems',
                  'Monetization'
                ].map(support => (
                  <label key={support} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.podcastSupport.includes(support)}
                      onChange={() => handleCheckboxChange('podcastSupport', support)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{support}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 21:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Monetization & Revenue Optimization</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q50. Conversion tracking</label>
                <p className="text-sm text-gray-600 mb-3">Are you tracking conversions accurately today?</p>
                {['Yes', 'Somewhat', 'No'].map(option => (
                  <label key={option} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="conversionTracking"
                      value={option}
                      checked={formData.conversionTracking === option}
                      onChange={(e) => handleInputChange('conversionTracking', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q51. Revenue optimization help</label>
                <p className="text-sm text-gray-600 mb-3">Do you need help with any of these?</p>
                {[
                  'Pricing strategy',
                  'Offer creation',
                  'Upsells / cross-sells',
                  'Funnel optimization',
                  'Attribution tracking'
                ].map(help => (
                  <label key={help} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.revenueOptimization.includes(help)}
                      onChange={() => handleCheckboxChange('revenueOptimization', help)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{help}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 22:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Team & Scale Readiness</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q52. Team size</label>
                <p className="text-sm text-gray-600 mb-3">What's your team size?</p>
                {['Solo', '2–5', '6–15', '15+'].map(size => (
                  <label key={size} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="teamSizeFinal"
                      value={size}
                      checked={formData.teamSizeFinal === size}
                      onChange={(e) => handleInputChange('teamSizeFinal', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q53. What helps team most</label>
                <p className="text-sm text-gray-600 mb-3">What would help the team most right now?</p>
                {['Automation', 'SOPs', 'Dashboards', 'Better tools', 'Hiring support'].map(help => (
                  <label key={help} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.teamHelp.includes(help)}
                      onChange={() => handleCheckboxChange('teamHelp', help)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{help}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Q54. Scaling plans</label>
                <p className="text-sm text-gray-600 mb-3">Are you planning to scale in the next 6–12 months?</p>
                {['Yes', 'No', 'Unsure'].map(option => (
                  <label key={option} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="scalingPlans"
                      value={option}
                      checked={formData.scalingPlans === option}
                      onChange={(e) => handleInputChange('scalingPlans', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const sectionTitles = [
    'Opening Frame',
    'Identity & Contact',
    'Business Snapshot & Stage',
    'Primary Problem Diagnosis',
    'Operations & Internal Systems',
    'Automations',
    'AI Agents & Agentic Systems',
    'Acquisition & Funnel Systems',
    'Content Output & Distribution',
    'Content Systems & Creative Services',
    'Technical Builds & Complex Work',
    'Engagement Type & Success Definition',
    'Budget, Timeline, Decision Authority',
    'Fit, Motivation, Context',
    'Business Model & Constraints',
    'Tech Stack, Data, Infrastructure',
    'AI Depth & Direction',
    'Brand, Messaging, Positioning',
    'Filming & Production Optimization',
    'Social Media Systems',
    'Podcast / Spotify / Long-Form Expansion',
    'Monetization & Revenue Optimization',
    'Team & Scale Readiness'
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Intake Diagnostic Form</h1>
          <p className="text-gray-600">Complete all sections to provide a comprehensive overview of your business needs.</p>
            <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{currentVisibleIndex + 1} of {visibleSections.length} sections</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentVisibleIndex + 1) / visibleSections.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {renderSection()}

          <div className="flex justify-between pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => {
                const prevIndex = Math.max(0, currentVisibleIndex - 1)
                setCurrentSection(visibleSections[prevIndex] || 0)
              }}
              disabled={currentVisibleIndex === 0}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            {currentVisibleIndex < visibleSections.length - 1 ? (
              <button
                type="button"
                onClick={() => {
                  const nextIndex = Math.min(visibleSections.length - 1, currentVisibleIndex + 1)
                  setCurrentSection(visibleSections[nextIndex] || totalSections - 1)
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? 'Submitted!' : 'Submit Form'}
              </button>
            )}
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Section Navigation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-96 overflow-y-auto">
            {sectionTitles.map((title, index) => {
              const isVisible = shouldShowSection(index)
              if (!isVisible) return null
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSection(index)}
                  className={`text-left px-3 py-2 rounded text-sm transition-colors ${
                    currentSection === index
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}. {title}
                </button>
              )
            })}
          </div>
        </div>

      </div>

      {/* Calendly inline widget */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Call</h2>
        <div className="calendly-inline-widget" data-url="https://calendly.com/advanicurran/30min" style={{ minWidth: '320px', height: '700px' }}></div>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </div>
    </div>
  )
}

