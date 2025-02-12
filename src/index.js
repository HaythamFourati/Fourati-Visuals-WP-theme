import React from "react";
import ReactDOM from "react-dom/client";
import HeroSection from "./JavaScript/HeroSection.js";
import SubSection from "./JavaScript/SubSection.js";
import Section2 from "./JavaScript/Section2.js";
import DeviderHome from "./JavaScript/DeviderHome.js";
import CallToAction from "./JavaScript/CallToAction.js";

console.log("React script starting...");
const renderElement = document.querySelector("#render-react");
console.log("Found render element:", renderElement);

if (renderElement) {
  try {
    const root = ReactDOM.createRoot(renderElement);
    root.render(
      <React.StrictMode>
        
          <HeroSection />
          <SubSection />
          <DeviderHome />
          <Section2 />
          <CallToAction />

      </React.StrictMode>
    );
    console.log("React component rendered successfully");
  } catch (error) {
    console.error("Error rendering React component:", error);
  }
} else {
  console.error("Could not find #render-react element");
}