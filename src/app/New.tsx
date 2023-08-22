import Image from 'next/image'
import {ShoppingBag} from "lucide-react";


function New() {
  return (
    <div>
    <div className="grid grid-cols-3 mt-36 w-[70%] mx-auto">
        <h1 className="col-span-1 text-7xl my-auto font-ubuntu">
            New In
        </h1>
        <div className="col-span-2 my-auto">
            <p className="text-gray-500 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt accusantium officia commodi! Vel corporis harum, praesentium corrupti dolor unde.</p>
            <ul className="flex justify-between text-xl font-black mt-10">
                <li>Hoodies</li>
                <li>Jeans & Shirts</li>
                <li>T-Shirts</li>
                <li className="mr-6">Jackets</li>
            </ul>
        </div>
    </div>
    <div className="grid grid-cols-3  w-[80%] mx-auto mt-20 mb-10">
      <div className='border-2 border-black w-[80%] bg-[#e6e6e6]'>
        <Image width={210} height={150} className=' mx-auto mix-blend-darken grayscale mt-10' src="/floral.png"/>
        <div className='flex justify-between mx-10 mb-6 mt-10'>
          <h1 className='text-lg text-gray-500 font-bold'>Floral Shirt</h1>
          <p className='text-lg text-gray-500'>$199</p>
        </div>
      </div>
      <div className='w-[80%] mx-auto bg-[#efefef] relative group '>
        <Image width={500} height={400} className='object-cover mx-auto opacity-100 transition-opacity group-hover:opacity-80 ease-in-out ' src="/cole.png"/>
        <button className="bottom-1/2 absolute translate-y-1/2 left-1/2 -translate-x-1/2 p-5 opacity-0 transition-opacity pointer-events-none  group-hover:pointer-events-auto group-hover:opacity-100 bg-gray-200  rounded-full ">
        <ShoppingBag className=''/>
        </button>
      </div>
      <div className='border-2 border-black w-[80%] ml-auto bg-[#e6e6e6] '>
        <Image width={220} height={150} className=' mx-auto mix-blend-darken grayscale  mt-10' src="/whiteleaf.png"/>
        <div className='flex justify-between mx-10 mb-6 mt-10'>
          <h1 className='text-lg text-gray-500 font-bold'>White Leaf Shirt</h1>
          <p className='text-lg text-gray-500'>$199</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default New