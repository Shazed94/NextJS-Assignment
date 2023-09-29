import Link from "next/link";

const Header = ({ background }) => {
  return (
    <header className={`${background}`}>
      <div className="container mx-auto flex justify-between items-center py-7">
        <a
          href="
        "
          className="nav_brand"
        >
          <h1>
            Design<span>AGENCY</span>
          </h1>
        </a>

        <div className="nav space-x-14">
          <Link href="/" className="">Home</Link>
          <Link href="/team" className="">Team</Link>
          <Link href="/service" className="">Service</Link>
          <Link href="/projects" className="">Projects</Link>
          <Link href="/testimonials" className="">Testimonials</Link>
          <Link href="/login">
            <button className="login bg-transparent border-[1px] border-[#20B15A] rounded-[10px] py-2 px-7">
              Login
            </button>
          </Link>
          <Link href="/login">
            <button className="register bg-[#20B15A] border-[1px] border-[#20B15A] text-white rounded-[10px] py-2 px-7">
              Register
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
