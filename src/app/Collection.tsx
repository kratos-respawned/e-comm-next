import React from 'react'
import Image from 'next/image'

function Collection() {
  return (
    <div>
    <div className="mt-36 w-[50%] ml-60">
        <h1 className="text-7xl my-auto font-ubuntu">
            Featured Colletions
        </h1>
        <p className='mt-10 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, nihil iste voluptates a ipsa harum totam? Tenetur assumenda porro beatae aliquid voluptatum! Laboriosam fuga, rem vitae, deserunt porro id, voluptate nesciunt blanditiis dolore repellendus nemo?</p>
    </div>

    <div className='w-[70%] mx-auto mt-16 grid grid-cols-2 mb-10'>
    <div>
      <Image width={400} height={400} className='= border-b-2 border-black' src="/heroimg2.png" alt="" />
    </div>
    <div className='my-auto'>
        <Image width={400} height={300} className='border-black border-2' src="/heroimg.png" alt="" />
      </div>
    </div>
    </div>




  )
}

export default Collection