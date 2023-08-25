import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center">
      {/* left */}
      <div className="w-full lg:w-1/2 flex flex-col order-2  lg:order-1 lg:mt-[6rem] items-center lg:items-start">
        <div className="flex flex-nowrap justify-start items-center">
          <p className="text-red font-semibold text-xl capitalize">more than faster</p>
          <Image 
          src={"/assets/Cherry.png"} 
          width={"48px"} 
          height={"30px"}
          alt='test'
          />
        </div>
        <div className="my-10">
          <p className="text-5xl lg:text-7xl font-semibold capitalize text-center lg:text-left">
            be the fastest <br /> in delivering <br /> your <span className="text-red">pizza</span>
          </p>
          <p className="mt-7 text-center lg:text-left">
            <q className="italic text-grayT font-medium">
              Everybody wants to be famous, but nobody wants to do the work. I
              live by that. You grind hard so you can play hard. At the end of
              the day, you put all the work in, and eventually it’ll pay off. It
              could be in a year, it could be in 30 years. Eventually, your hard
              work will pay off.
            </q>
            <span className="font-semibold">
             —Kevin Hart
            </span>
          </p>
        </div>
        <button className="bg-red px-[40px] cursor-pointer py-2 rounded-full text-white capitalize hover:pl-[60px]">
            get started
        </button>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/2 relative lg:order-2 flex flex-col justify-center items-center">
        <div>
            <Image 
                className=""
                src={'/assets/HeroImage.png'}
                width={'600px'}
                height={'660px'}
                alt='test'
            />
            <div className="absolute flex flex-row justify-between items-center w-fit px-1 py-1 pr-2 shadow-2xl rounded-xl bg-slate-50 bottom-[30px] right-[20px] hover:scale-[1.15]">
                <div className="w-[100px] h-[66px] rounded-lg overflow-hidden">
                    <Image 
                    objectFit="cover"
                    src={'/assets/p1.jpg'}
                    width={'100px'}
                    height={'66px'}
                    alt='test'
                    />
                </div>
                <div className="pl-2 flex flex-col justify-between">
                    <p className="text-xl font-medium">Italian Pizza</p>
                    <p className="text-xl font-medium"><span className="text-red font-black">$</span> 7.49</p>
                </div>
            </div>
            <div className="absolute flex flex-rox justify-center items-center w-fit py-1 px-3 shadow-2xl rounded-full bg-slate-50 top-[110px] left-[30px] lg:left-[50px] hover:scale-[1.15]">
                <p className="cursor-pointer hover:underline text-red">
                    Contact Us
                </p>
                <Image 
                src={'/assets/Whatsapp-1.png'}
                width={'40px'}
                height={'40px'}
                alt='test'
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
