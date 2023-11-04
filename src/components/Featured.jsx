import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='container'>
      <h1 className='title text-3xl lg:text-[70px] leading-normal mb-6'><b>Hey, Shazed Ashraf here!</b> Discover my stories and creative ideas</h1>

      <div className='post_desc flex gap-8'>
        <div className="w-1/2 h-[500px] relative">
          <Image
            src="https://source.unsplash.com/random/300x200"
            alt="A random image of a cat"
            fill
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-5">
          <div className="title text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dicta.</div>
          <div className="desc text-sm text-[var(--softTextColor)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda nihil odit cumque eligendi beatae, ab repellendus. Ipsa, repellat tempora!</div>
          <button className='px-5 py-4 w-max rounded-md bg-[var(--textColor)] text-[var(--softBg)]'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured