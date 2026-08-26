import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vrushti Shah — Digital Marketing, SEO & Web Design',
  description:
    'Vrushti Shah is a digital marketing specialist in Ahmedabad helping brands grow through Social Media Marketing, SEO, and conversion-focused Web Design.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo-vs-icon.png',
        type: 'image/png',
      },
    ],
    apple: '/logo-vs-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090d16',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} bg-transparent text-white`}
    >
      <body className="font-sans text-white antialiased bg-transparent selection:bg-emerald-500 selection:text-slate-950">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
