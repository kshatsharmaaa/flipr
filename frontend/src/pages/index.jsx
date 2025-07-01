import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import RealtorSection from "../components/RealtorSection";
import WhyChooseUs from "../components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RealtorSection/>
      <WhyChooseUs/>
      <AboutUs />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
}