import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Search({placeholder, search, onSearch}) {
    function handleSearch(e) {
        onSearch(e.target.value)
      }
  return (
    <div className=" tw-w-72 tw-relative">
    <input
      type="text"
      className=" tw-bg-accent-smoke tw-outline-none tw-w-full tw-px-4 tw-py-2 tw-rounded-lg"
      placeholder={placeholder}
      value={search}
      onChange={handleSearch}
    />
    <MagnifyingGlassIcon className=" tw-h-5 tw-w-5 tw-absolute tw-text-accent-gray tw-bottom-1/4 tw-right-4 " />
  </div>
  )
}

export default Search