import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);



  




const Test = function(){
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      scale: 1.2,     // Scale the element to 2 times its original size
      scrollTrigger: {
        trigger: boxRef.current,  // the element to trigger the animation
        start: "top center",      // when the top of the element hits the center of the viewport
        end: "10px",     // when the bottom of the element hits the center
        scrub: true,              // smoothly animate linked to scroll position
      },
    });
  }, []);
  return (<>
    <section ref={boxRef} className="container mx-auto h-screen section-bg ">
      <video width="100%" height="auto" src="https://fourati-visuals.local/wp-content/uploads/2025/02/Showreel-Grid-Mobile.mp4"  autoPlay muted loop>
       Your browser does not support the video tag.
      </video>


 
    </section>
    <section className="container mx-auto h-screen bg-gray ">
      


 
    </section>
    </>
   );
  
};

export default Test;