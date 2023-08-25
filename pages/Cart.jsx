import { useEffect } from "react";
import { useState } from "react";
import CartItem from "../components/CartItem";
import OrderModal from "../components/OrderModal";
import useStore from "../lib/store";

export default function Cart() {
  const { pizzas } = useStore((state) => state.items);
  // const numOfItems = pizzas.filter((pizza) => pizza.size.filter(sz => sz.quantity > 0)).length;
  const [numOfItems, setNumOfItems] = useState(0);
  const [amount, setAmount] = useState(0);
  const [paymentMethode, setPaymentMethode] = useState(null);


  useEffect(() => {
    pizzas.map((pizza) => {
      pizza.size.map((sz) => {
        setNumOfItems((prev) => prev + (sz.quantity > 0 ? sz.quantity : 0));
        setAmount((prev) => prev + sz.quantity * sz.price);
      });
    });
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 h-[72vh] overflow-y-auto">
        {pizzas.length ? (
          pizzas.map((pizza, key) => {
            return (
              <CartItem
                pizza={pizza}
                key={key}
                count={pizzas.length}
                numOfItems={numOfItems}
                setNumOfItems={setNumOfItems}
                amount={amount}
                setAmount={setAmount}
              />
            );
          })
        ) : (
          <div className="w-full text-3xl font-semibold flex flex-row justify-center p-3">
            <p className="">Cart Empty</p>
          </div>
        )}
      </div>
      <div className="animated-background-wrap col-span-4 h-[400px] py-10 flex flex-col justify-center items-center shadow-xl overflow-hidden rounded-xl bg-transparent backdrop-blur-2xl">
        <p className="text-3xl font-bold my-2">Cart</p>
        <div>
          <div className="flex flex-row justify-between items-center w-60 my-4">
            <p className="text-xl font-semibold italic capitalize text-gray">
              Items
            </p>
            <p className="text-xl font-semibold text-gray">{numOfItems}</p>
          </div>
          <div className="flex flex-row justify-between items-center w-60 my-4">
            <p className="text-xl font-semibold italic capitalize text-gray">
              total
            </p>
            <p className="text-xl font-semibold text-gray">
              {amount.toFixed(3)}
              <span>$</span>
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button
            disabled={numOfItems ? false : true}
            onClick={() => {
              localStorage.setItem("totalAmount", amount)
              setPaymentMethode(1);
            }}
            className="rounded-full border-2 p-2 mx-1 my-2 text-red text-base font-medium cursor-pointer"
          >
            Pay On Delivery
          </button>
          <button
            disabled={numOfItems ? false : true}
            onClick={() => {
              setPaymentMethode(2);
            }}
            className="rounded-full border-red border-2 p-2 mx-1 my-2 bg-red text-white text-base font-medium cursor-pointer"
          >
            Pay Now
          </button>
        </div>
      </div>
      <OrderModal
        opened={paymentMethode === 1}
        setPaymentMethode={setPaymentMethode}
        paymentMethode={paymentMethode}
        amount={amount}
      />
    </div>
  );
}
