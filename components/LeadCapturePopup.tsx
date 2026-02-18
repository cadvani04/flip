'use client'

import { useState, useEffect } from 'react'

export default function LeadCapturePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const seen = localStorage.getItem('leadPopupDismissed')
    if (!seen) {
      const t = setTimeout(() => setIsOpen(true), 2000)
      return () => clearTimeout(t)
    }
  }, [])

  const handleInput = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const res = await fetch('https://curran.app.n8n.cloud/webhook/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadCapture: true,
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          source: 'popup',
          timestamp: new Date().toISOString(),
        }),
      })
      if (!res.ok) throw new Error()
      setSubmitStatus('success')
      setTimeout(handleClose, 1500)
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('leadPopupDismissed', 'true')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-neutral-950/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 rounded-full p-1.5 text-neutral-400 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitStatus === 'success' ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-neutral-950 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg font-bold text-neutral-950 mb-1">You're in!</p>
            <p className="text-sm text-neutral-500">We'll be in touch soon.</p>
          </div>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">Get Started</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-neutral-950 mb-1">Let's build something great.</h2>
            <p className="text-sm text-neutral-500 mb-6">Leave your details and we'll reach out within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="popup-name" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="popup-name"
                  required
                  value={formData.name}
                  onChange={(e) => handleInput('name', e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-1 focus:ring-neutral-950 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="popup-email" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="popup-email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInput('email', e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-1 focus:ring-neutral-950 transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="popup-phone" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="popup-phone"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInput('phone', e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-1 focus:ring-neutral-950 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              {submitStatus === 'error' && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-neutral-950 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
