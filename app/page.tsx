"use client";

import { useEffect, useState } from "react";

//components
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSections";
import WhyStraqa from "./components/WhyStraqa";
import Footer from "@/components/general/Footer";
import PaymentInfoSection from "./components/PaymentInfoSection";
import Testimonials from "./components/Testimonials";
import SoftwareIntegrations from "./components/SoftwareIntegrations";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//aos
import AOS from "aos";
import "aos/dist/aos.css";
import CourselSection from "./components/CourselSection";
import Modal from "@/components/general/Modal";
import useTimeout from "./hooks/useTimeout";
import { createAirtableRecord } from "./api/airtable";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasModalShown, setHasModalShown] = useState(false);
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [fullName, setfullName] = useState("");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useTimeout(() => {
    if (!hasModalShown) {
      setIsModalOpen(true);
      setHasModalShown(true);
    }
  }, 5000);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createAirtableRecord(fullName, email, useCase);
      toast.success("Form submitted successfully!");
      setfullName("");
      setEmail("");
      setUseCase("");
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <Hero openModal={openModal} />
      <CourselSection />
      <WhyStraqa />
      <InfoSection />
      <PaymentInfoSection />
      <Testimonials />
      <SoftwareIntegrations />
      <Footer openModal={openModal} />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col items-center justify-center h-full w-full px-6 gap-y-6 py-6">
          <h2 className="text-2xl md:text-4xl font-bold text-[#8492A7] max-w-[500px] text-center">
            Be the first to know when we launch.
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full  gap-y-4"
          >
            <input
              type="name"
              placeholder="Enter your Full Name"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
              className="w-full py-6 border border-[#3434340D] rounded text-center md:text-xl text-black placeholder:text-[#8492A76E] focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-6 border border-[#3434340D] rounded text-center md:text-xl text-black placeholder:text-[#8492A76E] focus:outline-none focus:ring-2 focus:ring-black"
            />
            <select
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              className="w-full mx-auto py-6 mb-4 border border-[#3434340D] rounded text-center md:text-xl text-black focus:outline-none focus:ring-2 focus:ring-black"

            >
              <option value="" disabled>
                I want to use Straqa for...
              </option>
              <option value="Build and Manage an Online Store">
                Build and Manage an Online Store
              </option>
              <option value="Sell and Manage Event Tickets">
                Sell and Manage Event Tickets
              </option>
              <option value="Receive Payments">Receive Payments</option>
              <option value="Build a Transport/Logistics System">
                Build a Transport/Logistics System
              </option>
              <option value="I'm not sure yet">I'm not sure yet</option>
            </select>

            <div
              onClick={handleSubmit}
              className="h-[55px] w-fit px-7 bg-[#020C14] rounded-md text-base md:text-lg text-white font-medium flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
            >
              <p>Secure Your Spot</p>
            </div>
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
