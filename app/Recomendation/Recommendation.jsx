import React from 'react'
import Image from 'next/image'
import recom from '@/utils/recommendation'

function Recommendation() {
    return (
        <div className='p-8 pt-12 space-y-12 bg-gray-100'><div className='flex justify-between px-6'>
         <p className='text-6xl '>RECOMMENDATION</p>
         <div className='w-[600px] space-y-6'><p className='text-sm '>2023</p>
         <p className='text-sm'>QUALITY, COMFORT, AND INNOVATION, CHICKLOB SUNGLASSES ARE THE ULTIMATE
CHOICE FOR THOSE WHO SEEK TO MAKE A BOLD STATEMENT UNDER THE SUN.</p></div>
        </div>
        <div className='grid-cols-3 grid grid-rows-2 '>
          {
           recom.map((item)=>
            (
              <div className='flex-col flex items-center'  key={item.id}>
              <div>
                <Image alt='error' className='w-[450px] object-cover h-[650px]   cursor-pointer' src={item.IMAGE}/>
             
                <p className='text-white relative bottom-12 left-5 text-lg font-semibold cursor-pointer' >{item.title}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className='w-full'>
            <p className='text-center underline cursor-pointer'>See More</p>
        </div>
        </div>
      )
}

export default Recommendation