import React from 'react'
import getPostList from '../api/getPostList'
import Link from 'next/link'

const Blog = async () => {
    const postlists = await getPostList()
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-7 mb-20'>
            {postlists.map((post) => (
                <Link href={`/blog/${post.id}`} >
                    <div className="bg-zinc-200 rounded-md shadow-xl">
                        <img src={post.img} alt="" className="rounded-s-md rounded-e-md" />
                        <h3 className="my-4 px-5">{post.title}</h3>
                        <p className="px-5 mb-6">{post.short}</p>
                    </div>
                </Link>
            ))}

        </div>
    )
}

export default Blog