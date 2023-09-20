import React from 'react'
import Image from 'next/image'

const Section = () => {
  return (
    <div className='grid grid-cols-2 w-full gap-5 place-items-center '>
        <Image src={"/sidel.webp"} alt={"Sidel"} width={700} height={500} className=' object-contain' />
        <Image src={"/sider.webp"} alt={"Sidel"} width={700} height={500} className=' object-contain' />
    </div>
  )
}

export default Section