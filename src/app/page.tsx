// components/Hero.tsx
import React from "react";
import Home from "./components/Home";
import JobCard from "./components/Card";
import Footer from "./components/Footer";

const Hero: React.FC = () => {
  return (
    <main className="">
      <Home />
      <JobCard />
      <Footer />
    </main>
  );
};

export default Hero;
