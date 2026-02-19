import type { Metadata, Viewport } from 'next'
import { Source_Serif_4, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jakerenzella.com'),
  title: 'Dr Jake Renzella — Computer Science & AI Education',
  description:
    'Senior Lecturer at UNSW Sydney. Researching pedagogical generative AI, leading Day of AI Australia, and exploring the dead internet theory.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Dr Jake Renzella — Computer Science & AI Education at UNSW Sydney',
    description:
      'Senior Lecturer at UNSW Sydney researching pedagogical generative AI. Leading Day of AI Australia, delivering free AI literacy to 250,000+ students annually.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr Jake Renzella — Computer Science & AI Education at UNSW Sydney',
    description:
      'Senior Lecturer at UNSW Sydney researching pedagogical generative AI. Leading Day of AI Australia, delivering free AI literacy to 250,000+ students annually.',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f0ea',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
