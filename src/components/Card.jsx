import Image from 'next/image'

const Card = () => {
    return (
        <div className="flex gap-8 mb-7">
            <div className="w-1/2 h-[350px] relative">
                <Image
                    src="https://source.unsplash.com/random/300x200"
                    alt="A random image of a cat"
                    fill
                    className='object-cover rounded-md'
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center gap-5">
                <div><span className="date text-[var(--softTextColor)]">11.02.2023</span> - <span className="category uppercase text-[crimson]">Culture</span></div>
                <h3 className="title text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dicta.</h3>
                <div className="desc text-sm text-[var(--softTextColor)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda nihil odit cumque eligendi beatae, ab repellendus. Ipsa, repellat tempora!</div>
                <button className='pb-1 w-max border-b border-red-600'>Read more</button>
            </div>
        </div>
    )
}

export default Card;