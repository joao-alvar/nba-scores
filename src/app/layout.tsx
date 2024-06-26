import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Nav, Footer} from '@/app/components'
import NProgressProvider from '@/app/components/NProgressProvider'

import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  metadataBase: new URL('https://nba-livescores.netlify.app'),
  title: 'The best site for the latest NBA Scores, Stats & News. | NBA Scores',
  description: 'Follow the action on NBA scores, schedules, stats, news, Team and Player news.',
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicon/favicon.ico',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NProgressProvider>
          <div className="bg-layout">
            <div className="z-[1] flex flex-grow flex-col">
              <Nav />
              <main className="container mx-auto mb-8 flex flex-grow flex-col px-4">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </NProgressProvider>
      </body>
    </html>
  )
}
