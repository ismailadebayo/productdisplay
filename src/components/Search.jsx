import React from 'react'

const Search = ({onChange}) => {
  return (
    <div>
      <input
       type="search"
       placeholder='Search Product'
       onChange={onChange}
       />
    </div>
  )
}

export default Search
