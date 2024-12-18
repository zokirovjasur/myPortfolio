import Intro from "./Components/Intro";
import SplashScreen from "./Components/SplashScreen";
import Socials from "./Components/Socials";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import BackToTop from "./Components/BackToTop";

import { useState, useEffect, useLayoutEffect } from "react";

import "./Components/style.css";

const App = () => {
  window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("serviceWorker.js");
    }
  });

  useLayoutEffect(() => {
    if (isLight) {
      document.body.style.backgroundColor = "#FFF4EA";
      document.body.style.color = "#354259";
      document.body.style.fontWeight = "500";
    } else {
      document.body.style.backgroundColor = "rgb(13,13,13)";
      document.body.style.color = "aliceblue";
      document.body.style.fontWeight = "";
    }
  });

  const [showSplash, setShowSplash] = useState(true);

  const updateShowSplash = () => {
    setShowSplash(false);
  };

  const [scrollClicked, setScrollClicked] = useState(false);

  const [backToTop, setBackToTop] = useState(false);
  let scrollPos = 0;

  useEffect(() => {
    const scrollDetect = () => {
      scrollPos = window.scrollY;
      setScrollClicked(scrollPos <= 90 ? false : "");
      setBackToTop(scrollPos >= 1000 ? false : "");
    };
    window.addEventListener("scroll", scrollDetect);
  });

  const scrollHandler = () => {
    setScrollClicked(true);
  };

  const toTheTop = () => {
    setBackToTop(true);
  };

  const [isGlobalBlur, setIsGlobalBlur] = useState(false);
  const blurStatus = (isBlur) => {
    setIsGlobalBlur(isBlur);
  };

  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("localTheme")
      ? JSON.parse(localStorage.getItem("localTheme"))
      : false;
  });

  const toggleTheme = () => {
    setIsLight((prevTheme) => {
      localStorage.setItem("localTheme", JSON.stringify(!prevTheme));
      return !prevTheme;
    });
  };

  return (
    <>
      {showSplash && <SplashScreen onAnimationEnd={updateShowSplash} />}
      <BackToTop
        toTheTop={toTheTop}
        splashStatus={showSplash}
        isLight={isLight}
      />
      <Intro
        backToTop={backToTop}
        splashStatus={showSplash}
        scrollHandler={scrollHandler}
        globalBlur={blurStatus}
        toggleTheme={toggleTheme}
        isLight={isLight}
      />
      <Projects
        scrollClicked={scrollClicked}
        globalBlur={isGlobalBlur}
        isLight={isLight}
        splashStatus={showSplash}
      />
      <TechStack
        globalBlur={isGlobalBlur}
        isLight={isLight}
        splashStatus={showSplash}
      />
      <Socials globalBlur={isGlobalBlur} isLight={isLight} />
    </>
  );
};

export default App;
