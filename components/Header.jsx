import React from "react";
import Image from "next/image";
import Link from "next/link";
import useStore from "../lib/store";
import { useEffect } from "react";
import { useState } from "react";
import { Avatar, Group, Indicator } from "@mantine/core";

const Header = () => {
  const state = useStore((state) => state);
  const len = state.items.pizzas.length;
  const [order, setOrder] = useState("XX")


  return (
    <div className="w-full flex justify-between items-center">
      {/* Logo */}
      <div>
        <Image src={"/assets/logo_1.png"} width={"70px"} height={"70px"} 
          alt='test'/>
      </div>
      {/* Menu */}
      <div className="w-3/6 lg:w-2/6">
        <ul className="flex flex-row justify-around items-center">
          <Link href="/#menu">
            <li className="text-base font-semibold lg:text-2xl lg:font-medium text-grayT cursor-pointer hover:text-red hover:translate-y-1">
              Menu
            </li>
          </Link>
          <Link href={`/`}>
            <li className="text-base font-semibold lg:text-2xl lg:font-medium text-grayT cursor-pointer hover:text-red hover:translate-y-1">
              Home
            </li>
          </Link>
          <Link href="/#contact">
            <li className="text-base font-semibold lg:text-2xl lg:font-medium text-grayT cursor-pointer hover:text-red hover:translate-y-1">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      {/* panier, order */}
      <div className="flex flex-row justify-center items-center gap-2">
        <Link href={len ? `/Cart` : ``}>
          <div className="relative">
            {len ? (
              <p className="absolute block px-1 bg-red top-[10px] right-[2px] rounded-full text-white text-sm z-50">
                {len}
              </p>
            ) : (
              ""
            )}
            <Image
              src={"/assets/panier.svg"}
              width={"50px"}
              height={"50px"}
              objectFit="cover"
              alt='test'
            />
          </div>
        </Link>
        {typeof window !== 'undefined' && localStorage.getItem("orderId") ? (
          <Link href={`/order/${typeof window !== 'undefined' && localStorage.getItem("orderId")}`}>
            <div className="relative">
              <p className="absolute block w-[15px] h-[15px] bg-red  right-[2px] rounded-full text-white text-sm z-50">
                {/* {len} */}
              </p>
              <Image
                src={"/assets/order.svg"}
                width={"40px"}
                height={"40px"}
                alt='test'
                objectFit="cover"
              />
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
