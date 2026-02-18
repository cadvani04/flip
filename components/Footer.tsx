export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tight">Flip</span>
              <span className="text-xs font-medium text-neutral-500 border border-neutral-700 rounded-full px-2 py-0.5">by SBCI</span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6 max-w-xs">
              Full-stack growth and innovation studio. One partner for development, automation, brand, video, content, and marketing.
            </p>
            <div className="flex gap-3">
              <a
                href="https://calendly.com/advanicurran/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white text-neutral-950 px-4 py-2 text-xs font-semibold hover:bg-neutral-100 transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                'App Development',
                'Automation Pipelines',
                'ERP Systems',
                'Video Production',
                'Content Editing',
                'Brand Identity',
                'Growth Marketing',
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Clients', href: '#clients' },
                { label: 'Process', href: '#process' },
                { label: 'Team', href: '#team' },
                { label: 'Pricing', href: '#packages' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">Get Started</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://calendly.com/advanicurran/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Schedule a Call
                </a>
              </li>
              <li>
                <a
                  href="mailto:advanicurran@gmail.com"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Send an Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-600">
            © 2025 Flip E-Commerce. All rights reserved. A division of SBCI.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">Terms of Use</a>
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
