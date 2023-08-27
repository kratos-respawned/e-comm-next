import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className='overflow-clip'>
    <div className='group  relative w-fit '>
        <Image src="/girl3.webp" alt="gril3" width={300} height={400} className=' group-hover:-translate-y-5 duration-500 '  />
        <div className='flex flex-col gap-1 pt-4 bg-white  '>
            <p className='text-gray-500 text-xs font-bold uppercase'>Latest collection Top</p>
            <h2 className='font-bold uppercase text-sm'>
                Spring green bodycon dress
            </h2>
            <p>Rs:9000.00/</p>
            <span className='px-1 bg-red-700 text-white w-fit text-xs'>
                -33%
            </span>

            <div className='hidden border border-gray-800 px-2 py-1 w-fit left-1  group-hover:block duration-500'>Select options</div>
        </div>
    </div>
    </div>
  )
}

export default Card