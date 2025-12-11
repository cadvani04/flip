'use client'

export default function Team() {
  const teamMembers = [
    {
      name: 'Iman Yael Schaefer',
      role: 'Project Management & Design',
      image: '/team/iman-yael-schafer.jpg',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      achievements: [
        'Strong background in project management and website design at Crabb Blount Group (CBG) and GEtVirtual',
        'Led business expansion for GetVirtual Non-Profit',
        'Served as a NASA Lucy Mission Ambassador',
        'Co-founded Medlog, a healthcare management startup that achieved runner-up honors at UCSC Launchpad 2024',
      ],
    },
    {
      name: 'Bee Shondi Schafer',
      role: 'Innovation & Impact',
      image: '/team/bee-shondi-schafer.jpg',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      achievements: [
        'Founded three mission-driven companies focused on innovation and impact in 2023',
        'Co-founded FitFormFitness: Advancing preventive care in athletes through wearable technology (Aug 2025)',
        'Co-founded Happy Habits: Introducing AI-powered, intuitive habit tracking for better daily wellness (Aug 2024)',
      ],
    },
    {
      name: 'Curran Advani',
      role: 'Software Engineering & AI Development',
      image: '/team/curran-advani.jpg',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      achievements: [
        'Expertise in software engineering, AI development, and technical product management',
        'Co-founded Revamp',
        'Interned as a data scientist at Western Digital',
        'Developed successful AI solutions at Tech4Good and led campus fundraising',
        "Multiple Dean's List honoree and a College Service Award recipient",
      ],
    },
    {
      name: 'Sergio Pineros',
      role: 'Marketing & Growth',
      image: '/team/sergio-pineros.jpg',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      achievements: [
        'Marketing professional since age 14, with a proven track record of scaling businesses',
        "Successfully grew a casino's social media presence from 0 to 440,000 followers using viral content strategies",
        'Transformed restaurants with no social footprint into fully booked establishments',
        'Dynamic approach consistently delivers tangible growth',
      ],
    },
  ]

  return (
    <section id="team" className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet The{' '}
            <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            The experts behind Flip E-Commerce
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                  {member.icon}
                </div>
              </div>
              
              {/* Image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=128&background=3B82F6&color=fff&bold=true`;
                    }}
                  />
                </div>
              </div>
              
              {/* Name & Role */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-lg font-semibold text-blue-600">{member.role}</p>
              </div>
              
              {/* Achievements */}
              <ul className="space-y-3">
                {member.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

