"use client"
import { signOut, useSession } from 'next-auth/react'

export default function page() {
    let session = useSession();

    const handleCookie = () => {
        deleteCookie('token')
    }

    return (
        <div className='container'>
            <h1>Dashboard</h1>
            <p>{JSON.stringify(session)}</p>

            <button onClick={() => { signOut({ callbackUrl: "/" }); handleCookie() }} className='btn btn-info'>
                Logout
            </button>
        </div>
    )
}
