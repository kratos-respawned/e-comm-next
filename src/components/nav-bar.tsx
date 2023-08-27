import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between  pt-8 border-black">
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
