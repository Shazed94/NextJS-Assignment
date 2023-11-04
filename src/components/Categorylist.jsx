import Image from 'next/image'
import React from 'react'

const Categorylist = () => {
    return (
        <div className='container py-10'>
            <h2 className='mb-8 capitalize font-semibold text-2xl'>Popular Categories</h2>
            <div className="flex flex-wrap justify-between gap-6">
                <div className='px-6 py-3 rounded-md bg-[#57c4ff31] flex justify-center items-center gap-5'>
                    <Image src="https://source.unsplash.com/random/32x32" width={32} height={32} className='rounded-full' />
                    <span>Style</span>
                </div>
                <div className='px-6 py-3 rounded-md bg-[#da85c731] flex justify-center items-center gap-5'>
                    <Image src="https://source.unsplash.com/random/32x32" width={32} height={32} className='rounded-full' />
                    <span>Fashion</span>
                </div>
                <div className='px-6 py-3 rounded-md bg-[#7fb88133] flex justify-center items-center gap-5'>
                    <Image src="https://source.unsplash.com/random/32x32" width={32} height={32} className='rounded-full' />
                    <span>Food</span>
                </div>
                <div className='px-6 py-3 rounded-md bg-[#ff795736] flex justify-center items-center gap-5'>
                    <Image src="https://source.unsplash.com/random/32x32" width={32} height={32} className='rounded-full' />
                    <span>Travel</span>
                </div>
                <div className='px-6 py-3 rounded-md bg-[#ffb04f45] flex justify-center items-center gap-5'>
                    <Image src="https://source.unsplash.com/random/32x32" width={32} height={32} className='rounded-full' />
                    <span>Culture</span>
                </div>
                <div className='px-6 py-3 rounded-md bg-[#5e4fff31] flex justify-center items-center gap-5'>
                    <Image src="https://source.unsplash.com/random/32x32" width={32} height={32} className='rounded-full' />
                    <span>Coding</span>
                </div>

            </div>
        </div>
    )
}

export default Categorylist