"use client"
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

export default function page() {
    let session = useSession();
    return (
        <div>
            <h1>Dashboard</h1>
            <p>{JSON.stringify(session)}</p>

            <button onClick={()=>signOut({callbackUrl:"/"})} className='btn btn-info'>
                Logout
            </button>
        </div>
    )
}
