import React from 'react'

const Contact = () => {
  return (
    <div>
      <div class="relative overflow-hidden">

        <div class="hidden md:block md:absolute md:top-0 md:right-1/2 md:left-0 h-full ">
          <img src="/contact-form-bg.jpg" alt="" className='h-full w-full object-cover'/>
        </div>

        <div class="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-28 md:px-8">
          <div class="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12 ml-auto">

            <h1 class="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight mb-10">
              Connect with me <span class="text-blue-600 ">anytime</span>
            </h1>

            <form>
              <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="your name" required />
              </div>
              <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="your email" required />
              </div>
              <div class="mb-6">
                <label for="website" class="block mb-2 text-sm font-medium text-gray-900 ">Your website</label>
                <input type="text" id="website" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
              </div>
              <div class="mb-6">
                <label for="website" class="block mb-2 text-sm font-medium text-gray-900 ">Message</label>
                <textarea rows={3} type="text" id="website" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
              </div>

              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact