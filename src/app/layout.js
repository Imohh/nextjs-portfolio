import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oprime Technology',
  description: 'Oprime Technologies | web development | E-Commerce | Application Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
