import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import { client } from "../../lib/client";
export default function OrderPage() {
  //   const route = useRouter();
  //   const id = route.query.orderId;

  const style = {
    div: "flex flex-row justify-between items-center w-full",
    p1: "text-xl text-grayT font-medium capitalize",
    p2: "text-xl text-grayT font-semibold text-right",
  };

  const status = [
    {
      step: "payment",
      status: 1,
      image: "/assets/payment.png",
    },
    {
      step: "cooking",
      status: 2,
      image: "/assets/cooking.svg",
    },
    {
      step: "on way",
      status: 3,
      image: "/assets/delivery.svg",
    },
    {
      step: "Delivered",
      status: 4,
      image: "/assets/Delivered.svg",
    },
  ];
  // const [trigger, setTrigger] = useState(0);
  // console.log({ data });
  // if (data[0]?.status > 3) {
  //   localStorage.clear();
  //   route.push("/");
  // }

  const route = useRouter();
  const param = route.query.orderId;

  const fetcher = async () => {
    const res = await client.fetch(
      `*[_type == 'order' && key == '${
        typeof window != "undefined" && localStorage.getItem("orderId")
      }']`
    );
    return res;
  };
  const { data, error } = useSWR("order", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (data.every(e => e.status > 3)) {
    const clear = async () => {
      await client
        .delete({
          query: `*[_type == "order" && key == '${
            typeof window != "undefined" && localStorage.getItem("orderId")
          }']`,
        })
        .then(() => console.log("done"))
        .catch(() => console.erro("error"));
      route.push("/");
      localStorage.clear();
    };
    clear();
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {data?.map((data) => {
        return (
          <>
            <div className="mt-28">
              <h3 className="text-3xl font-bold">Order In Process</h3>
            </div>
            <div className="flex flex-col justify-center items-center w-8/12 m-auto my-5 gap-4">
              <div className={style.div}>
                <p className={style.p1}>order ID</p>
                <p className={style.p2}>{data?._id}</p>
              </div>
              <div className={style.div}>
                <p className={style.p1}>customer name</p>
                <p className={style.p2}>{data?.name}</p>
              </div>
              <div className={style.div}>
                <p className={style.p1}>phone</p>
                <p className={style.p2}>{data?.phone}</p>
              </div>
              <div className={style.div}>
                <p className={style.p1}>Method</p>
                <p className={style.p2}>
                  {data?.methode == 1 ? "Cash On Delivery" : ""}
                </p>
              </div>
              <div className={style.div}>
                <p className={style.p1}>total</p>
                <p className={style.p2}>{data?.total} $</p>
              </div>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-center items-center content-center gap-6 mt-5 mb-10">
              {status.map((st, key) => {
                return (
                  <div
                    className={` w-[250px] flex flex-col justify-center items-center content-center`}
                    key={key}
                  >
                    <div>
                      <Image
                        className={
                          data?.status === st.status ? "animate-pulse " : ""
                        }
                        src={st.image}
                        width={"100px"}
                        height={"100px"}
                        alt="test"
                        unoptimized
                      />
                    </div>
                    <p className={data?.status === st.status ? "text-red font-semibold " : "" + ` text-xl text-grayT capitalize`}>{st.step}</p>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const data = await client.fetch(
    `*[_type == 'order' && _id == '${params.orderId}']`
  );
  return {
    props: { data: data },
  };
}

// export async function getStaticPaths() {
//     const data = await client.fetch(`*[_type == 'order']{_id}`);
//     const paths = data.map((item) => {
//       return {
//         params: {
//           id: `${item._id}+${""}`,
//         },
//       };
//     });

//     return {
//       paths,
//       fallback: true,
//     };
//   }

//   export async function getStaticProps(context) {
//     const { params } = context;
//     const data = await client.fetch(
//       `*[_type == 'order' && _id ==  '${params.orderId}']`
//     );
//     return {
//       props: {
//         data: data,
//       },
//     };
//   }
