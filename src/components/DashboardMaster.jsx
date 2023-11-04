import Link from "next/link";
import { FaBlog, FaBuffer, FaMendeley } from "react-icons/fa6";
export default function DashboardMaster(props) {
  return (
    <main>
      <section className="relative ">
        <div className=" flex gap-[30px]">
          <div className="w-[300px] min-h-screen">
            <div className="px-4 py-5 border-r border-gray-300 min-h-full">
              <Link href="/" className="logo cursor-pointer">
               <h3 className="text-xl font-semibold">Shazed's Blog</h3> 
              </Link>
              <br />
              <br />
              <nav>
                <ul className="space-y-5">
                  <li >
                    <Link className="flex items-center gap-4 text-gray-700" href="/dashboard">
                      <FaBuffer /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center gap-4 text-gray-700" href="/dashboard/service/all-services">
                      <FaMendeley /> Service
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center gap-4 text-gray-700" href="/dashboard/blog/all-blogs">
                      <FaBlog /> Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="w-full ">
            {props.children}
            </div>
        </div>
      </section>
    </main>
  );
}
