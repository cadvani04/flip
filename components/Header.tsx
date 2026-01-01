'use client'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img 
            src="/sbcilogo.png" 
            alt="SBCI Logo" 
            className="h-10 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">Flip.</span>
            <span className="text-xs text-gray-500">A division of SBCI</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#services" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Services
          </a>
          <a href="#clients" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Clients
          </a>
          <a href="#process" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Process
          </a>
          <a href="#team" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Team
          </a>
        </nav>
      </div>
    </header>
  )
}
