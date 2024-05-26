'use client'

import HeroSection from '@/app/HeroSection'
import StatsSection from '@/app/StatsSection'
import { motion } from 'framer-motion'

const HomeMain = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2,
          ease: 'easeIn'
        }
      }}
      className="pt-[136px] h-screen overflow-x-hidden"
    >
      <HeroSection />
      <StatsSection />
    </motion.main>
  )
}

export default HomeMain
