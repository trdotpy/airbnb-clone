import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/banner.webp" layout="fill" objectFit="cover" />
      <div className="absolute w-full text-center text-black top-1/2">
        <p className="text-sm font-bold text-gray-700 sm:text-lg">
          Belong anywhere.
        </p>
        <button className="px-5 py-3 my-3 font-bold text-gray-700 transition duration-150 bg-white rounded-full shadow-md hover:shadow-xl active:scale-90">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default Banner
