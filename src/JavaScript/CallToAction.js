import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const CallToAction = function(){
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
      rotate:360, // Rotate 360 degrees
    });

    // Cleanup function to kill the ScrollTrigger instance
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (<>
    <section ref={boxRef} className="grid items-center justify-center full mx-auto min-h-[500px] bg-gray-100 p-10 rounded-md mt-10">
     
    
       
        <h2 className="text-8xl p-6 text-gray-800">Call to action here</h2>
          
    
    
  </section>
      
    </>
   );
  
};

export default CallToAction;