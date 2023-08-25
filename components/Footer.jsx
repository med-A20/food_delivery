import { Divider } from "@mantine/core";
import Image from "next/image";

export default function Footer() {
  return <div className="flex flex-row justify-center items-center relative">
    <span className="absolute block w-[100vw] h-[2px] h- bg-red top-0 left-0">
    </span>
    <div className="">
        <Image src={"/assets/logo_1.png"} width={"70px"} height={"70px"} 
          alt='test'/>
      </div>
  </div>
}
