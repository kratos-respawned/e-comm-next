import Image from 'next/image'
import {ChevronDown, ShoppingBag} from "lucide-react"

export default function Home() {
  return (
    <main className="font-bold">
    <nav className='flex justify-between mx-20 pt-8 border-b-[0.01px] pb-8 border-black'>
      <ul className='flex gap-10 pl-10'>
        <li>Home</li>
        <li>About Us</li>
        <li>Shop</li>
        <li>Blog</li>
      </ul>
    <button className='pr-10 flex gap-3'>
      <ShoppingBag className='w-6 h-6'/>
      <p>Add to Cart</p>
    </button>
    </nav>
    <div className='border-b-2 border-black mt-10 grid grid-cols-3 w-[85%] mx-auto pt-10 pb-16 mb-10 relative'>
      <div>
        <h1 className='font-black text-6xl max-w-[75%] mx-auto font-ubuntu'>
          Elegance is good taste, plus a dash of daring.</h1>
        <button className='bg-black text-white rounded-3xl px-6 py-3 ml-12 block mt-10'>Shop Now</button>
        <button className='pl-24 mt-20 animate-bounce'><ChevronDown className='w-10 h-10'/></button>
      </div>
      <div >
        <Image width={400} height={300} className='border-black border-2' src="/heroimg.png" alt="" />
        <p className='max-w-[80%] mt-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum, unde enim veniam officiis neque</p>
      </div>
      <div>
      <Image width={400} height={400} className='border-black border-l-2 border-r-2 border-b-2' src="/heroimg2.png" alt="" />
      </div>
      <div className='flex gap-10 bg-[#e9e9e9] absolute bottom-0 translate-y-1/2 left-[50%] -translate-x-1/2 px-10'>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>X</li>
      </div>
    </div>
    </main>
  )
}
