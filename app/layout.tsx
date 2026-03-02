import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const urbanist = Urbanist({ 
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: 'Legal Door - Expert Legal Services for Business Success',
  description:
    'Professional legal services including corporate law, IP protection, employment law, and business litigation. Your trusted partner in legal excellence.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
