import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'

// Modern, clean body font - excellent readability
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

// Bold, geometric display font - perfect for headings
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Oprime Technology - Modern Web & Mobile Solutions',
  description: 'Transform your digital presence with Oprime Technologies. Expert web development, mobile apps, and innovative digital solutions that drive results.',
  keywords: 'web development, mobile apps, UI/UX design, digital transformation, e-commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
