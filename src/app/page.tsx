import Image from "next/image";
import Card from "@/components/card";
import Link from "next/link";
import Section from "@/components/section";

export default function Home() {  
  return (
    <>
      <main className="grid place-items-center mt-12">
        <div className="grid place-items-center   ">
          <Image
            src={"/hero.webp"}
            width={3200}
            height={3000}
            alt="hero"
            className=" object-cover w-full h-full shadow-2xl rounded-sm"
          />
        </div>
        <section className=" relative text-center  text-7xl font-black text-gray-700 my-16 tracking-wide">
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
        </div>
      </main>
      <Section />
      <div className="grid grid-cols-4 space-y-5">
        <Card
          productName="lore ipsum"
          productCollection="lorem ipsum lorem"
          productPrice="7800"
          productDiscount="33%"
        />
        <Card
          productName="lore ipsum"
          productCollection="lorem ipsum lorem"
          productPrice="7800"
          productDiscount="33%"
        />
        <Card
          productName="lore ipsum"
          productCollection="lorem ipsum lorem"
          productPrice="7800"
          productDiscount="33%"
        />
        <Card
          productName="lore ipsum"
          productCollection="lorem ipsum lorem"
          productPrice="7800"
          productDiscount="33%"
        />
        <Card
          productName="lore ipsum"
          productCollection="lorem ipsum lorem"
          productPrice="7800"
          productDiscount="33%"
        />
        <Card
          productName="lore ipsum"
          productCollection="lorem ipsum lorem"
          productPrice="7800"
          productDiscount="33%"
        />
        <Card
          productName="lore ipsum"
          productCollection="lorem ipsum lorem"
          productPrice="7800"
          productDiscount="33%"
        />
        <Card
          productName="lore ipsum"
          productCollection="lorem ipsum lorem"
          productPrice="7800"
          productDiscount="33%"
        />
        <Card
          productName="lore ipsum"
          productCollection="lorem ipsum lorem"
          productPrice="7800"
          productDiscount="33%"
        />
        <Card
          productName="lore ipsum"
          productCollection="lorem ipsum lorem"
          productPrice="7800"
          productDiscount="33%"
        />
      </div>
    </>
  );
}
