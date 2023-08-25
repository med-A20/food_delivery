import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact"
      name="contact"
      className="relative w-full flex flex-col lg:flex-row justify-center items-center"
    >
      {/* social Link */}
      <div className="absolute left-0 bottom-11 flex flex-col justify-center items-center">
        <Link href="https://www.facebook.com">
          <Image
            src={"/assets/Facebook-1.png"}
            width={"50"}
            height={"50"}
            alt="test"
          />
        </Link>
        <Link href="https://www.instagram.com">
          <Image
            src={"/assets/Instagram-1.png"}
            width={"50"}
            height={"50"}
            alt="test"
          />
        </Link>
        <Link href="https://www.linkedin.com">
          <Image
            src={"/assets/LinkedIn-1.png"}
            width={"50"}
            height={"50"}
            alt="test"
          />
        </Link>
        <Link href="https://www.whatsapp.com">
          <Image
            src={"/assets/Whatsapp-1.png"}
            width={"50"}
            height={"50"}
            alt="test"
          />
        </Link>
      </div>
      {/* Contact */}
      <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center items-center">
        <p className="text-4xl text-grayT font-medium mb-2">Contact Us</p>
        <input
          className="bg-gray2 shadow-lg p-2 px-4 w-4/6 lg:w-1/2 outline-none rounded-lg my-2 text-grayT italic font-light "
          type={"text"}
          placeholder="Name"
        />
        <input
          className="bg-gray2 shadow-lg p-2 px-4 w-4/6 lg:w-1/2 outline-none rounded-lg my-2 text-grayT italic font-light "
          type={"email"}
          placeholder="Email"
        />
        <textarea
          placeholder="message"
          className="backdrop-blur-xl w-4/6 lg:w-1/2 my-2 p-2 px-4 h-[150px] bg-gray2 text-grayT italic font-light  shadow-lg resize-none outline-none"
        ></textarea>
        <button className="m-4 bg-red py-2 px-8 rounded-full text-white text-xl cursor-pointer outline-none">
          Submit
        </button>
      </div>
      {/* Image */}
      <div className="w-5/6 lg:w-1/2 order-1 lg:order-2">
        <Image
          src={"/assets/bg_2.svg"}
          width={"500px"}
          height={"500px"}
          alt="test"
        />
      </div>
    </div>
  );
};

export default Contact;
