import { getAllProjects } from '@/apiList/Projects'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Subscribe from '@/components/Subscribe'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

export default async function page() {
    const allProjects = await getAllProjects()

    return (
        <div>
            <Header background={`bg-light-green-200-bg`} />

            <section className="heronav bg-light-green-200-bg pt-16 pb-20">
                <div className="container mx-auto">
                    <h4 className="plus_jakarta_sans text-f40 font-semibold mb-6 text-light-gray/900">All Project</h4>
                    <div className="flex items-center space-x-5">
                        <span className="plus_jakarta_sans text-f16 font-semibold ">Home</span>
                        <span className="plus_jakarta_sans text-f16 font-semibold "> <BsChevronRight /></span>
                        <span className="plus_jakarta_sans text-f16 font-semibold text-light-green-text">All Project</span>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-16">
                <div className="mb-10">
                    <h5 className="text-light-green-text uppercase text-f20 font-medium mb-5">All Project</h5>
                    <h2 className="text-f30 font-semibold lg:max-w-[480px]">Better Agency/SEO Solution At Your Fingertips</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {allProjects.map((project) => (
                        <div key={project.is} className="relative rounded-2xl bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] p-6">
                            <a href={project.live} target='_blank' className='cursor-pointer'>
                                <div className='rounded-[10px] overflow-hidden'>
                                    <img
                                        src={project.image}
                                        alt="team card"
                                        className=""
                                    />
                                </div>

                                <div className="p-6">
                                    <h4 className="text-center text-f26 font-semibold text-light-gray/900">
                                        {project.title}
                                    </h4>
                                </div>
                            </a>
                        </div>
                    ))}

                </div>
            </section>
            <Subscribe />
            <Footer />
        </div>
    )
}
