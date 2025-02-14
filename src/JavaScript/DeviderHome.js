import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const DeviderHome = function(){
  const boxRef = useRef(null);

  useEffect(() => {
     // Create a timeline for the animations
     const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top bottom",
        end: "50%", // Adjust this value as needed
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
    <section ref={boxRef} className="grid center full mx-auto min-h-[500px] bg-blue-800 p-10 rounded-md mt-10">
     
    <div className="grid md:grid-cols-2 gap-8 items-center">
       
        <div>
           <h2 className="text-8xl p-6 pl-0 text-white">Client Testimonials</h2>
             <p className="text-white text-lg pb-6">
             At Fourati Visuals, we take pride in delivering high-quality, custom WordPress solutions tailored to each client's unique needs. But don’t just take our word for it—see what our clients have to say!
             </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    
    
    <div class="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <p class="text-gray-700 text-sm">"He was extremely easy to work with. communication was great. he did ensuring i asked and more. I will be working with him again and again."</p>
      <div class="mt-4 flex items-center">
        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/24114884/original/1453743188359_facebook20160125-17101-17ne6n5.jpg" class="w-10 h-10 rounded-full mr-3" alt="User Avatar"></img>
        <div>
          <h4 class="font-semibold text-gray-900">fathands7</h4>
          <p class="text-xs text-gray-500">Pro client, Fiverr</p>
          <p class="text-xs text-gray-500">United States</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <p class="text-gray-700 text-sm">"Pleasure to work with Really trying to satisfy and makes sure customer is happy with the results Thank you very much!"</p>
      <div class="mt-4 flex items-center">
        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/24114884/original/1453743188359_facebook20160125-17101-17ne6n5.jpg" class="w-10 h-10 rounded-full mr-3" alt="User Avatar"></img>
        <div>
          <h4 class="font-semibold text-gray-900">elya99</h4>
          <p class="text-xs text-gray-500">Pro client, Fiverr</p>
          <p class="text-xs text-gray-500">United States</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <p class="text-gray-700 text-sm">"Haytham, developed solutions and great support has helped us for our project. We would definitely recomend him, as he is patient, attentive and proactive with further customization. We are thankful"</p>
      <div class="mt-4 flex items-center">
        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/24114884/original/1453743188359_facebook20160125-17101-17ne6n5.jpg" class="w-10 h-10 rounded-full mr-3" alt="User Avatar"></img>
        <div>
          <h4 class="font-semibold text-gray-900">freelancemu</h4>
          <p class="text-xs text-gray-500">Repeat Client, Fiverr</p>
          <p class="text-xs text-gray-500">Mauritius</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <p class="text-gray-700 text-sm">"Excellent! The seller is very professional, he does high quality work and pays attention to the requirements and doubts of the customers. He delivered work on time. I am very satisfied."</p>
      <div class="mt-4 flex items-center">
        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/24114884/original/1453743188359_facebook20160125-17101-17ne6n5.jpg" class="w-10 h-10 rounded-full mr-3" alt="User Avatar"></img>
        <div>
          <h4 class="font-semibold text-gray-900">Oscaririartep</h4>
          <p class="text-xs text-gray-500">Fiverr</p>
          <p class="text-xs text-gray-500">Peru</p>
        </div>
      </div>
    </div>
    
    <div class="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <p class="text-gray-700 text-sm">"Highly professional and delivers exactly whats needed. SEO improvements were noticeable within weeks!"</p>
      <div class="mt-4 flex items-center">
        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/24114884/original/1453743188359_facebook20160125-17101-17ne6n5.jpg" class="w-10 h-10 rounded-full mr-3" alt="User Avatar"></img>
        <div>
          <h4 class="font-semibold text-gray-900">Garey Simmons</h4>
          <p class="text-xs text-gray-500">Marketing Manager</p>
          <p class="text-xs text-gray-500">United States</p>
        </div>
      </div>
    </div>
    
    
    <div class="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <p class="text-gray-700 text-sm">"Love the new theme and design. Would highly recommend!"</p>
      <div class="mt-4 flex items-center">
        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/24114884/original/1453743188359_facebook20160125-17101-17ne6n5.jpg" class="w-10 h-10 rounded-full mr-3" alt="User Avatar"></img>
        <div>
          <h4 class="font-semibold text-gray-900">Successmedia360</h4>
          <p class="text-xs text-gray-500">Pro Client, Fiverr</p>
          <p class="text-xs text-gray-500">United States</p>
        </div>
      </div>
    </div>
  
  </div>
       

          
    </div>
    
  </section>
      
    </>
   );
  
};

export default DeviderHome;