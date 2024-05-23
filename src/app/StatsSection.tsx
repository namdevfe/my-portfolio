'use client'

import { cn } from '@/lib/utils'
import CountUp from 'react-countup'

const stats: { count: number; text: string }[] = [
  {
    count: 12,
    text: 'Years of experience'
  },
  {
    count: 10,
    text: 'Projects completed'
  },
  {
    count: 8,
    text: 'Technologies mastered'
  },
  {
    count: 500,
    text: 'Code commits'
  }
]
const StatsSection = () => {
  return (
    <section className="pt-12 sm:pt-[200px]">
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
