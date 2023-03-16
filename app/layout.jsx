import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import './globals.css'

export const metadata = {
  title: 'itscactus.',
  description: 'Just imagine and do it.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#24292e]'>
        <div className='block md:flex flex-row gap-2'>
          <Sidebar />
          <div className='p-2'>
            {children}
          </div>
          <Footer />
        </div>
    
      </body>
    </html>
  )
}
