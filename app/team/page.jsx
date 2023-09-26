'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { BsChevronRight } from "react-icons/bs"


export default function page() {
    return (
        <div>
            <Header background={`bg-light-green-200-bg`} />

            <section className="heronav bg-light-green-200-bg pt-16 pb-20">
                <div className="container mx-auto">
                    <h4 className="plus_jakarta_sans text-f40 font-semibold mb-6 text-light-gray/900">Team</h4>
                    <div className="flex items-center space-x-5">
                        <span className="plus_jakarta_sans text-f16 font-semibold ">Home</span>
                        <span className="plus_jakarta_sans text-f16 font-semibold "> <BsChevronRight /></span>
                        <span className="plus_jakarta_sans text-f16 font-semibold text-light-green-text">Team</span>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-16">
                <div className="mb-10">
                    <h5 className="text-light-green-text uppercase text-f20 font-medium mb-5">Work List</h5>
                    <h2 className="text-f30 font-semibold lg:max-w-[480px]">We provide the Perfect Solution to your business growth</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="relative flex max-w-[24rem] flex-col rounded-2xl bg-white  text-gray-700 shadow-md">
                        <div className="relative m-0 overflow-hidden rounded-none bg-transparent  text-gray-700 shadow-none">
                            <img
                                src="assets/team/team_card_1.png"
                                alt="team card"
                                className="rounded-t-2xl"
                            />
                        </div>
                        <div className="p-6">
                            <h4 className="text-center text-f30 font-semibold text-light-gray/900">
                                UI/UX Review Check
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <Subscribe/>
            <Footer/>
        </div>
    )
}