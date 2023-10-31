import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Productive youtube',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png" />
      </head>

      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  )
}


