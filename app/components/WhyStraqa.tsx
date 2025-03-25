
const reasons : {title: string, icon: string, subText: string}[] = [
    {
        icon: "/icons/timer-briefcase.svg",
        title: "AI-Powered Business Management",
        subText: "Automate operations, track performance, and make data-driven decisions effortlessly."
    },
    {
        icon: "/icons/chart.svg",
        title: "Online Store & E-Commerce Setup",
        subText: "Easily create and manage an online store to sell products and services without coding."
    },
    {
        icon: "/icons/send.svg",
        title: "Seamless Payment Integration",
        subText: "Accept payments securely from multiple channels, including mobile money and bank transfers."
    },
    {
        icon: "/icons/flag.svg",
        title: "Smart Marketing & Customer Engagement",
        subText: "Use AI-driven insights to run targeted marketing campaigns and grow your customer base."
    },
    {
        icon: "/icons/chart-star.svg",
        title: "Automated Order & Delivery Management",
        subText: "Streamline logistics, track orders, and manage deliveries efficiently."
    },
    {
        icon: "/icons/bulb.svg",
        title: "Business Analytics & Insights",
        subText: "Get real-time reports, sales trends, and AI-powered recommendations to optimize growth."
    },
    {
        icon: "/icons/edit.svg",
        title: "Multi-Industry Adaptability",
        subText: "Suitable for retail, restaurants, transport, event ticketing, and other business types."
    },
    {
        icon: "/icons/menu.svg",
        title: "User-Friendly & No Tech Expertise Needed",
        subText: "Simple and intuitive platform designed for business owners with no technical background."
    }
]

export default function WhyStraqa(){

    const CardBlock = ({title, icon, subText }:{title: string, icon: string, subText: string}) => {
        return(
            <div className="w-full h-fit" data-aos="fade-up">
                <div className="mx-auto w-[45px] h-[45px] flex items-center justify-center relative">
                    <img
                        src={icon}
                        alt={title}
                        className="h-full z-[11]"
                    />
                    <div className="h-[40px] w-[40px] rounded-full absolute bg-[#EBF6FF] top-0 left-0 z-[10]" />
                </div>
                <h4 className="text-lg md:text-2xl font-semibold mt-5">{title}</h4>
                <p className="text-[#8492A7] text-base mt-2">{subText}</p>
            </div>
        )
    }

    return(
        <div className="w-full h-fit bg-white py-10 md:py-20 px-[20px] md:px-[50px] text-center text-[#222D39]">
            <p className="font-semibold" data-aos="fade-up">WHY STRAQA</p>
            <h2 className="text-2xl md:text-4xl font-semibold mt-2 md:mt-5" data-aos="fade-up">Powerful Features to Help Your Business Sell, Scale, and Succeed</h2>
            <div className="w-full mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 md:gap-10">
                {reasons.map(({
                    title,
                    icon,
                    subText
                }, index) => (
                    <CardBlock
                        key={index}
                        icon={icon}
                        title={title}
                        subText={subText}
                    />
                ))}
            </div>
        </div>
    )
}