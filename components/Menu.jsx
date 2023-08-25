import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "../lib/client";

export default function Menu ({pizza})  {
  const data = [
    // {
    //   image: "/assets/pizza1.webp",
    //   title: "Pizza rustica ",
    //   price: 13,
    // },
    // {
    //   image: "/assets/pizza2.webp",
    //   title: "St. Louis-style pizza",
    //   price: 14.76,
    // },
    // {
    //   image: "/assets/pizza3.webp",
    //   title: "Prosciutto funghi pizza",
    //   price: 19.4,
    // },
    // {
    //   image: "/assets/pizza4.webp",
    //   title: "California Pizza",
    //   price: 10.0,
    // },
    // {
    //   image: "/assets/pizza5.webp",
    //   title: "New York-Style Pizza",
    //   price: 13.6,
    // },
    // {
    //   image: "/assets/pizza6.webp",
    //   title: "St. Louis Pizza",
    //   price: 13.98,
    // },
    // {
    //   image: "/assets/pizza7.webp",
    //   title: "Greek Pizza",
    //   price: 14.0,
    // },
    // {
    //   image: "/assets/pizza8.webp",
    //   title: "Chicago Pizza",
    //   price: 13.5,
    // },
    // {
    //   image: "/assets/pizza9.webp",
    //   title: "Detroit Pizza",
    //   price: 16.8,
    // },
    // {
    //   image: "/assets/pizza10.webp",
    //   title: "Neapolitan Pizza",
    //   price: 20.0,
    // },
    // {
    //   image: "/assets/pizza11.webp",
    //   title: "Detroit-style pizza",
    //   price: 9.76,
    // },
    // {
    //   image: "/assets/pizza12.jpg",
    //   title: "Apizza",
    //   price: 18.89,
    // },
    // {
    //   image: "/assets/pizza12.jpg",
    //   title: "Apizza",
    //   price: 18.89,
    // },
  ];
  return (
    <div id="menu" name = "menu" className="mt-[10rem] flex flex-col justify-center items-center lg:items-start">
      <div className="w-full">
        <h2 className="text-red uppercase text-2xl font-semibold text-center">our menu</h2>
        <p className="text-grayT text-5xl font-bold my-6 text-center">
          Menu That Always <br />
          Make You Fail In Love
        </p>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center items-center content-center">
        {pizza.map((item, key) => {
          const src = urlFor(item.image).url();
          return (
            <Link href={`/pizza/${item.slug.current}`} key={key}>
                <div className="my-6 mx-2  rounded-lg flex flex-col justify-center items-start">
                <div className="overflow-hidden">
                    <Image
                    className="rounded-2xl hover:scale-[1.1] hover:rotate-2"
                    loader={()=>src}
                    src={src}
                    objectFit="cover"
                    width={"350px"}
                    height={"250px"}
                    alt="test"
                    />
                </div>
                <p className="text-2xl font-bold text-grayT pl-1">{item.title}</p>
                <p className="text-2xl font-bold text-grayT pl-1">
                    <span className="text-red">$</span>
                    {item?.price[0]}
                </p>
                </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

