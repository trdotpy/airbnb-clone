import React from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 py-5 bg-white shadow-md md:px-10">
      {/* Left: Logo */}
      <div className="relative flex items-center h-10 my-auto">
        <Image
          src="/airbnb_logo.svg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle: Search */}
      <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-lg">
        <input
          className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none"
          type="text"
          placeholder="Anywhere"
        />
        <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2" />
      </div>

      {/* Right: Account */}
      <div className="flex items-center justify-end space-x-4 text-gray-800">
        <p className="hidden md:inline">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Header
