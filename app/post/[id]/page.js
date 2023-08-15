import React from 'react'
import blogData from "@/data/blogData.json"
import Link from 'next/link'

const SingleBlog = ({ params }) => {

    const singleBlog = blogData.find((singlePost) => singlePost.id == params.id)

    if (!singleBlog) return (<>
        <h2 className='text-center font-mono tracking-wider text-4xl py-12 font-medium'>Post not found!</h2>
        <div className='text-center'>
            <Link href="/blog">
                <div className='text-center'>
                    <button className='bg-lime-600 px-2 py-1 rounded-md'>Back to Blog</button>
                </div>
            </Link>
        </div>
    </>

    )
    return (
        <div className='bg-gradient-to-b from-cyan-100 to-blue-200  h-screen '>
            <h2 className='text-center font-mono tracking-wider text-4xl py-12 font-medium'>Single Blog page</h2>
            <Link href="/blog" className='text-center'>
                <div className='text-center mb-12'>
                    <button className='bg-orange-500 text-white px-2 py-1 rounded-md'>Back to Blog</button>
                </div>
            </Link>

            <div className='grid grid-cols-1 gap-1 container lg:max-w-xl mx-auto rounded-md'>
                <div className='bg-slate-50 p-5 mx-4'>
                    <p className='mb-3'>  <b>Blog id :</b>  {singleBlog.id}</p>
                    <h2 className='mb-3'> <b>Title :</b>  {singleBlog.title}</h2>
                    <h5 className='mb-3'> <b>Content :</b>  {singleBlog.body}</h5>
                    <p className='mb-3'>  <b>Date :</b> {singleBlog.date}</p>

                </div>

            </div>
        </div>
    )
}

export default SingleBlog