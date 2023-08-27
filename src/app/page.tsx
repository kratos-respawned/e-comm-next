import Image from "next/image";
import { ChevronDown, ShoppingBag } from "lucide-react";
import New from "../components/New";
import Collection from "../components/Collection";
import NavBar from "@/components/nav-bar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="grid place-items-center">
        <div className="grid place-items-center pt-7 ">
          <Image
            src={"/hero.webp"}
            width={1920}
            height={1080}
            alt="hero"
            className=""
          />
        </div>
        <section className=" relative text-center  text-7xl font-black text-gray-700 py-16  tracking-widest">
          <Link href={"/"}>Grab the latest collection.</Link>
          <Image
            src={"/group.svg"}
            width={100}
            height={100}
            alt="markerstroke"
            className="absolute top-2 -right-20 -z-10 object-contain  "
          />
          
        </section>
        <div className="grid grid-cols-4 gap-10 ">
          <Image
            src={"/model1.webp"}
            width={500}
            height={500}
            alt="model1"
            className="group-hover:rounded-full duration-500"
          />

          <Image
            src={"/model2.webp"}
            width={500}
            height={500}
            alt="model2"
            className=""
          />
          <Image
            src={"/model3.webp"}
            width={500}
            height={500}
            alt="model3"
            className=""
          />
          <Image
            src={"/model4.webp"}
            width={500}
            height={500}
            alt="model4"
            className=""
          />
        </div>
      </main>
    </>
  );
}
