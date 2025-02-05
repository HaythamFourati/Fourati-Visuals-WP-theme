import React from "react";
import ReactDOM from "react-dom/client";
import HeroSection from "./HeroSection.js";
import Test from "./TestComp.js";

console.log("React script starting...");
const renderElement = document.querySelector("#render-react");
console.log("Found render element:", renderElement);

if (renderElement) {
  try {
    const root = ReactDOM.createRoot(renderElement);
    root.render(
      <React.StrictMode>
        <HeroSection />
        <Test />
      </React.StrictMode>
    );
    console.log("React component rendered successfully");
  } catch (error) {
    console.error("Error rendering React component:", error);
  }
} else {
  console.error("Could not find #render-react element");
}