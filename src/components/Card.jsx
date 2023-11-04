import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

const Card = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <div key={i} className="flex gap-8 mb-7">
          <div className="w-1/2 h-[350px] relative">
            <Image
              src={item.imgCDN}
              alt="A random image of a cat"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center gap-5">
            <div>
              <span className="date text-[var(--softTextColor)]">
                11.02.2023
              </span>{" "}
              -{" "}
              <span className="category uppercase text-[crimson]">Culture</span>
            </div>
            <h3 className="title text-xl">{item.title}</h3>
            <div className="desc text-sm text-[var(--softTextColor)]">
              {parse(`${item?.des.slice(0, 300)} ...`)}
            </div>
            <Link href={`/blog-details/${item?.id}`}>
              <button className="pb-1 w-max border-b border-red-600">
                Read more
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
