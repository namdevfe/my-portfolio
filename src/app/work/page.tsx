import WorkSection from '@/app/work/WorkSection'
import type { Metadata } from 'next'
import 'swiper/css'

export const metadata: Metadata = {
  title: 'Work'
}

const WorkPage = () => {
  return (
    <main className="pt-[136px]">
      <WorkSection />
    </main>
  )
}

export default WorkPage
