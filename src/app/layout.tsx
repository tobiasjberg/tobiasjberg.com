import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tobias Berg | Web Developer | KC',
  description: 'Tobias Berg is a professional web developer based out of Kansas City, KS with over 7 years of professional experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
      </body>
      <GoogleAnalytics gaId='G-N97KB9YK74' />
      <GoogleTagManager gtmId='GTM-NBZLVRXP' />
    </html>
  )
}
