
export default async function getNewestPost() {
    const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest")
    if (!res.ok) {
        throw new Error("Something went wrong!")
    }
    return res.json()
}
