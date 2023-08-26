import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-white shadow-lg sticky top-0'>
            <div className='container mx-auto flex justify-between py-6'>
                <h3>Next13</h3>
                <div className='flex space-x-3 md:space-x-9 list-none'>
                    <Link href="/">
                        <li className='uppercase text-blue-400'>Home</li>
                    </Link>
                    <Link href="/blog">
                        <li className='uppercase text-blue-400'>Blog</li>
                    </Link>
                    <Link href="/about">
                        <li className='uppercase text-blue-400'>About</li>
                    </Link>
                    <Link href="/contact">
                        <li className='uppercase text-blue-400'>Contact</li>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header