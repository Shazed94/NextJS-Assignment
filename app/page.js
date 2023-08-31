"use client";

import { toast, ToastContainer } from "react-toastify";

export default function Home() {

  const handleSetCookie = async () => {
    const res = await fetch("http://localhost:3000/api/cookies/set-cookie")
    if (!res.ok) {
      throw new Error("Something went wrong!")
    }
    toast.success('Cookie added successfully ', {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: "true",
      autoClose:2500
    });
    return res.json()
  }
  return (
    <>
      <div className="container mx-auto my-7">
        <div className="flex justify-center">
          <ToastContainer />

          <button onClick={handleSetCookie} className="bg-green-600 text-white px-7 py-3">
            Set cookie
          </button>
        </div>
      </div >
    </>
  )
}
