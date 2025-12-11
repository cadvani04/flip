import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Services from '@/components/Services'
import Clients from '@/components/Clients'
import WhyChoose from '@/components/WhyChoose'
import Process from '@/components/Process'
import Team from '@/components/Team'
import Mission from '@/components/Mission'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Clients />
      <WhyChoose />
      <Process />
      <Team />
      <Mission />
      <CTA />
      <Footer />
    </main>
  )
}
