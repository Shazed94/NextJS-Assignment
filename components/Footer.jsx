import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="footer bg-black text-white py-14">
      <div className="container mx-auto">
        <div className="flex justify-between gap-10">
          <div className="max-w-[330px]">
            <h1 className="text-f40 font-bold text-white mb-7">WEB LOGO</h1>
            <p className="text-f20 text-white mb-5">
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </p>
            <div className="flex">
              <div className="bg-light-green-text p-3 rounded-full me-2">
                <BiLogoFacebook size={25} />
              </div>
              <div className="bg-light-green-text p-3 rounded-full me-2">
                <BiLogoTwitter size={25} />
              </div>
              <div className="bg-light-green-text p-3 rounded-full me-2">
                <BiLogoLinkedin size={25} />
              </div>
              <div className="bg-light-green-text p-3 rounded-full me-2">
                <BiLogoInstagramAlt size={25} />
              </div>
            </div>
          </div>
          <div className="flex flex-col self-center space-y-7 ">
            <h4 className="text-f20 font-medium">Quick Links</h4>
            <Link href="/" className="text-f18 font-medium ">
              Services
            </Link>
            <Link href="/" className="text-f18 font-medium">
              Portfolio
            </Link>
            <Link href="/" className="text-f18 font-medium">
              About Us
            </Link>
            <Link href="/" className="text-f18 font-medium">
              Contact Us
            </Link>
          </div>
          <div className="space-y-7">
            <h4 className="text-f20 font-medium">Address</h4>
            <p className="">
              Design Agency Head Office. <br /> Airport Road <br /> United Arab
              Emirate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
