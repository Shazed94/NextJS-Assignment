import React from 'react'
import blogData from "@/data/blogData.json"
import Link from 'next/link'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import FontAwesomeIconComponent from '@/components/FontawesomeIcon'
const Blog = () => {

    return (
        <div className='bg-gradient-to-b from-cyan-100 to-blue-200  h-screen '>

            <h2 className=' text-center font-mono tracking-wider text-4xl py-12 font-medium'>Welcome to Blog page
                <div className='xl:float-right xl:pr-[5%] pt-5 lg:pt-0'>
                    <Link href="/">
                        <div className='flex justify-center items-center'>
                            <div className='w-5 me-2'>
                                <FontAwesomeIconComponent icon={faArrowLeft} />
                            </div>
                            <span className='text-lg'>home</span>
                        </div>
                    </Link>
                </div>
            </h2>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {blogData?.map((blog) => (
                    <div className='bg-slate-50 px-6 p-3 mx-4 lg:mx-0'>
                        <Link href={`post/${blog.id}`}>
                            <h3 className='font-medium mb-5'>{blog.title}</h3>
                        </Link>
                        <h3 className=' mb-5'>{blog.body}</h3>
                        <p>{blog.date}</p>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Blog