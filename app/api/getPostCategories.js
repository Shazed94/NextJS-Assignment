
export default async function getPostCategories() {
    const res = await fetch("https://basic-blog.teamrabbil.com/api/post-categories")

    if (!res.ok) {
        throw new Error("Something went wrong!")
    }
    return res.json()
}
