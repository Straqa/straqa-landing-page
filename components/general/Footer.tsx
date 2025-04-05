import { paths } from "@/constants/paths";
import { FiChevronRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer({ openModal }: { openModal: () => void }) {
    return(
        <div className="w-full bg-[#F7F9FC]">
            <div className="h-[200px] bg-white" />
            <div className="px-[20px]">
                <div className="max-w-[1200px] bg-[#020C14] mx-auto rounded-lg relative top-[-100px] bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(/images/abstract-bg.svg)`}} data-aos="fade-up">
                    <div className="h-full w-full px-[20px] md:px-[100px] py-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-5">
                        <p className="text-2xl md:text-4xl text-white text-center md:text-left font-semibold max-w-[400px] leading-[130%] md:leading-[130%]">Be The First to Know When we Launch.</p>
                        <div onClick={openModal} className="h-[55px] w-fit px-7 bg-white text-[#020C14] rounded-md text-base md:text-lg font-medium flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed">
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
                    <div className="w-full grid grid-cols-2 gap-5">
                        <div className="w-full">
                            <h3 className="text-black text-xl">Company</h3>
                            <div className="mt-5 space-y-2 text-[#8492A7] flex flex-col gap-2">
                                <a href="#">About Us</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className="text-black text-xl">Join The VIPs</h3>
                            <p className="text-[#8492A7] mt-5">Sign up and be the first to use Straqa when we launch</p>
                            <div className="space-y-4 mt-5">
                               
                                <button onClick={openModal} className="text-white flex items-center justify-center gap-4 cursor-pointer bg-[#020C14] rounded-md w-full h-[50px] font-medium">Join the Waitlist <Image className="w-5 h-5" src={"/images/plane.svg"} width={500} height={300} alt={""}/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1200px] px-[20px] mx-auto border-t border-black/10 mt-10 pt-10 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center j gap-5 text-[#8492A7]">
                        <a href="https://www.linkedin.com/company/straqahq/" target="_blank"><FaLinkedin size={25} /></a>
                        <a href="https://x.com/straqahq?s=21" target="_blank"><FaXTwitter size={25} /></a>
                        <a href="https://www.instagram.com/straqahq?igsh=MXducGtkZXk1MjN6eA%3D%3D&utm_source=qr" target="_blank"><FaInstagram size={25} /></a>
                    </div>
                    <p className="text-black/50 mt-5 md:mt-0">© 2020 Straqa. All rights reserved</p>
                </div>
            </div>
            
        </div>
    )
}