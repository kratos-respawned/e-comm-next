import Image from "next/image";

import Section from "@/components/section";
import Categories from "@/components/categoreis";
import Card from "@/components/card";

export default function Home() {
  return (
    <>
      <main className="grid place-items-center  h-screen relative">
        <Image
          src={"/Home.webp"}
          width={3200}
          height={3000}
          alt="hero"
          className=" object-cover absolute top-0 left-0 -z-10 "
        />
        <div className="text-center space-y-4">
          <h2 className="text-7xl font-black font-mono text-white">Summmer loving!</h2>
          <button className="rounded-full px-7 py-2 bg-[#00b495]">
            shop now.
          </button>
        </div>
      </main>
      <div className="max-w-[1600px] mx-auto">
        <Categories />
        <Section />
        <Card />
      </div>
    </>
  );
}
