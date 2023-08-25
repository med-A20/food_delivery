import Image from "next/image";
import { urlFor } from "../lib/client";
import useStore from "../lib/store";
import toast, { Toaster, toaster } from "react-hot-toast";
import { useState } from "react";

export default function CartItem({
  pizza,
  numOfItems,
  setNumOfItems,
  amount,
  setAmount,
}) {
  const dlt = useStore((state) => state.delete);
  const pz = pizza.pizza;
  const size = ["small", "meduim", "large"];
  const src = urlFor(pz.image).url();

  // get details
  let st = "";
  pizza.size.map((item, key) => {
    st += item.quantity > 0 ? `${item.quantity} of ${size[key]}, ` : "";
  });

  // calc somme
  let total = 0;
  pizza.size.map((item) => {
    total += item.quantity * item.price;
  });
  // calc count
  let count = 0;
  pizza.size.map((item) => {
    count += item.quantity;
  });
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className=" flex flex-row justify-between items-center bg-rose-200 py-2 m-4 rounded-md shadow-md">
          <div className="w-full flex flex-row justify-center items-center">
            <Image
              loader={() => src}
              src={src}
              width={"100px"}
              height={"100px"}
              objectFit="cover"
              className="rounded-full"
              alt="test"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h4 className="text-xl font-medium text-grayT">{pz.title}</h4>
            <p className="text-[10px] text-gray italic">{`ref.${pz._rev}`}</p>
          </div>
          <div className=" w-full flex flex-row justify-center items-center">
            <p className="text-xs italic font-semibold text-grayT text-center">
              {st.slice(0, st.length - 2)}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center w-full">
            <p className="text-xl font-medium text-grayT">{`${count} pizza`}</p>
          </div>
          <div className="w-full flex flex-row justify-center items-center">
            <p className="text-2xl font-medium text-grayT">
              {`${total.toFixed(3)}`}
              <span className="text-red">$</span>
            </p>
          </div>
          <div className="w-full flex flex-row justify-center items-center p-2 text-center">
            <p
              onClick={() => {
                dlt(pizza);
                setAmount(amount - total);
                setNumOfItems(numOfItems - count);
                toast.error("Item removed");
              }}
              className="text-2xl font-medium text-grayT cursor-pointer"
            >
              X
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
