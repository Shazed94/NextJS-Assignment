
export default async function setCookie() {

    const res = await fetch("http://localhost:3000/api/set-cookie")
    if (!res.ok) {
        throw new Error("Something went wrong!")
    }
    return res.json()
}