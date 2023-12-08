import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <ThemeProvider
        theme={theme}
      > */}
      <body className={inter.className}>{children}</body>
      {/* </ThemeProvider> */}
    </html>
  )
}
