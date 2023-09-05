import React from 'react'

function Footer() {
  return (
    <div className='w-full h-[750px] bg-[#111111] text-white p-10 flex flex-col justify-between'>
    <div className=' flex justify-between '>
<div>
  <p className='text-4xl w-[23rem]'>WE WOULD LOVE TO HEAR FROM YOU.</p>
  <div className='flex mt-5'> <input className='p-4 bg-[#212121] w-96' type="text" placeholder='Enter Your Email Address' />
  <button className='w-24 bg-[#E7FF56]'><i className="ri-arrow-up-line"></i></button></div>
 
</div>
<div className='flex flex-col w-96 gap-12 text-2xl'>
  <p>OFFICE</p>
  <p>ROBERT ROBERTSON, 1234 NW
BOBCAT LANE, ST. ROBERT, MO
65584-5678.</p>
<p>0283 234 128374</p>
</div>

    </div>
    <div>
    <p className='text-[400px] font-Antonio font-bold text-[#212121] relative -top-6 leading-[1.1] max-md:text-[10rem]'>CHICLOBE</p>
    </div>
  
    <div className='relative bottom-32 flex justify-between  p-14 bg-[#111111]'>
      <div className='flex gap-24'><p>SHOP</p>
      <p>COLLECTION</p>
      <p>ABOUT</p>
      </div>
      <p>ALL RIGHT RESEREVED2023 CHICOLOBE</p>

    </div>
    </div>
  )
}

export default Footer