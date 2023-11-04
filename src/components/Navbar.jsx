import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import React from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import AuthLinks from './AuthLinks'

const Navbar = () => {
    return (
        <div className='container flex justify-between py-10'>

            <div className="social_link hidden md:flex items-center space-x-1 md:space-x-3">
                <BsFacebook />
                <BsInstagram />
                <BsLinkedin />
                <BsGithub />
            </div>
            <div className="logo font-mono font-semibold text-base lg:text-4xl">
                Shazed's Blog
            </div>
            <div className="links flex justify-between items-center">
                <ThemeToggle />
                <div className='lg:space-x-6'>
                    <Link href={"/"} className='hidden md:inline-block sm:text-sm md:text-base lg:text-lg xl:text-2xl'>Homepage</Link>
                    <Link href={"/contact"} className='hidden md:inline-block sm:text-sm md:text-base lg:text-lg xl:text-2xl'>Contact</Link>
                    <Link href={"/about"} className='hidden md:inline-block sm:text-sm md:text-base lg:text-lg xl:text-2xl'>About</Link>
                </div>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar