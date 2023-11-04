import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='container mt-12'>
            <div className="flex gap-12">
                <div className="w-2/3">
                    <div className='flex items-center gap-2'>
                        <Image src="https://source.unsplash.com/random/45x45" alt="" width={45} height={45} className='object-cover rounded-full ring-1 ring-offset-2 ring-rose-600' />
                        <span className='font-mono ms-1'>Shazed's Blog</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam quibusdam neque blanditiis iste praesentium!
                    </p>
                </div>
                <div className="w-1/3 flex justify-between">
                    <div className='flex flex-col '>
                        <b>Links</b>
                        <Link href="/">Homepage</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                    </div>
                    <div className='flex flex-col '>
                        <b>Tags</b>
                        <Link href="/">Style</Link>
                        <Link href="/">Fashion</Link>
                        <Link href="/">Coding</Link>
                        <Link href="/">Travel</Link>
                    </div>
                    <div className='flex flex-col '>
                        <b>Social</b>
                        <Link href="/">Facebook</Link>
                        <Link href="/">Instagram</Link>
                        <Link href="/">LinkedIn</Link>
                        <Link href="/">Github</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer