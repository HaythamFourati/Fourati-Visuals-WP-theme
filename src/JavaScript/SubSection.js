import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Test = function () {
  const boxRef = useRef(null);

  useEffect(() => {
    // Create a timeline for the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top center",
        end: "10px", // Adjust this value as needed
        scrub: true,
      },
    });

    // Add animations to the timeline
    tl.from(boxRef.current, {
      scale: 0.8, // Start scaling from 0.2
    }).to(boxRef.current, {
      scale: 1, // Scale to 1.1
    });

    // Cleanup function to kill the ScrollTrigger instance
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <section ref={boxRef} className="container mx-auto h-full section-bg ">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <h2 className="section-headline text-8xl p-6 text-gray-800">Services</h2>
          <p className="text-gray-800 text-lg pb-6">
            We offer services that are designed to fit your business needs
            perfectly. Whether it's creating an engaging website, building your
            brand, improving your SEO, or setting up an ecommerce platform,
            we're here to boost your online presence and help you succeed.
          </p>

          <div className="bg-white pt-6 pl-6 pr-6 pb-0 border-2 border-dashed border-gray-500 rounded-lg">
            <h3 className="text-4xl text-gray-800 pb-6">Website Design</h3>
            <p className="text-gray-600 text-lg pb-6">
              We specialize in developing interactive, scalable, brand-oriented,
              <br /> and business-ready customized web design.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://fourativisuals.com/wp-content/uploads/2025/02/laptop-mockup.png"
              alt="Sample image"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>

          <div className="bg-white pt-6 pl-6 pr-6 pb-0 border-2 border-dashed border-gray-500 rounded-lg">
            <h3 className="text-4xl text-gray-800 pb-6">Website Development</h3>
            <p className="text-gray-600 text-lg pb-6">
              Be it static, customized, or dynamic, we follow industry best
              practices to develop attractive and highly functional websites.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://fourativisuals.com/wp-content/uploads/2025/02/mobile-mockup.png"
              alt="Sample image"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>

          <div className="bg-white pt-6 pl-6 pr-6 pb-0 border-2 border-dashed border-gray-500 rounded-lg">
            <h3 className="text-4xl text-gray-800 pb-6">
              Search Optimization - SEO
            </h3>
            <p className="text-gray-600 text-lg pb-6">
              Our carefully crafted SEO strategies are designed to increase
              visibility within the algorithmic search results to deliver
              relevant, targeted traffic to your website.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://fourativisuals.com/wp-content/uploads/2025/02/google-logo-icon.png"
              alt="Sample image"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>

          <div className="bg-white pt-6 pl-6 pr-6 pb-0 border-2 border-dashed border-gray-500 rounded-lg">
            <h3 className="text-4xl text-gray-800 pb-6">E-commerce Websites</h3>
            <p className="text-gray-600 text-lg pb-6">
              We craft robust, aesthetically pleasing, and conversion-focused
              e-commerce website development.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://fourativisuals.com/wp-content/uploads/2025/02/ecommerce.png"
              alt="Sample image"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
