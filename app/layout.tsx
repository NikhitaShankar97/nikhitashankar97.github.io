import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans, Space_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { CursorEffect } from './components/CursorEffect'
import { ScrollProgress } from './components/ScrollProgress'
import { ChatWidget } from './components/ChatWidget'
import { CommandPalette } from './components/CommandPalette'

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nikhita Shankar — Data Engineer & Analytics',
  description: 'Data Engineer & Analytics professional. MS Business Analytics, UIUC. Snowflake, dbt, Microsoft Fabric, Power BI.',
  openGraph: {
    title: 'Nikhita Shankar — Data Engineer & Analytics',
    description: 'Building data systems that turn complexity into decisions. 5+ years experience across ExxonMobil, Hyperplane, and Obvience.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSerifDisplay.variable} ${dmSans.variable} ${spaceMono.variable}`}>
        <CursorEffect />
        <ScrollProgress />
        <Navbar />
        <CommandPalette />
        <main>{children}</main>
        <ChatWidget />
        <Footer />
      </body>
    </html>
  )
}