import Image from 'next/image'
import {ChevronDown} from "lucide-react"

export default function Home() {
  return (
    <main className="bg-[#eae2e2e8] h-screen font-bold">
    <nav className='flex justify-between mx-20 pt-8 border-b-2 pb-8 border-black'>
      <ul className='flex gap-10 pl-10'>
        <li>Home</li>
        <li>About Us</li>
        <li>Shop</li>
        <li>Blog</li>
      </ul>
    <p className='pr-10'>Add to Cart</p>
    </nav>
    <div className='border-2 border-black mt-10 grid grid-cols-3 w-[85%] mx-auto py-10 '>
      <div>
        <h1 className='font-black text-6xl max-w-[75%] mx-auto font-ubuntu'>
          Elegance is good taste, plus a dash of daring.</h1>
        <button className='bg-black text-white rounded-3xl px-6 py-3 ml-12 block mt-10'>Shop Now</button>
        <button className='pl-12 mt-16 animate-bounce'><ChevronDown className='w-10 h-10'/></button>
      </div>
      <div >
        <Image width={400} height={400} className='border-black border-2' src="/heroimg.png" alt="" />
        <p className='max-w-[80%] mt-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum, unde enim veniam officiis neque</p>
      </div>
      <div>
      <Image width={400} height={400} className='border-black border-l-2 border-r-2 border-b-2' src="/heroimg2.png" alt="" />
      </div>
    </div>
    </main>
  )
}
