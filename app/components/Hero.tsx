import Button from "@/components/general/Button";
import Header from "@/components/general/Header";
import Image from "next/image";
import { useState } from "react";
import useTimeout from "../hooks/useTimeout";
import Modal from "@/components/general/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasModalShown, setHasModalShown] = useState(false);
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  useTimeout(() => {
    if (!hasModalShown) {
      setIsModalOpen(true);
      setHasModalShown(true);
    }
  }, 5000);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const airtableUrl =
      "https://api.airtable.com/v0/YOUR_BASE_ID/YOUR_TABLE_NAME";
    const apiKey = "YOUR_API_KEY"; 
    const data = {
      fields: {
        Email: email,
        Reason: reason,
      },
    };

    try {
      const response = await fetch(airtableUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setEmail("");
        setReason("");
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
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
        <div className="flex flex-col items-center justify-center h-full w-full px-6 gap-y-6 py-6">
          <h2 className="text-2xl md:text-4xl font-bold text-[#8492A7] max-w-[500px] text-center">
            Be the first to know when we launch.
          </h2>
          <form  onSubmit={handleSubmit} className="flex flex-col items-center w-full  gap-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-6 border border-[#3434340D] rounded text-center md:text-xl text-black placeholder:text-[#8492A76E] focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="I want to use Straqa for..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full py-6 mb-4 border border-[#3434340D] rounded text-center md:text-xl text-black placeholder:text-[#8492A76E] focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button text={"Secure Your Spot"} />
          </form>
          <p className="text-[#00000099] italic text-center text-sm md:text-base">
            *If you can’t find our mail in your inbox, please check your spam or
            promotions folder.
          </p>
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
}
