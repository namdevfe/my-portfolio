'use client'

import { cn } from '@/lib/utils'
import CountUp from 'react-countup'

type StatType = { count: number; text: string }

const stats: StatType[] = [
  {
    count: 1,
    text: 'Years of experience'
  },
  {
    count: 6,
    text: 'Projects completed'
  },
  {
    count: 8,
    text: 'Technologies mastered'
  },
  {
    count: 1500,
    text: 'Code commits'
  }
]

const StatsSection = () => {
  return (
    <section className="pt-[60px] sm:pt-[30px] xs:pt-[270px] xxxs:pt-[440px]">
      <div className="layout-container">
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <CountUp
                end={item.count}
                duration={5}
                delay={2}
                className="text-6xl xs:text-4xl font-extrabold"
              />
              <p
                className={cn(
                  'text-wrap text-white/80 leading-snug',
                  item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                )}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
