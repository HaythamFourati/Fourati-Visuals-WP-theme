import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Test = function(){
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
    })
    .to(boxRef.current, {
      scale: 1, // Scale to 1.1
    });

    // Cleanup function to kill the ScrollTrigger instance
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (<>
    <section ref={boxRef} className="container mx-auto h-screen section-bg ">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-5xl font-bold text-gray-800">Web Design</h2>
        <p className="text-gray-600 text-lg">
        We specialize in developing interactive, scalable, brand-oriented,<br/> and business-ready customized web design.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
        <img style={{ width: "100%", height: "auto" }} 
          src="https://cdn.prod.website-files.com/667369e53cd4ba666c3470ed/6679c60e88858ad3286194f8_rock-laptop-website-design.avif" 
          alt="Sample image" 
          className="rounded-lg w-full h-64 object-cover"
        />
      </div>

      
      <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-5xl font-bold text-gray-800">Web Design</h2>
        <p className="text-gray-600 text-lg">
        We specialize in developing interactive, scalable, brand-oriented,<br/> and business-ready customized web design.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
        <img style={{ width: "100%", height: "auto" }} 
          src="https://cdn.prod.website-files.com/667369e53cd4ba666c3470ed/6679c60e88858ad3286194f8_rock-laptop-website-design.avif" 
          alt="Sample image" 
          className="rounded-lg w-full h-64 object-cover"
        />
      </div>
    </div>

    </section>
    <section className="container mx-auto h-screen bg-gray ">
      


 
    </section>
    </>
   );
  
};

export default Test;