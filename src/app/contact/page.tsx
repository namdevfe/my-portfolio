import ContactSection from '@/app/contact/ContactSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact'
}

const ContactPage = () => {
  return (
    <main className="pt-[136px]">
      <ContactSection />
    </main>
  )
}

export default ContactPage
