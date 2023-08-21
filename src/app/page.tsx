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
    <div className='border-2 border-black h-96 mt-10 grid grid-cols-3 w-[85%] mx-auto'>
      <div>
        <h1 className='font-black text-6xl max-w-[75%] mx-auto font-ubuntu pl-10'>
          Elegance is good taste, plus a dash of daring.</h1>
        <button className='bg-black text-white rounded-3xl px-6 py-3 mx-auto block mt-10'>Shop Now</button>
        <button><ChevronDown/></button>
      </div>
      <h1>Gand</h1>
      <h1>Mrao</h1>
    </div>
    </main>
  )
}
