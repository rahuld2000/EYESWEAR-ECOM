import React from 'react'

function Featured() {
  return (
   <div className='w-full min-h-screen p-10 space-y-16'>
<div className='flex justify-between items-center mb-32'>
<p className='text-7xl font-bold'>FEATURED</p>
<p className='w-[800px]'>OUR EXQUISITE COLLECTION OF SUNGLASSES IS DESIGNED TO ELEVATE
YOUR STYLE WHILE SAFEGUARDING YOUR EYES FROM HARMFUL UV RAYS.</p>
</div>

<div className='flex justify-between items-center'>
    <p className='w-[800px]'>SUNGLASSES WITH UV PROTECTION HELP SHIELD YOUR EYES FROM HARMFUL ULTRAVIOLET
UV RAYS EMITTED BY THE SUN, PROTECTING YOUR EYES FROM POTENTIAL DAMAGE AND
REDUCING THE RISK OF EYE CONDITIONS SUCH AS CATARACTS AND MACULAR DEGENERATION.</p>
<p className='text-6xl font-bold'>UV PROTECTION</p>
</div>
<hr  className='border border-black'/>
<div className='flex justify-between items-center'>
    <p className='w-[800px]'>POLARIZED SUNGLASSES REDUCE GLARE FROM SURFACES LIKE WATER, SNOW, AND ROADS.
PROVIDING BETTER VISUAL CLARITY AND REDUCING EYE STRAIN. THEY ARE PARTICULARLY
USEFUL FOR OUTDOOR ACTIVITIES LIKE DRIVING, FISHING, AND SKIING.</p>
<p className='text-6xl font-bold'>POLARIZED LENSES</p>
</div>
<hr  className='border border-black'/>
<div className='flex justify-between items-center'>
    <p className='w-[800px]'>NOSE PADS THAT CAN BE ADJUSTED HELP ENSURE A PROPER FIT, ESPECIALLY FOR INDIVIDUALS
WITH DIFFERENT NOSE BRIDGE SHAPES.</p>
<p className='text-6xl font-bold'>ADJUSTABLE NOSE PADS</p>
</div>

   </div>
  )
}

export default Featured