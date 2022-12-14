import React from "react";
import Hero from "./Hero";
import CTADonorDistributorTop from "./CTADonorDistributorTop";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <Hero />
      <CTADonorDistributorTop />
      <Features />
      <Testimonials />
      <Team />
    </div>
  );
};

export default Home;
