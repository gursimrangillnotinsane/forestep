"use client";
import About from "@/components/about";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Prortolio from "@/components/prortolio";

import 'animate.css';
import { useEffect } from "react";

// import { useEffect } from 'react';
export default function Home() {
  // const WOW = require('wow.js') as any;
  useEffect(() => {
    // Initialize WOW.js only on the client-side
    if (typeof window !== 'undefined') {
      const WOW = require('wow.js') as any;
      const wow = new WOW();
      wow.init();
    }
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Prortolio />
      <Pricing />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  );
}
