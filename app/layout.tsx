import './globals.css';
import { Inter } from 'next/font/google';
import Sidebar from './component/Sidebar';
import { personalData } from './data/page-data';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Resume',
  description: 'Created using Next.js 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
