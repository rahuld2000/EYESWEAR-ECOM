import collection from '@/utils/collection'
import React from 'react'
import Image from 'next/image'

function Collection() {
  return (
    <div className='p-8 pt-12 space-y-12 bg-gray-100'><div className='flex justify-between px-6'>
     <p className='text-6xl '>NEW COLLECTION</p>
     <div className='w-[600px] space-y-6'><p className='text-sm '>SPECIAL EDITION</p>
     <p className='text-sm'>WE ARE THRILLED TO PRESENT OUR NEW SUNGLASSES, METICULOUSLY CRAFTED
TO ELEVATE YOUR STYLE AND SET NEW TRENDS IN THE FASHION WORLD.</p></div>
    </div>
    <div className='flex '>
      {
        collection.map((item)=>
        (
          <div className='m-4' key={item.id}>
          
            <Image alt='error' className='w-[600px] object-cover h-[600px]  cursor-pointer' src={item.IMAGE}/>
         
            <p className='text-white relative bottom-12 left-7 text-lg font-semibold cursor-pointer' >{item.title}</p>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Collection