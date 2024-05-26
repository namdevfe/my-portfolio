import ResumeSection from '@/app/resume/ResumeSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume'
}

const ResumePage = () => {
  return (
    <main className="pt-[136px]">
      <ResumeSection />
    </main>
  )
}

export default ResumePage
