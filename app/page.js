import getNewestPost from "./api/getNewestPost"
import getPostCategories from "./api/getPostCategories"


export default async function Home() {
  const postCategories = await getPostCategories()
  const newestPosts = await getNewestPost()
  return (<>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 py-7 ">
      {postCategories.map((category) => (
        <div className="bg-slate-50 rounded-2xl py-8 shadow ring-1 ring-purple-900">
          <h4 className="text-center">{category.name}</h4>
        </div>
      ))}
    </div>

    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mb-20">
      {newestPosts.map((post) => (
        <div className="bg-zinc-200 rounded-md shadow-xl">
          <img src={post.img} alt="" className="rounded-s-md rounded-e-md"/>
          <h3 className="my-4 px-5">{post.title}</h3>
          <p className="px-5 mb-6">{post.short}</p>
        </div>
      ))}
    </div>
  </>)
}
