'use client'

import Stairs from '@/components/Stairs'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const StairTransition = () => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="w-screen h-screen fixed top-0 left-0 z-10 pointer-events-none flex">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  )
}

export default StairTransition
