"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Speakers from "@/sections/Speakers";
import Registration from "@/sections/Registration";



export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Hero />
        <About />
        <Speakers />
        {/* <Schedule /> */}
        {/* <Sponsors /> */}
        <Registration />
      </main>
      <Footer />
    </div>
  );
}
