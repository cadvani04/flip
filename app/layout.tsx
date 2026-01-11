import type { Metadata } from 'next'
import './globals.css'
import LeadCapturePopup from '@/components/LeadCapturePopup'

export const metadata: Metadata = {
  title: 'Flip E-Commerce: Full Stack Growth & Innovation Studio',
  description: 'We build the systems behind the brand and the brand that moves the market. Custom software, automation, ERP workflows, brand identity, video production, content editing, and marketing execution in one seamless infrastructure.',
  icons: {
    icon: '/sbcilogo.png',
    shortcut: '/sbcilogo.png',
    apple: '/sbcilogo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <LeadCapturePopup />
      </body>
    </html>
  )
}

