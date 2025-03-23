"use client"

import { useEffect } from "react";

//components
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSections";
import WhyStraqa from "./components/WhyStraqa";

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="min-h-screen w-full bg-white">
      <Hero />
      <WhyStraqa />
      <InfoSection />
    </div>
  );
}
