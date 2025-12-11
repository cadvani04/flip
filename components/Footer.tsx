export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-2">Flip.</div>
            <div className="text-sm text-gray-400 mb-4">A division of SBCI</div>
            <p className="text-sm text-gray-400">
              Full-stack growth and innovation studio.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Custom App Development</a></li>
              <li><a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Automation Pipelines</a></li>
              <li><a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">ERP Systems</a></li>
              <li><a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Video Production</a></li>
              <li><a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Content Editing</a></li>
              <li><a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Marketing & Brand Identity</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#clients" className="text-sm text-gray-400 hover:text-white transition-colors">Clients</a></li>
              <li><a href="#process" className="text-sm text-gray-400 hover:text-white transition-colors">Process</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Get Started</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Schedule a Call</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Flip E-Commerce. All rights reserved. A division of SBCI.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
