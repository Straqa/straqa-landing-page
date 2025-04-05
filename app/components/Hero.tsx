import Button from "@/components/general/Button";
import Header from "@/components/general/Header";
import Image from "next/image";
import { useState } from "react";
import useTimeout from "../hooks/useTimeout";
import Modal from "@/components/general/Modal";

export default function Hero({ openModal }: { openModal: () => void }) {
 

  return (
    <div className="w-full bg-[#F7F9FC]">
      <Header />
      <div className="text-center h-full px-[20px] py-[50px]">
        <h1
          className="text-4xl md:text-6xl font-semibold text-[#222D39] max-w-[1000px] mx-auto"
          data-aos="fade-up"
        >
          AI-Powered Solutions to Grow, Manage, and Scale Your Business
        </h1>
        <p
          className="text-[#8492A7] text-lg md:text-xl font-medium mt-5 md:mt-10"
          data-aos="fade-up"
        >
          Everything you need to take your business online, boost sales, and
          manage operations—all in one platform.
        </p>
        <div
          className="mx-auto mt-5 md:mt-10 w-fit"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <button
              onClick={openModal}
              className="h-[55px] w-fit px-7 bg-[#020C14] rounded-md text-base md:text-lg text-white font-medium flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
            >
              <p>Secure Your Spot</p>
            </button>
        </div>
        <div className="relative">
          <Image
            src="/images/Hero.png"
            alt="straqa-dashboard"
            className="w-full md:max-w-[900px] mx-auto mt-10 relative z-10"
            data-aos="fade-up"
            data-aos-delay="200"
            width={5000}
            height={100}
          />
          <Image
            src="/images/background.svg"
            alt="straqa-dashboard"
            className="w-full mx-auto top-0 md:max-w-[950px] absolute lg:top-20 lg:left-[2rem] xl:left-[18rem] z-0"
            data-aos="fade-up"
            data-aos-delay="200"
            width={1000}
            height={1000}
          />
        </div>
      </div>
   
    </div>
  );
}
