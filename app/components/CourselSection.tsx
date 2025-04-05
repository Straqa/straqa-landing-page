"use client"

import { coursel } from "@/constants/coursel";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function CourselSection(){
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 4);
        }, 5000);

        return () => clearInterval(interval);
      }, []);



    return(
        <div className="w-full h-[450px] overflow-hidden bg-black relative">
            <AnimatePresence>
                {coursel[activeIndex] && (
                    <motion.div 
                        className={`h-full w-full bg-black absolute top-0 left-0 bg-center bg-cover bg-no-repeat`} 
                        style={{backgroundImage: `url(${coursel[activeIndex].image})`}}
                        initial={{opacity: 0, x: 500}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -500}}
                        key={activeIndex}
                    >
                        <div className="h-full w-full bg-black/70 px-[20px] md:px-[100px] lg:px-[150px] py-10 flex items-center">
                            <div className="flex-1 space-y-7">
                                <h1 className="text-3xl md:text-5xl font-semibold text-white">{coursel[activeIndex].title}</h1>
                                <p className="text-[#667185] text-lg md:text-2xl font-medium text-white max-w-[850px]">{coursel[activeIndex].subText}</p>
                            </div>
                            {/* <div className="text-white text-2xl hidden md:flex flex-col gap-3 cursor-pointer">
                                <FaArrowRight />
                                <FaArrowLeft />
                            </div> */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}