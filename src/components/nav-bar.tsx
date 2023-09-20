import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (

    // create 
    <div className="bg-[#fffdf5] w-full text-[#00b495] absolute left-0 top-0">
      <div className="bg-[#00b495] text-[#fffdf5] text-center py-1 cursor-pointer">
        Free shiping + 20% discount on your first order
      </div>
      <nav className="flex justify-between bg-transparent  py-5 border-black">
        <ul className="flex gap-10 pl-10">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Shop">Shop</Link>
          <Link href="/Contact">Contact</Link>
        </ul>
        <button className="pr-10 flex gap-3">
          <ShoppingBag className="w-6 h-6" />
          <p>Add to Cart</p>
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
