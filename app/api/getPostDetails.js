

export default async function getPostDetails(id) {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`)

    if (!res.ok) {
        throw new Error("Something went wrong!")
    }
    return res.json()
}
