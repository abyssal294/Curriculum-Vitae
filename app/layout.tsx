import './globals.css';
import { Inter } from 'next/font/google';
import { personalData } from '../data/page-data';
import Sidebar from './component/Sidebar';


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
      <body className="flex flex-col sm:flex-row">
        <Sidebar data={personalData} />
        <main className="grow-full p-8 w-full sm:p-16 basis-2/3 ml-auto"> 
        {children}
        </main>
      </body>
    </html>
  )
}
