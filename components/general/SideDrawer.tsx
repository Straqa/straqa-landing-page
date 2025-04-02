import { paths } from "@/constants/paths";
import { FiChevronRight, FiX } from "react-icons/fi";
import Button from "./Button";
import { AnimatePresence, motion } from "motion/react";

export default function SideDrawer({handleClose, showDrawer}: {handleClose: () => void, showDrawer: boolean}){
    return(
        <div className="h-screen w-full fixed top-0 left-0 z-[1000] bg-black/30 backdrop-blur-sm flex">
            <div className="h-full flex-1" onClick={handleClose}/>
            <div className="p-[10px]">
                <AnimatePresence>
                    {showDrawer && (
                        <motion.div 
                            className="w-[80vw] bg-white rounded-md h-full p-[15px]"
                            initial={{x: 200, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: 200, opacity: 0}}
                        >
                            <div className="flex items-center justify-between gap-5">
                                <a href={paths.home}>
                                    <img
                                        src="/straqa-logo.svg"
                                        alt=""
                                        className="h-[22px]"
                                    />
                                </a>
                                <div className="h-[50px] w-[50px] bg-[#020C14] rounded-full text-white cursor-pointer flex items-center justify-center" onClick={handleClose}>
                                    <FiX size={18} />
                                </div>
                            </div>
                            <div className="w-full h-full pt-10 flex flex-col gap-7 text-center text-[#222D39]">
                                {/* <a href={paths.home} className="text-lg font-medium">Payments</a>
                                <a href={paths.home} className="text-lg font-medium">Events</a>
                                <a href={paths.home} className="text-lg font-medium">eCommerce</a> */}
                                <a href={paths.home} className="text-lg font-medium">Contact</a>
                                <div className="h-[55px] w-full px-7 bg-[#020C14] rounded-md text-base md:text-lg text-white font-medium flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed">
                                    <p>Sign Up</p>
                                    <FiChevronRight size={20} />
                                </div>
                            </div>
                        </motion.div>
                    )}
                    
                </AnimatePresence>
            </div>
        </div>
    )
}