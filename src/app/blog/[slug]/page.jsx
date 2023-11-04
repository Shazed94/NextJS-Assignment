import Footer from "@/components/Footer"
import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"
import Image from "next/image"


const page = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="flex justify-between gap-10 mb-12">
                <div className="w-1/2">
                    <h1 className="text-5xl font-semibold leading-snug mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>

                    <div className='flex items-center gap-2'>
                        <Image src="https://source.unsplash.com/random/45x45" alt="" width={45} height={45} className='object-cover rounded-full ring-1 ring-offset-2 ring-rose-600' />
                        <div className="flex flex-col ms-1">
                            <span className='text-lg font-medium mb-[1px]'>Md. Shazed Ashraf</span>
                            <span className="text-[12px]">24 October, 2023</span>
                        </div>
                    </div>


                </div>
                <div className="w-1/2 h-[300px] relative">
                    <Image src="https://source.unsplash.com/random/450x450" fill className="rounded-lg onject-contain" />
                </div>
            </div>

            <div className="flex">
                <div className="w-2/3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nostrum atque soluta ipsam sit blanditiis porro. Tempore corrupti magnam necessitatibus magni, et consequatur laudantium eius eligendi, nihil sapiente incidunt a.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nostrum atque soluta ipsam sit blanditiis porro. Tempore corrupti magnam necessitatibus magni, et consequatur laudantium eius eligendi, nihil sapiente incidunt a.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nostrum atque soluta ipsam sit blanditiis porro. Tempore corrupti magnam necessitatibus magni, et consequatur laudantium eius eligendi, nihil sapiente incidunt a.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nostrum atque soluta ipsam sit blanditiis porro. Tempore corrupti magnam necessitatibus magni, et consequatur laudantium eius eligendi, nihil sapiente incidunt a.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nostrum atque soluta ipsam sit blanditiis porro. Tempore corrupti magnam necessitatibus magni, et consequatur laudantium eius eligendi, nihil sapiente incidunt a.</p>
                </div>

                <Menu />

            </div>
            <Footer />
        </div>
    )
}

export default page