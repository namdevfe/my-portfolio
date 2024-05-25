'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className="w-full relative">
      <>
        <div className="flex w-[480px] h-[480px] sm:w-[300px] sm:h-[300px] mix-blend-lighten relative overflow-hidden">
          <Image
            src="/img/avatar.png"
            quality={100}
            priority
            fill
            sizes="100%"
            className="object-contain !left-2"
            alt="Avatar"
          />
        </div>

        {/* Circle */}
        <motion.svg
          className="w-[506px] h-[506px] sm:w-[306px] sm:h-[306px] absolute top-0 left-0"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        </motion.svg>
      </>
    </div>
  )
}

export default Avatar
