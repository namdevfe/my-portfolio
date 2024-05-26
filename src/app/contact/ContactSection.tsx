'use client'

import ContactForm from '@/app/contact/ContactForm'
import Information from '@/app/contact/Information'
import { motion } from 'framer-motion'

const ContactSection = () => {
  return (
    <motion.section
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: 'easeIn'
        }
      }}
      className="py-6"
    >
      <div className="layout-container items-center grid grid-cols-12 gap-12 sm:grid-cols-1">
        {/* Contact form */}
        <ContactForm />

        {/* Information */}
        <Information />
      </div>
    </motion.section>
  )
}

export default ContactSection
