import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Navigation } from "./components/navigation/navigation";
import { Header } from "./components/header/Header";
import { Contact } from "./components/footer/Footer";
import { About } from "./components/about/About";
import { Vision } from "./components/vision/Vision";
import { Valeurs } from "./components/valeurs/Valeurs";
import { Gallery } from "./components/gallerie/Gallerie";
import { Missions } from "./components/missions/Missions";
import { Programmes } from "./components/programmes/Programmes";
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
      <Valeurs Data={landingPageData.Valeurs} />
      <Gallery Data={landingPageData.Gallerie} />
      <Programmes Data={landingPageData.Programmes} />
      <Missions Data={landingPageData.Missions} />
      <Contact Data={landingPageData.Contact} />
    </div>
  );
};

export default App;
