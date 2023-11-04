import React from 'react'

const MenuCategories = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='px-3 py-2 rounded-md bg-[#57c4ff31] flex justify-center items-center'>
                <span>Style</span>
            </div>
            <div className='px-3 py-2 rounded-md bg-[#da85c731] flex justify-center items-center'>
                <span>Fashion</span>
            </div>
            <div className='px-3 py-2 rounded-md bg-[#7fb88133] flex justify-center items-center'>
                <span>Food</span>
            </div>
            <div className='px-3 py-2 rounded-md bg-[#ff795736] flex justify-center items-center'>
                <span>Travel</span>
            </div>
            <div className='px-3 py-2 rounded-md bg-[#ffb04f45] flex justify-center items-center'>
                <span>Culture</span>
            </div>
            <div className='px-3 py-2 rounded-md bg-[#5e4fff31] flex justify-center items-center'>
                <span>Coding</span>
            </div>
        </div>
    )
}

export default MenuCategories