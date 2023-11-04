import Image from 'next/image'
import React from 'react'

const MenuPosts = ({ withImage }) => {
    return (
        <>
            <div className='flex items-center gap-3 mb-8 '>
                {withImage && <div className="image_container relative h-[80px] aspect-square">
                    <Image src="https://source.unsplash.com/random/100x100" fill className='object-cover rounded-full' />
                </div>}

                <div className='flex flex-col gap-1'>
                    <span className="w-max px-2 py-[2px] text-[12px] rounded-full bg-[#ff7857] text-white">Travel</span>
                    <h5 className='text-md font-medium '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h5>
                    <div className='flex'> <span className="name">John Doe</span>&nbsp;-&nbsp;<span className="date text-[var(--softTextColor)]"> 11.02.2023</span></div>
                </div>
            </div>
            <div className='flex items-center gap-3 mb-8 '>
                {withImage && <div className="image_container relative h-[80px] aspect-square">
                    <Image src="https://source.unsplash.com/random/100x100" fill className='object-cover rounded-full' />
                </div>}

                <div className='flex flex-col gap-1'>
                    <span className="w-max px-2 py-[2px] text-[12px] rounded-full bg-[#ffb14f] text-white">Culture</span>
                    <h5 className='text-md font-medium '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h5>
                    <div className='flex'> <span className="name">John Doe</span>&nbsp;-&nbsp;<span className="date text-[var(--softTextColor)]"> 11.02.2023</span></div>
                </div>
            </div>
            <div className='flex items-center gap-3 mb-8 '>
                {withImage && <div className="image_container relative h-[80px] aspect-square">
                    <Image src="https://source.unsplash.com/random/100x100" fill className='object-cover rounded-full' />
                </div>}

                <div className='flex flex-col gap-1'>
                    <span className="w-max px-2 py-[2px] text-[12px] rounded-full bg-[#7fb881] text-white">Food</span>
                    <h5 className='text-md font-medium '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h5>
                    <div className='flex'> <span className="name">John Doe</span>&nbsp;-&nbsp;<span className="date text-[var(--softTextColor)]"> 11.02.2023</span></div>
                </div>
            </div>
            <div className='flex items-center gap-3 mb-8 '>
                {withImage && <div className="image_container relative h-[80px] aspect-square">
                    <Image src="https://source.unsplash.com/random/100x100" fill className='object-cover rounded-full' />
                </div>}

                <div className='flex flex-col gap-1'>
                    <span className="w-max px-2 py-[2px] text-[12px] rounded-full bg-[#ff7887] text-white">Fashion</span>
                    <h5 className='text-md font-medium '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h5>
                    <div className='flex'> <span className="name">John Doe</span>&nbsp;-&nbsp;<span className="date text-[var(--softTextColor)]"> 11.02.2023</span></div>
                </div>
            </div>
            <div className='flex items-center gap-3 mb-8 '>
                {withImage && <div className="image_container relative h-[80px] aspect-square">
                    <Image src="https://source.unsplash.com/random/100x100" fill className='object-cover rounded-full' />
                </div>}

                <div className='flex flex-col gap-1'>
                    <span className="w-max px-2 py-[2px] text-[12px] rounded-full bg-[#775aec] text-white">Coding</span>
                    <h5 className='text-md font-medium '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h5>
                    <div className='flex'> <span className="name">John Doe</span>&nbsp;-&nbsp;<span className="date text-[var(--softTextColor)]"> 11.02.2023</span></div>
                </div>
            </div>
            <div className='flex items-center gap-3 mb-8 '>
                {withImage && <div className="image_container relative h-[80px] aspect-square">
                    <Image src="https://source.unsplash.com/random/100x100" fill className='object-cover rounded-full' />
                </div>}

                <div className='flex flex-col gap-1'>
                    <span className="w-max px-2 py-[2px] text-[12px] rounded-full bg-[#789cff] text-white">Style</span>
                    <h5 className='text-md font-medium '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h5>
                    <div className='flex'> <span className="name">John Doe</span>&nbsp;-&nbsp;<span className="date text-[var(--softTextColor)]"> 11.02.2023</span></div>
                </div>
            </div>
        </>
    )
}

export default MenuPosts