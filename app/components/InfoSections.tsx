import Button from "@/components/general/Button";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

export default function InfoSection(){
    return(
        <div className="w-full mt-10">
            <div className="w-full bg-[#F7F9FC] py-10 md:py-20 px-[20px]">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <img
                        src="/images/infoSection-1.png"
                        data-aos="fade-up" data-aos-delay="200"
                    />
                    <div className="w-full" data-aos="fade-up">
                        <h3 className="text-2xl md:text-4xl text-[#222D39] font-semibold">AI-Driven Business Insights & Analytics</h3>
                        <p className="text-base md:text-lg font-medium text-[#8492A7] mt-2">With AI-powered analytics, Straqa helps businesses track their performance in real time. It automatically collects and processes sales data, customer behavior, and market trends to generate valuable insights. This allows business owners to:</p>
                        <div className="my-5 text-[#222D39] space-y-3 pb-5">
                            <div className="flex items-center gap-2">
                                <FaCircleCheck color="#36CD77" size={20} />
                                <p>Identify best-selling products and services.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCircleCheck color="#36CD77" size={20} />
                                <p>Understand customer preferences and buying patterns.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCircleCheck color="#36CD77" size={20} />
                                <p>Receive AI-driven recommendations to improve sales and operations.</p>
                            </div>
                        </div>
                        <Button text="Learn more" arrow />
                    </div>
                </div>
            </div>
            <div className="w-full bg-white py-10 md:py-20 px-[20px]">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="w-full" data-aos="fade-up">
                        <h3 className="text-2xl md:text-4xl text-[#222D39] font-semibold">Automated Marketing & Customer Engagement</h3>
                        <p className="text-base md:text-lg font-medium text-[#8492A7] mt-2">Marketing can be overwhelming, but with AI, Straqa makes it effortless. By leveraging AI, SMEs can attract and retain more customers while spending less time and money on manual marketing efforts.</p>
                        <div className="my-5 text-[#222D39] space-y-3 pb-5">
                            <div className="flex items-center gap-2">
                                <FaCircleCheck color="#36CD77" size={20} />
                                <p>Run targeted ad campaigns based on customer behavior.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCircleCheck color="#36CD77" size={20} />
                                <p>Personalize promotions and discounts to increase conversions.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCircleCheck color="#36CD77" size={20} />
                                <p>Automate email, SMS, and social media marketing to engage customers efficiently.</p>
                            </div>
                        </div>
                        <Button text="Learn more" arrow />
                    </div>
                    <Image
                        src="/images/infoLaptop.jpg"
                        data-aos="fade-up" data-aos-delay="200" alt={""}  width={500} height={500}                  />
                </div>
            </div>
            <div className="w-full bg-white py-10 px-[20px]">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <Image
                        alt={""}
                        width={500} height={500}
                        className="w-full"
                        src="/images/infoSection-2.png"
                        data-aos="fade-up" data-aos-delay="200"
                    />
                    <div className="w-full" data-aos="fade-up">
                        <h3 className="text-2xl md:text-4xl text-[#222D39] font-semibold">Smart Order & Inventory Management</h3>
                        <p className="text-base md:text-lg font-medium text-[#8492A7] mt-2">Managing orders and stock levels manually can lead to delays, lost sales, or overstocking. Straqa’s AI-powered inventory system: This feature eliminates manual errors, reduces waste, and keeps businesses running smoothly.</p>
                        <div className="my-5 text-[#222D39] space-y-3 pb-5">
                            <div className="flex items-center gap-2">
                                <FaCircleCheck color="#36CD77" size={20} />
                                <p>Tracks stock levels in real time and alerts business owners when restocking is needed.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCircleCheck color="#36CD77" size={20} />
                                <p>Predicts demand patterns to help businesses prepare for peak sales periods.</p>
                            </div>
                        </div>
                        <Button text="Learn more" arrow />
                    </div>
                </div>
            </div>
        </div>
    )
}