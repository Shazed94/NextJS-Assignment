import Cardlist from '@/components/Cardlist'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div className='container'>
            <Navbar />
            <h2 className='bg-rose-500 py-4 mb-8 text-white text-center'>Style Blog</h2>

            <div className="flex gap-12">
                <Cardlist />
                <Menu />
            </div>
            <Footer />
        </div>
    )
}

export default page