"use client";
import Link from "next/link";
import setCookie from "./lib/setCookie"
export default function Home() {

  const handleSetCookie = () => {

    // const response = await fetch('http://localhost:3000/api/set-cookie')
    // if (!response.ok) {
    //   throw new Error(response.status)
    // }
    // return response.json()
    setCookie()
  }
  return (
    <>
      <div className="container mx-auto my-7">
        <div className="flex justify-center">
          <button onClick={handleSetCookie} className="bg-green-600 text-white px-7 py-3">
            {/* <Link href={'/api/cookies/set-cookie'}> */}
              Set cookie
            {/* </Link> */}
          </button>

        </div>
      </div >
    </>
  )
}
