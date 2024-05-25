import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

// Components
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import StairTransition from '@/components/StairTransition'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetBrainsMono'
})

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My Portfolio',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is webiste is used to introduce about myself'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable} suppressHydrationWarning>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
