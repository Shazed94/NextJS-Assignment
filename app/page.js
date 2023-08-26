import Link from "next/link"
import getNewestPost from "./api/getNewestPost"
import getPostCategories from "./api/getPostCategories"


export default async function Home() {
  const postCategories = await getPostCategories()
  const newestPosts = await getNewestPost()
  return (<>
    <h2 className="text-center text-4xl font-semibold mt-12 mb-6">Blog Categories</h2>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 pt-5 pb-12 ">
      {postCategories.map((category) => (
        <Link href={`/blog`}>
          <div className="bg-slate-100 rounded-2xl py-8 shadow-md ring-2 ring-inset ring-purple-600">
            <h4 className="text-center">{category.name}</h4>
          </div>
        </Link>
      ))}
    </div>

    <h2 className="text-center text-4xl font-semibold mt-12 mb-8">Latest Blogs</h2>
    <div className="bg-slate-100/50 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mb-20">
        {newestPosts.map((post) => (
          <div className="bg-zinc-100 rounded-md shadow-2xl">
            <img src={post.img} alt="" className="rounded-s-md rounded-e-md" />
            <h3 className="my-4 px-5">{post.title}</h3>
            <p className="px-5 mb-6">{post.short}</p>
          </div>
        ))}
      </div>
    </div>
  </>)
}
