import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-N97KB9YK74" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-N97KB9YK74');
          `}
        </Script>
      </body>
    </html>
  )
}
