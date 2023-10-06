'use client'
import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

const Card = () => {
  return (
    <div className="grid grid-cols-4 place-items-center gap-2 my-10">
      <CardBox
        productName="lore ipsum 1"
        productCollection="lorem ipsum lorem"
        productPrice="7800"
        productDiscount="33%"
      />
      <CardBox
        productName="lore ipsum"
        productCollection="lorem ipsum lorem"
        productPrice="7800"
        productDiscount="33%"
      />
      <CardBox
        productName="lore ipsum"
        productCollection="lorem ipsum lorem"
        productPrice="7800"
        productDiscount="33%"
      />
      <CardBox
        productName="lore ipsum"
        productCollection="lorem ipsum lorem"
        productPrice="7800"
        productDiscount="33%"
      />
      <CardBox
        productName="lore ipsum"
        productCollection="lorem ipsum lorem"
        productPrice="7800"
        productDiscount="33%"
      />
      <CardBox
        productName="lore ipsum"
        productCollection="lorem ipsum lorem"
        productPrice="7800"
        productDiscount="33%"
      />
      <CardBox
        productName="lore ipsum"
        productCollection="lorem ipsum lorem"
        productPrice="7800"
        productDiscount="33%"
      />
      <CardBox
        productName="lore ipsum"
        productCollection="lorem ipsum lorem"
        productPrice="7800"
        productDiscount="33%"
      />
      <CardBox
        productName="lore ipsum"
        productCollection="lorem ipsum lorem"
        productPrice="7800"
        productDiscount="33%"
      />
      <CardBox
        productName="lore ipsum"
        productCollection="lorem ipsum lorem"
        productPrice="7800"
        productDiscount="33%"
      />
    </div>
  );
};

export default Card;

const CardBox = (props: any) => {
  return (
    <div className="overflow-clip p-3  bg-white rounded">
      <div className="  relative ">
        <span className="px-1 bg-red-700 text-white absolute top-3 left-3 w-fit text-xs">
          -{props.productDiscount}%
        </span>
        <span className="absolute top-4 right-3 p-1 bg-red-500/20 rounded-full ">
          <Heart className="  text-xs text-red-500" />
        </span>
        <Image
          src="/girl3.webp"
          alt="gril3"
          width={300}
          height={400}
          className="w-[250px] h-[300px] object-cover bg-center"
        />
        <div className="flex flex-col gap-1 pt-4 bg-white  ">
          <p className="text-gray-500 text-xs font-bold uppercase">
            {props.productCollection}
          </p>
          <h2 className="font-bold uppercase text-sm">{props.productName}</h2>
          <p>Rs: {props.productPrice}.00/</p>
        </div>
        <div className="flex justify-center items-center w-full gap-2 py-2">
        <button className="py-3 px-5 text-[#00b495] border border-[#00b495] rounded ">Buy Now</button>
        <button onClick={()=>{
          console.log(props.productName); 
        }} className="bg-[#00b495]  py-3 rounded w-1/2 text-white">Add To Cart   </button>
        </div>
      </div>
    </div>
  );
};
