import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvier from '@/providers/toast-provider'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deja',
  description: 'Deja',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider/>
        <ToastProvier/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
