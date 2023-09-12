import React from 'react'
import Image from 'next/image'

const Card = (props:any) => {
  return (
    <div className='overflow-clip'>
    <div className='  relative w-fit '>
        <Image src="/girl3.webp" alt="gril3" width={300} height={400} className=' '  />
        <div className='flex flex-col gap-1 pt-4 bg-white  '>
            <p className='text-gray-500 text-xs font-bold uppercase'>{props.productCollection}</p>
            <h2 className='font-bold uppercase text-sm'>
                {props.productName}
            </h2>
            <p>Rs: {props.productPrice}.00/</p>
            <span className='px-1 bg-red-700 text-white w-fit text-xs'>
                -{props.productDiscount}%
            </span>

         
        </div>
    </div>
    </div>
  )
}

export default Card