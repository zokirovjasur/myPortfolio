import MyProjectDetails from "./MyProjectDetails";
import { useRef } from "react";
import shoping from "../assets/shop.jpg";
import spotify from "../assets/spotify.jpeg";
import portfolioPoster from "../assets/portfolioPoster.png";
const Projects = ({ scrollClicked, globalBlur, isLight, splashStatus }) => {
  const targetRef = useRef(null);

  if (scrollClicked) {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const projectDetails = [
    {
      img: shoping,
      name: "Online Shop",
      details:
        "Online Shopping Platform for Small Businesses and Local Vendors",
      url: "https://github.com/zokirovjasur/nornlight-lesson16",
    },

    {
      img: portfolioPoster, // Import qilingan o'zgaruvchi
      name: "Portfolio",
      details: "My personal portfolio built with Vite-ReactJS and Tailwind CSS",
      url: "https://github.com/zokirovjasur/myPortfolio",
    },

    {
      img: "https://raw.githubusercontent.com/makersmecca/Portfolio/main/public/images/haloFocusPoster.png",
      name: "Times Focus",
      details: "Study companion app for focused, productive study sessions",
      url: "https://github.com/zokirovjasur/Times-boy",
    },
    {
      img: spotify,
      name: "Spotify",
      details:
        "Spotify: Your Gateway to Unlimited Music and Podcasts",
      url: "https://github.com/zokirovjasur/Spotify-project",
    },
  ];

  return (
    <div
      ref={targetRef}
      className={`${
        globalBlur
          ? "md:blur-none blur-md duration-500 ease-in-out"
          : "blur-none duration-500 ease-in-out"
      }`}
    >
      <MyProjectDetails
        projectDetails={projectDetails}
        isLight={isLight}
        splashStatus={splashStatus}
      />
    </div>
  );
};

export default Projects;
