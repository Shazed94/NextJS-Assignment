import React from 'react'

export default async function getPostList() {
    const res = await fetch("https://basic-blog.teamrabbil.com/api/post-list/1")

    if (!res.ok) {
        throw new Error("Something went wrong!")
    }
    return res.json()
}
