import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row w-full justify-between p-6 px-12 absolute z-10'>
        <div className='flex gap-32 text-white '>
            <p className='cursor-pointer'> SHOP</p>
            <p className='cursor-pointer'>COLLECTION</p>
           <p className='cursor-pointer'>ABOUT</p>
        </div>
        <div>
            <p className='text-white cursor-pointer'>SHOPPING CART 0</p>
        </div>
    </div>
  )
}

export default Navbar