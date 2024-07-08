import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Navigation } from "./components/navigation/navigation";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { About } from "./components/about/About";
import { Vision } from "./components/vision/Vision";
import JsonData from "./data/Data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header Data={landingPageData.Header} />
      <Vision Data={landingPageData.Vision} />
      <About Data={landingPageData.About} />
      <Footer Data={landingPageData.Footer} />
    </div>
  );
};

export default App;
