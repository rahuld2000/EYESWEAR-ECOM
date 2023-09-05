import React from 'react'
import Image from 'next/image'
import logo from '@/utils/support'
function Support() {
    return (
        <div className='p-8 pt-12 space-y-12 bg-gray-100'><div className='flex justify-between px-6'>
         <p className='text-6xl '>SUPPORT BY</p>
         <div className='w-[600px] space-y-6'><p className='text-sm '>2018-PRESENT</p>
         <p className='text-sm'>OUR LATEST INITIATIVE THAT BRINGS TOGETHER STYLE AND SOCIAL RESPONSIBILITY. WITH SUPPORT
BY. WE AIM TO CREATE A MEANINGFUL IMPACT ON SOCIETY BY SUPPORTING CAUSES THAT MATTER.</p></div>
        </div>
        <div className='grid-cols-3 grid grid-rows-2 '>
          {
           logo.map((item)=>
            (
              <div className='flex-col flex items-center mt-5'  key={item}>
              <div className=' w-[300px] h-[350px] bg-white rounded-md m-2 flex items-center justify-center'>
              <Image className='w-[200px] object-cover ' src={item}/>
               
                </div>
              </div>
            ))
          }
        </div>
        </div>
      )
}

export default Support