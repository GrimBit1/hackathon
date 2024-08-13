import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-black bg-top flex items-center justify-center"
      style={{
        backgroundImage: "url(/hero.png)",
      }}
    >
      <section className="h-screen w-full backdrop-blur-sm flex items-center justify-center flex-col">
        <img src="/image2.png" alt="Hero" className="h- sm:h-96 " />
        <h1 className="text-white text-3xl sm:text-5xl  text-center  ">
          Paris Olympics 2024
        </h1>
      </section>
    </section>
  );
};

export default HeroSection;
