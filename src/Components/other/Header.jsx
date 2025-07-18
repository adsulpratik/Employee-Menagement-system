import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex justify-between items-end' >
        <h1 className='text-2xl font-medium ' >Hello <br /><span className='text-3xl font-semibold ' >{data.name} 👋 </span>   </h1>
        <button className='bg-red-500 text-white px-5 py-2 rounded text-lg font-medium ' >Log Out</button>
    </div>
  )
}

export default Header