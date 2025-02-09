import React from "react";
import Iridescence from "./Iridescence";
import BlurText from "./BlurText";
import Button from "./parts/button";
import SvgStack from "./parts/SvgStack";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

function HeroSection() {
  return (
    <>
  
      <section className="hero-custom grid justify-center w-full min-h-screen mx-auto p-6 pt-32">
      <Iridescence
  color={[1, 1, 1]}
  mouseReact={false}
  amplitude={0.1}
  speed={0.2}
          />
        <div className="container mx-auto grid justify-center w-full max-w-4xl">
          <div className="flex flex-col justify-center items-center gap-6 p-8 text-center text-black">
            <span className="tagline text-sm text-blue-800 uppercase tracking-widest font-semibold ">Open For Outsourcing <i className="fas fa-box text-blue-800">  </i> </span>
            <h1 className="md:text-6xl font-bold leading-tight">
              <BlurText
                text="Custom WordPress For Your Business"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="hero-heading md:text-6xl font-bold"
              />
            </h1>
            <h3 className="text-2xl text-gray-700 leading-relaxed">We Deliver Custom Themes, Plugins, and Integrations</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Empowering your brand with tailor-made <strong>WordPress </strong> solutions
              designed for speed, security, and scalability. Whether you're
              looking to create an eye-catching <strong>portfolio</strong>, an efficient 
              <strong> E-commerce </strong> store, or a dynamic <strong> business website</strong> contact us
              today.
            </p>
            <Button>Let's Collaborate</Button>
            <SvgStack/>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
