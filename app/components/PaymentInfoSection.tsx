export default function PaymentInfoSection(){

    const InfoCard = ({icon, title, subText}:{icon: string, title: string, subText: string}) => {
        return(
            <div className="w-full px-[20px] py-10 bg-white drop-shadow-xl flex items-start gap-5 text-[#222D39]" data-aos="fade-up">
                <img
                    src={icon}
                    alt={title}
                    className="w-[50px]"
                />
                <div className="flex-1 space-y-3">
                    <h4 className="text-lg md:text-xl font-semibold">{title}</h4>
                    <p className="text-[#8492A7] font-medium text-base md:text-lg">{subText}</p>
                </div>
            </div>
        )
    }

    return(
        <div className="w-full min-h-screen bg-[#F7F9FC] px-[20px] py-10 md:py-20 mt-10 md:mt-20">
            <div className="mx-auto text-center max-w-[650px] text-black"  data-aos="fade-up">
                <p className="font-semibold text-[#008AFF]">STRAQA’S PAYMENTS SOLUTION</p>
                <h3 className="text-2xl md:text-4xl font-semibold mt-5">Seamless Payments for Faster Business Growth</h3>
            </div>
            <div className="max-w-[1200px] mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-5 w-full">
                    <InfoCard
                        icon="/icons/options.svg"
                        title="Multiple Payment Options"
                        subText={`Accept card payments, bank transfers, mobile money, and digital wallets to give customers flexibility.`}
                    />
                    <InfoCard
                        icon="/icons/settings.svg"
                        title="Fast & Secure Transactions"
                        subText={`Benefit from top-tier encryption and fraud protection, ensuring every transaction is safe and reliable.`}
                    />
                    <InfoCard
                        icon="/icons/user-out.svg"
                        title="Automated Payouts & Tracking"
                        subText={`Get real-time payment insights, track transactions easily, and withdraw funds effortlessly.`}
                    />
                </div>
                <div className="w-full grid grid-row-2 gap-0">
                    <img
                        src="/images/paymentInfoSection-1.png"
                        alt=""
                        className="w-full"
                        data-aos="fade-down"
                    />
                    <div className="grid grid-cols-[3fr_5fr] gap-5">
                        <img
                            className="w-full"
                            alt=""
                            src="/images/paymentInfoSection-2.png"
                            data-aos="fade-right"
                        />
                        <img
                            className="w-full"
                            alt=""
                            src="/images/paymentInfoSection-3.png"
                            data-aos="fade-left"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}