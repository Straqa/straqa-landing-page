import Button from "@/components/general/Button";
import Header from "@/components/general/Header";
import Image from "next/image";
import { useState } from "react";
import useTimeout from "../hooks/useTimeout";
import Modal from "@/components/general/Modal";

export default function Hero(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    useTimeout(() => {
        setIsModalOpen(true);
    }, 5000);
    return(
        <div className="w-full bg-[#F7F9FC]">
            <Header />
            <div className="text-center h-full px-[20px] py-[50px]">
                <h1 className="text-4xl md:text-6xl font-semibold text-[#222D39] max-w-[1000px] mx-auto" data-aos="fade-up">AI-Powered Solutions to Grow, Manage, and Scale Your Business</h1>
                <p className="text-[#8492A7] text-lg md:text-xl font-medium mt-5 md:mt-10" data-aos="fade-up">Everything you need to take your business online, boost sales, and manage operations—all in one platform.</p>
                <div className="mx-auto mt-5 md:mt-10 w-fit" data-aos="fade-up" data-aos-delay="100">
                    <Button text="Secure Your Spot" />
                </div>
                <div className="relative">
        <Image
            src="/images/straqa-dashboard.svg"
            alt="straqa-dashboard"
            className="w-full md:max-w-[900px] mx-auto mt-10 relative z-10"
            data-aos="fade-up"
            data-aos-delay="200"
            width={1000}
            height={1000}
        />
        <Image
            src="/images/background.svg"
            alt="straqa-dashboard"
            className="w-full mx-auto md:max-w-[950px] hidden md:block absolute top-20 left-[18rem] z-0"
            data-aos="fade-up"
            data-aos-delay="200"
            width={1000}
            height={1000}
        />
    </div>
            </div>
                 {/* Modal */}
                 <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4">Join Our Waitlist</h2>
                <form>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </Modal>
        </div>
    )
}