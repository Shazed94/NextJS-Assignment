import Image from 'next/image'
import React from 'react'
import MenuPosts from './MenuPosts'
import MenuCategories from './MenuCategories'

const Menu = () => {
  return (
    <div className='container w-1/3'>
      <div className="most-popular-category-list pb-7">
        <small className='text-[var(--softTextColor)]'>What's hot</small>
        <h2 className='mb-8 capitalize font-semibold text-2xl'>Most Popular</h2>
        <MenuPosts />
      </div>

      <div className="category-list pb-7">
        <small className='text-[var(--softTextColor)]'>Discover by topic</small>
        <h2 className='mb-8 capitalize font-semibold text-2xl'>Categories</h2>
        <MenuCategories/>
      </div>

      <div className="editors-choice-category-list pb-7">
        <small className='text-[var(--softTextColor)]'>Chosen by the editor</small>
        <h2 className='mb-8 capitalize font-semibold text-2xl'>Editor's Pick</h2>
        <MenuPosts withImage={true} />
      </div>
    </div>
  )
}

export default Menu