import type { Metadata } from 'next'
import HomeMain from '@/app/HomeMain'

export const metadata: Metadata = {
  title: 'Home'
}

const HomePage = () => {
  return <HomeMain />
}

export default HomePage
