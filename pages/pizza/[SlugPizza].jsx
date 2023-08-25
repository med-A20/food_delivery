import React from "react";
import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import { useState } from "react";
import useStore from "../../lib/store";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const SlugPizza = ({ data }) => {
  const state = useStore((state) => state);
  const [selected, setSelected] = useState(1);
  const [pizza, setPizza] = useState({
    id: Date.now(),
    pizza: data[0],
    size: [
      {
        quantity: 0,
        price: data[0].price[0],
      },
      {
        quantity: 1,
        price: data[0].price[1],
      },
      {
        quantity: 0,
        price: data[0].price[2],
      },
    ],
  });
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const addToCart = () => {
    state.addItem(pizza);
    console.log({ pizza });
    setPizza({
      id: Date.now(),
      pizza: data[0],
      size: [
        {
          quantity: 0,
          price: data[0].price[0],
        },
        {
          quantity: 1,
          price: data[0].price[1],
        },
        {
          quantity: 0,
          price: data[0].price[2],
        },
      ],
    });
    toast.success("Added To Cart Successufully !");
  };
  // --------------------
  // const router = useRouter();
  // console.log({ router });
  // const slug = router.query.SlugPizza;
  // --------------------
  const src = urlFor(data[0].image).url();
  return (
    <div className="w-full flex flex-row justify-center mt-[5rem] gap-4">
      {/* image left side */}
      <div className="w-1/2 overflow-hidden relative flex flex-col justify-center items-center rounded-md">
        <Image
          className="rounded-xl"
          loader={() => src}
          src={src}
          width={"478px"}
          height={"320px"}
          alt="test"
        />
      </div>
      {/* details right side */}
      <div className="w-1/2 flex flex-col justify-evenly items-start">
        <h3 className="text-5xl font-bold capitalize">{data[0].title}</h3>
        <p className="capitalize text-base font-light">
          the best {data[0].title} to fill your tummy
        </p>
        <p className="text-2xl font-bold">
          <span className="text-red">$</span> {data[0].price[selected]}
        </p>
        <div className="flex flex-row w-full items-center">
          <p className="basis-[25%] text-2xl font-medium capitalize">size</p>
          <div className="basis-[75%]">
            {["small", "medium", "large"].map((item, key) => {
              let ss =
                selected == key
                  ? ` bg-red text-white`
                  : ` bg-transparent text-red`;
              return (
                <button
                  onClick={() => {
                    setSelected(`${key}`);
                  }}
                  className={` py-1 px-3 border-red rounded-full border-2 mx-2 +${ss}`}
                  key={key}
                >
                  {" "}
                  {item}{" "}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row w-full items-center">
          <p className="basis-[25%] text-2xl font-medium capitalize">
            Quantity
          </p>
          <div className="basis-[75%] flex justify-start items-center gap-2">
            <span
              onClick={() => {
                if (pizza.size[selected].quantity >= 1) {
                  const newSize = pizza.size[selected];
                  newSize.quantity -= 1;
                  setPizza({ newSize, ...pizza });
                }
              }}
              className="w-[15px] h-[15px] block border-b-red border-l-red border-l-[5px] border-b-[5px] rotate-[45deg] cursor-pointer"
            ></span>
            <p className="text-3xl font-bold">
              {pizza.size[selected].quantity}
            </p>
            <span
              onClick={() => {
                const newSize = pizza.size[selected];
                newSize.quantity += 1;
                setPizza({ newSize, ...pizza });
              }}
              className="w-[15px] h-[15px] block border-b-red border-l-red border-l-[5px] border-b-[5px] rotate-[225deg] cursor-pointer"
            ></span>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart();
          }}
          className="capitalize text-white bg-red py-1 px-[20px] border-red rounded-full border-2"
        >
          add to cart
        </button>
        <Toaster position="top-center" />
      </div>
    </div>
  );
};

export default SlugPizza;

export async function getStaticPaths() {
  const data = await client.fetch(`*[_type == 'pizza']{slug}`);

  const paths = data.map((item) => {
    return {
      params: {
        SlugPizza: `${item.slug.current}`,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const data = await client.fetch(
    `*[_type == 'pizza' && slug.current ==  '${params.SlugPizza}']`
  );
  return {
    props: {
      data: data,
    },
  };
}
