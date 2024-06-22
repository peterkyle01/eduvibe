import { Teko } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'

const teko = Teko({ subsets: ['latin'] })

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <main className={`w-full h-[100dvh] ${teko.className}`}>{children}</main>
      <Footer />
      <Toaster richColors />
    </>
  )
}
