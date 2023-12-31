import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    // icon: './favicon.ico',
    icon: '../../public/vercel.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon" href="/favicon.ico?"
        />
      </head>
      <body className=''>
        <Header />
        <main className="container mx-auto mt-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
