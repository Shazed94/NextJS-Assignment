
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-cyan-100 to-blue-200  min-h-screen flex items-center justify-center'>
      <div>
        <h2 className='text-center font-mono tracking-wider text-4xl mb-10 font-medium'>Welcome to next13</h2>
        <div className='text-center font-medium font-serif'>
          <Link href="/blog" >Check out the Blog page  </Link>
        </div>
      </div>

    </div>
  )
}
