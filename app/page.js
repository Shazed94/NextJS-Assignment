"use client";
import Link from "next/link";
import setCookie from "./lib/setCookie"
export default function Home() {

  const handleSetCookie = async () => {
    console.log("hi")
    const response = await fetch('http://localhost:3000/api/cookies/set-cookie')
    if (!response.ok) {
      throw new Error(response.status)
    }
    return response.json()
    // setCookie()
  }
  return (
    <>
      <div className="container mx-auto my-7">
        <div className="flex justify-center">
          <button onClick={handleSetCookie} className="bg-green-600 text-white px-7 py-3">
            Set cookie
          </button>

        </div>
      </div >
    </>
  )
}
