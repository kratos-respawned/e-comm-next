import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Categories = () => {
  return (
    <div> <section className=" relative text-center  text-7xl font-black text-gray-700 my-16 tracking-wide">
    <Link href={"/"}>Categories.</Link>
  </section>

  <div className="grid grid-cols-4 gap-10 mb-10">
    <Image
      src={"/model2.webp"}
      width={500}
      height={500}
      alt="model2"
      className="rounded-lg hover:shadow-2xl hover:scale-105 duration-500"
    />
    <Image
      src={"/model1.webp"}
      width={500}
      height={500}
      alt="model1"
      className="rounded-lg hover:shadow-2xl hover:scale-105 duration-500"
    />

    <Image
      src={"/menssweat.webp"}
      width={500}
      height={500}
      alt="model4"
      className="rounded-lg hover:shadow-2xl hover:scale-105 duration-500"
    />
    <Image
      src={"/model3.webp"}
      width={500}
      height={500}
      alt="model3"
      className="rounded-lg hover:shadow-2xl hover:scale-105 duration-500"
    />
  </div></div>
  )
}

export default Categories