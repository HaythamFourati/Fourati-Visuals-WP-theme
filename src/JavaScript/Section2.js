import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Section2 = function () {
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
      <section
        ref={boxRef}
        className="container mx-auto h-full section-bg pt-10"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <h2 className="text-8xl p-6 text-gray-800">Projects</h2>
          <p className="text-gray-800 text-lg pb-6">
            We offer services that are designed to fit your business needs
            perfectly. Whether it's creating an engaging website, building your
            brand, improving your SEO, or setting up an ecommerce platform,
            we're here to boost your online presence and help you succeed.
          </p>

          <div className="bg-white p-0 rounded-lg">
            <video
              src="/wp-content/uploads/2025/02/project1.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-lg"
            ></video>
          </div>

          <div className="bg-white p-0 rounded-lg">
            <video
              src="/wp-content/uploads/2025/02/project2.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-lg"
            ></video>
          </div>

          <div className="bg-white p-0 rounded-lg">
            <video
              src="/wp-content/uploads/2025/02/project3.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-lg"
            ></video>
          </div>

          <div className="bg-white p-0 rounded-lg">
            <video
              src="/wp-content/uploads/2025/02/project4.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-lg"
            ></video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
