import { getAllServices } from '@/apiList/Service'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Subscribe from '@/components/Subscribe'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

export default async function page() {
    const allServices = await getAllServices()
    return (
        <div>
            <Header background={`bg-light-green-200-bg`} />

            <section className="heronav bg-light-green-200-bg pt-16 pb-20">
                <div className="container mx-auto">
                    <h4 className="plus_jakarta_sans text-f40 font-semibold mb-6 text-light-gray/900">Our Services</h4>
                    <div className="flex items-center space-x-5">
                        <span className="plus_jakarta_sans text-f16 font-semibold ">Home</span>
                        <span className="plus_jakarta_sans text-f16 font-semibold "> <BsChevronRight /></span>
                        <span className="plus_jakarta_sans text-f16 font-semibold text-light-green-text">Our Services</span>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-16">
                <div className="mb-10">
                    <h5 className="text-light-green-text uppercase text-f20 font-medium mb-5">Our All Services</h5>
                    <h2 className="text-f30 font-semibold lg:max-w-[480px]">We Provide Best Web design services</h2>
                </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allServices.map((service) => (
                        <div key={service.id} className="relative rounded-2xl bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] p-6">
                            <h2 className="text-[26px] font-semibold mb-3">{service.title}</h2>
                            <h5 className="text-f16 text-9d9d9d mb-3">{service.des}</h5>
                            <div className='grid grid-cols-12 gap-6 mb-6'>
                                <div className='col-span-8 rounded-[10px] overflow-hidden h-[164px]'>
                                    <img src={service.image1} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className='col-span-4 rounded-[10px] overflow-hidden h-[164px]'>
                                    <img src={service.image2} alt="" className='w-full h-full object-cover' />
                                </div>
                            </div>
                            <div className='grid grid-cols-12 gap-6 rounded-[10px] overflow-hidden h-[263px]'>
                                <div className='col-span-6 rounded-[10px] overflow-hidden'>
                                    <img src={service.image3} alt=""  className='w-full h-full object-cover' />
                                </div>
                                <div className='col-span-6 rounded-[10px] overflow-hidden h-[263px]'>
                                    <img src={service.image4} alt=""  className='w-full h-full object-cover'/>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
            </section>
            <Subscribe />
            <Footer />
        </div>
    )
}
