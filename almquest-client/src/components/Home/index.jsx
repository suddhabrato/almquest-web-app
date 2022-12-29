import React from "react";
import Hero from "./Hero";
import CTADonorDistributorTop from "./CTADonorDistributorTop";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Team from "./Team";

const Home = ({ pageRefs }) => {
  return (
    <div>
      <Hero pageRefs={pageRefs} />
      <CTADonorDistributorTop pageRefs={pageRefs} />
      <Features pageRefs={pageRefs} />
      <Testimonials pageRefs={pageRefs} />
      <Team pageRefs={pageRefs} />
    </div>
  );
};

export default Home;
