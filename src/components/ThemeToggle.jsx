'use client';

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

const ThemeToggle = () => {
    const {theme, toggle} = useContext(ThemeContext)
    return (
        <div className={` mr-6 container flex justify-between items-center w-10 h-5 rounded-[50px] cursor-pointer relative ${theme === "dark" ? "bg-white" :"bg-[#0f172a]"}`} onClick={toggle}>
            <BsFillMoonStarsFill color='#efff00' className='absolute left-[2px] text-[13px]'/>
            <div className={`ball w-4 h-4 rounded-[50px] absolute z-10 ${theme === "dark" ? "left-[2px] bg-[#0f172a]" :"right-[2px] bg-white"} transition-all`} ></div>
            <BsFillSunFill color='#ffc800' className='absolute right-[2px] text-[13px]'/>
        </div>
    )
}

export default ThemeToggle