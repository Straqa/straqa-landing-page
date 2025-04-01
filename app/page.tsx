"use client"

import { useEffect } from "react";

//components
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSections";
import WhyStraqa from "./components/WhyStraqa";
import Footer from "@/components/general/Footer";
import PaymentInfoSection from "./components/PaymentInfoSection";
import Testimonials from "./components/Testimonials";
import SoftwareIntegrations from "./components/SoftwareIntegrations";

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import CourselSection from "./components/CourselSection";


export default function Home() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="min-h-screen w-full bg-white">
      <Hero />
      <CourselSection />
      <WhyStraqa />
      <InfoSection />
      <PaymentInfoSection />
      <Testimonials />
      <SoftwareIntegrations />
      <Footer />
    </div>
  );
}
