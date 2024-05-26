import ServiceSection from '@/app/services/ServiceSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services'
}

const ServicesPage = () => {
  return (
    <main className="pt-[136px]">
      <ServiceSection />
    </main>
  )
}

export default ServicesPage
