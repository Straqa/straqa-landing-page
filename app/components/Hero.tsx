import Button from "@/components/general/Button";
import Header from "@/components/general/Header";

export default function Hero(){
    return(
        <div className="w-full bg-[#F7F9FC]">
            <Header />
            <div className="text-center h-full px-[20px] py-[50px]">
                <h1 className="text-4xl md:text-6xl font-semibold text-[#222D39] max-w-[1000px] mx-auto">AI-Powered Solutions to Grow, Manage, and Scale Your Business</h1>
                <p className="text-[#8492A7] text-lg md:text-xl font-medium mt-5 md:mt-10">Everything you need to take your business online, boost sales, and manage operations—all in one platform.</p>
                <div className="mx-auto mt-5 md:mt-10 w-fit">
                    <Button text="Secure Your Spot" />
                </div>
                <img
                    src="/images/straqa-dashboard.png"
                    alt="straqa-dashboard"
                    className="w-full md:max-w-[900px] mx-auto mt-10"
                />
            </div>
        </div>
    )
}