'use client';
import Link from 'next/link'
import React, { useState } from 'react'

const AuthLinks = () => {
    const [open, setOpen] = useState(false)

    // temporary
    const status = 'notauuthenticated'

    return (
        <>
            {status === 'notauuthenticated' ? (
            <>
                <Link href={'/login'} className='ml-6 sm:text-sm md:text-base lg:text-lg xl:text-2xl'>Login</Link> 
                <Link href={'/sign-up'} className='ml-6 sm:text-sm md:text-base lg:text-lg xl:text-2xl'>Sign Up</Link>
            </>) : (
                <div className='hidden md:block'>
                    <Link href={'/write'} className='sm:text-sm md:text-base lg:text-lg xl:text-2xl me-6'>Dash</Link>
                    <span className='cursor-pointer me-6'>Logout</span>
                </div>)}

            <div className="ml-6 md:hidden burger w-5 h-4 flex flex-col justify-between" onClick={() => setOpen(!open)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {open &&
                <div className='absolute left-0 top-[100px] h-[calc(100vh-100px)] ml-0 flex flex-col items-center justify-center gap-4 w-full bg-[var(--bg)]'>
                    <Link href={"/"} className=' text-3xl'>Homepage</Link>
                    <Link href={"/about"} className=' text-3xl'>About</Link>
                    <Link href={"/contact"} className=' text-3xl'>Contact</Link>
                    <Link href={"/login"} className=' text-3xl'>Login</Link>
                    <Link href={'/sign-up'} className='text-3xl'>Sign Up</Link>
                </div>
            }

        </>
    )
}

export default AuthLinks