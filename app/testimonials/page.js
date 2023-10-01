import { getAllTestimonials } from '@/apiList/Testimonials'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Subscribe from '@/components/Subscribe'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

export default async function page() {
    const testimonialList = await getAllTestimonials()
    return (
        <div>
            <Header background={`bg-light-green-200-bg`} />

            <section className="heronav bg-light-green-200-bg pt-16 pb-20">
                <div className="container mx-auto">
                    <h4 className="plus_jakarta_sans text-f40 font-semibold mb-6 text-light-gray/900">Testimonial List</h4>
                    <div className="flex items-center space-x-5">
                        <span className="plus_jakarta_sans text-f16 font-semibold ">Home</span>
                        <span className="plus_jakarta_sans text-f16 font-semibold "> <BsChevronRight /></span>
                        <span className="plus_jakarta_sans text-f16 font-semibold text-light-green-text">Testimonial List</span>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-16">
                <div className="mb-10">
                    <h5 className="text-light-green-text uppercase text-f20 font-medium mb-5">Testimonial List</h5>
                    <h2 className="text-f30 font-semibold lg:max-w-[480px]">Better Agency/SEO Solution At Your Fingertips</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialList.map((testomonial) => (
                        <div key={testimonialList.id} className="relative rounded-[20px] bg-white text-center shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] p-6">
                            <div className="w-[100px] h-[100px] mx-auto rounded-[20px] overflow-hidden mb-5">
                                <img
                                    src={testomonial.image}
                                    alt="team card"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h4 className="text-center text-f16 text-[#9d9d9d] mb-4">
                              {testomonial.msg}
                            </h4>
                            <h2 className='text-[26px] font-semibold mb-3'>{testomonial.name}</h2>
                            <p className='text-f16'>{testomonial.designation}</p>
                        </div>
                    ))}

                </div>
            </section>
            <Subscribe />
            <Footer />
        </div>
    )
}
