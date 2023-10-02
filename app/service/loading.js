import React from 'react'

export default function loading() {
  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center">
    <div className="loader w-16 h-16 border-t-4 border-light-green-text border-solid rounded-full animate-spin"></div>
  </div>
  )
}
