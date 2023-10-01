import Header from '@/components/Header'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { getSiteMeta } from '@/apiList/Homepage'

const inter = Inter({ subsets: ['latin'] })


export async function generateMetadata() {
  const siteMeta = await getSiteMeta()

  return {
    title: siteMeta[0].title,
    description: siteMeta[0].description,
    keywords: siteMeta[0].keywords
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        {children}
      </body>
    </html>
  )
}
