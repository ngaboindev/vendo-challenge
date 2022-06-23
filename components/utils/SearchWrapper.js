import Image from 'next/image'
import React from 'react'

const SearchWrapper = () => {
  return (
    <form>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
        <input
          type="search"
          id="search"
          className="block p-2.5 pl-10  w-full text-sm bg-white font-bold text-gray-800 outline-none"
          placeholder="Search"
        />
        <div className="absolute right-4 bottom-1.5">
          <Image width={16} height={16} src="/icons/search.svg" />
        </div>
      </div>
    </form>
  )
}

export default SearchWrapper
