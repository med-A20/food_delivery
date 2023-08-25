import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import OrderHandler from "../lib/OrderHanler";
import toast, { Toaster } from "react-hot-toast";
import useStore from "../lib/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function OrderModal({
  opened,
  setPaymentMethode,
  paymentMethode,
  amount,
}) {
  const theme = useMantineTheme();
  const [formData, setFormData] = useState({});
  const route = useRouter();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const style = {
    input:
      "text-xl text-gray shadow-md my-3 px-3 py-2 rounded-md w-full outline-none placeholder:text-sm italic",
  };
  const { reset } = useStore((state) => state);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(typeof(amount));
    let totalAmount = Number(amount)
    let uniqueId = localStorage.getItem('orderId') ? localStorage.getItem('orderId') : `${amount}-${Date.now()}`;
    localStorage.setItem("orderId", uniqueId);
    const id = await OrderHandler({ ...formData, totalAmount, paymentMethode, uniqueId });
    toast.success("Order Placed!");
    reset();
    route.push(`/order/${uniqueId}`);
  };
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[9]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      centered
      onClose={() => {
        setPaymentMethode(null);
      }}
    >
      <form
        onSubmit={(e) => {
          document.getElementById("btn").disabled = true;
          handleSubmit(e);
        }}
        className="flex flex-col justify-center items-center"
      >
        <input
          onChange={(e) => {
            handleInput(e);
          }}
          className={style.input}
          type="text"
          name="name"
          id="name"
          placeholder="Your Name..."
          required
        />
        <input
          onChange={(e) => {
            handleInput(e);
          }}
          className={style.input}
          type="text"
          name="phone"
          id="phone"
          placeholder="Your Phone Number..."
          required
        />
        <textarea
          onChange={(e) => {
            handleInput(e);
          }}
          className="w-full resize-none h-32 px-3 py-2 outline-none rounded-md shadow-md text-gray  placeholder:text-sm italic"
          name="adresse"
          id="adresse"
          placeholder="Adresse..."
          required
        ></textarea>
        <p className="my-3 text-sm text-red font-light">
          {`You'll`} pay {amount ? parseFloat(amount).toFixed(3) : 0} $ On Delivery
        </p>
        <button
          id="btn"
          className="py-2 px-5 bg-green-500 rounded-full text-white text-xl font-medium"
          type="submit"
        >
          Place Order
        </button>
      </form>
      <Toaster />
    </Modal>
  );
}
