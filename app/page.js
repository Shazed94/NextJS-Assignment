import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (<>
    <Header background={`bg-[#D7F5DC]`} />
    <section className="hero py-14">
      <div className="container mx-auto grid grid-cols-2 gap-5">
        <div className="left_side pe-7">
          <h1 className="text-f50 font-extrabold mb-5">Increase Your Customers Loyalty and Satisfaction</h1>
          <p className="text-f20 font-medium mb-12">We help businesses like yours earn more customers, standout from competitors,  make more money</p>

          <button className="text-f20 bg-[#20B15A] border-[1px] border-[#20B15A] text-white rounded-[10px] py-5 px-[30px]">Get Started</button>
        </div>
        <div className="right_side justify-self-end">
          <div className="flex mb-5">
            <div className="img_wrapper lg:w-[408px] lg:h-[271px] rounded-[10px] overflow-hidden me-6">
              <img src="/assets/homepage/hero_img_1.png" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="lg:w-[180px] lg:h-[271px] rounded-[10px] overflow-hidden">
              <img src="/assets/homepage/hero_img_2.png" alt="" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="flex">
            <div className="img_wrapper lg:w-[246px] lg:h-[164px] rounded-[10px] overflow-hidden me-6">
              <img src="/assets/homepage/hero_img_3.png" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="lg:w-[345px] lg:h-[164px] rounded-[10px] overflow-hidden">
              <img src="/assets/homepage/hero_img_4.png" alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

      </div>
      <div className="hero_slider mt-16      ">
        <div className="container mx-auto flex justify-between items-center py-8">
          <div className="img_wrapper lg:h-[30px]">
            <img src="/assets/homepage/hero_img_5.png" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="img_wrapper lg:h-[30px]">
            <img src="/assets/homepage/hero_img_6.png" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="img_wrapper lg:h-[30px]">
            <img src="/assets/homepage/hero_img_7.png" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="img_wrapper lg:h-[30px]">
            <img src="/assets/homepage/hero_img_8.png" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="img_wrapper lg:h-[30px]">
            <img src="/assets/homepage/hero_img_9.png" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

    </section>

    <section className="container mx-auto work_list py-14">
      <div className="mb-10">
        <h5 className="text-light-green-text uppercase text-f20 font-medium mb-5">Work List</h5>
        <h2 className="text-f30 font-semibold lg:max-w-[480px]">We provide the Perfect Solution to your business growth</h2>
      </div>

      <div className="grid lg:grid-cols-3 lg:gap-11">
        <div>
          <div className="icon_wrapper bg-light-green-bg w-[90px] h-[90px] rounded-[20px] mb-5">
            <img src="/assets/homepage/activity.png" alt="" className="w-full h-full p-[30px]" />
          </div>
          <h3 className="mb-4 text-f24 font-semibold ">Grow Your Business</h3>
          <p className="mb-10 text-f18 lg:max-w-[300px]">We help identify the best ways to improve your business</p>
          <Link href="/" className="flex items-center"> <span className="me-2"> Learn More</span>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 18 17" fill="none">
            <path d="M10 1.83331L17 8.83331L10 15.8333M1 8.83331H17H1Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg> </Link>
        </div>
        <div>
          <div className="icon_wrapper icon_wrapper bg-light-green-bg w-[90px] h-[90px] rounded-[20px] mb-5">
            <img src="/assets/homepage/heart.png" alt="" className="w-full h-full p-[30px]" />
          </div>
          <h3 className="mb-4 text-f24 font-semibold">Grow Your Business</h3>
          <p className="mb-10 text-f18 lg:max-w-[300px]">We help identify the best ways to improve your business</p>
          <Link href="/" className="flex items-center"> <span className="me-2"> Learn More</span>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 18 17" fill="none">
            <path d="M10 1.83331L17 8.83331L10 15.8333M1 8.83331H17H1Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg> </Link>
        </div>
        <div>
          <div className="icon_wrapper bg-light-green-bg w-[90px] h-[90px] rounded-[20px] mb-5">
            <img src="/assets/homepage/work.png" alt="" className="w-full h-full p-[30px]" />
          </div>
          <h3 className="mb-4 text-f24 font-semibold">Grow Your Business</h3>
          <p className="mb-10 text-f18 lg:max-w-[300px]">We help identify the best ways to improve your business</p>
          <Link href="/" className="flex items-center"> <span className="me-2"> Learn More</span>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 18 17" fill="none">
            <path d="M10 1.83331L17 8.83331L10 15.8333M1 8.83331H17H1Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg> </Link>
        </div>

      </div>
    </section>

    <section className="stats container mx-auto work_list py-14">
      <div className="grid lg:grid-cols-4 lg:gap-8">
        <div className="rounded-[20px] bg-white shadow-[4px_9px_20px_0px_rgba(0,0,0,0.07)] text-center py-12">
          <div className="icon_wrapper icon_wrapper bg-light-green-bg w-[90px] h-[90px] mx-auto rounded-[20px] mb-5">
            <img src="/assets/homepage/group.png" alt="" className="w-full h-full object-contain p-[25px]" />
          </div>
          <h4 className="text-f30 font-semibold mb-4">240452</h4>
          <h6 className="text-f16 font-medium">Followers</h6>
        </div>
        <div className="rounded-[20px] bg-white shadow-[4px_9px_20px_0px_rgba(0,0,0,0.07)] text-center py-12">
          <div className="icon_wrapper icon_wrapper bg-light-green-bg w-[90px] h-[90px] mx-auto rounded-[20px] mb-5">
            <img src="/assets/homepage/like.png" alt="" className="w-full h-full object-contain p-[25px]" />
          </div>
          <h4 className="text-f30 font-semibold mb-4">240452</h4>
          <h6 className="text-f16 font-medium">Followers</h6>
        </div>
        <div className="rounded-[20px] bg-white shadow-[4px_9px_20px_0px_rgba(0,0,0,0.07)] text-center py-12">
          <div className="icon_wrapper icon_wrapper bg-light-green-bg w-[90px] h-[90px] mx-auto rounded-[20px] mb-5">
            <img src="/assets/homepage/happy.png" alt="" className="w-full h-full object-contain p-[25px]" />
          </div>
          <h4 className="text-f30 font-semibold mb-4">240452</h4>
          <h6 className="text-f16 font-medium">Followers</h6>
        </div>
        <div className="rounded-[20px] bg-white shadow-[4px_9px_20px_0px_rgba(0,0,0,0.07)] text-center py-12">
          <div className="icon_wrapper icon_wrapper bg-light-green-bg w-[90px] h-[90px] mx-auto rounded-[20px] mb-5">
            <img src="/assets/homepage/scan.png" alt="" className="w-full h-full object-contain p-[25px]" />
          </div>
          <h4 className="text-f30 font-semibold mb-4">240452</h4>
          <h6 className="text-f16 font-medium">Followers</h6>
        </div>
      </div>
    </section>


    <Footer />
  </>)
}
