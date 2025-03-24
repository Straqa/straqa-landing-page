import { paths } from "@/constants/paths";
import { FiChevronRight } from "react-icons/fi";

export default function Footer(){
    return(
        <div className="w-full bg-[#F7F9FC]">
            <div className="h-[200px] bg-white" />
            <div className="px-[20px]">
                <div className="max-w-[1200px] bg-[#020C14] mx-auto relative rounded-lg relative top-[-100px] bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(/images/abstract-bg.svg)`}} data-aos="fade-up">
                    <div className="h-full w-full px-[20px] md:px-[100px] py-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-5">
                        <p className="text-2xl md:text-4xl text-white text-center md:text-left font-semibold max-w-[400px] leading-[130%] md:leading-[130%]">Be The First to Know When we Launch.</p>
                        <div className="h-[55px] w-fit px-7 bg-white text-[#020C14] rounded-md text-base md:text-lg font-medium flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed">
                            <p>Secure Your Spot</p>
                            <FiChevronRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-[20px] md:px-[50px] bg-[#F7F9FC] pb-10 md:pb-20">
                <div className="max-w-[1200px] mx-auto gap-10 grid grid-cols-1 md:grid-cols-2">
                    <div className="w-full">
                        <a href={paths.home}>
                            <img
                                src="/straqa-logo.svg"
                                alt="straqa"
                                className="h-[25px]"
                            />
                        </a>
                        <p className="text-base md:text-lg text-[#8492A7] font-medium mt-3">Everything you need to take your business online, boost sales, and manage operations—all in one platform.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}