import React from 'react'

export default function Subscribe() {
    return (
        <section className="container mx-auto lg:w-[450px] text-center py-14">
            <div className=" mx-auto mb-10">
                <h5 className="text-light-green-text uppercase text-f20 font-medium mb-5">SUBSCRIBE</h5>
                <h2 className="text-f30 font-bold lg:max-w-[480px] mb-1">Subscribe to get the latest news about us</h2>
                <h6 className="text-f14 font-medium text-light-gray capitalize" >Please drop your email below to get daily update about what we do</h6>
            </div>
            <div className="relative">
                <input type="text" placeholder="Enter Your Email Adress" className="placeholder:text-light-gray text-f16 rounded-[14px] w-full border border-black px-7 py-4" />
                <button className="absolute right-1 top-1 bottom-1 px-6 py-3 text-white bg-orange rounded-[14px]">Subscribe</button>
            </div>
        </section>
    )
}
