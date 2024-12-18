import DisplayPicture from "./DisplayPicture";
import "/src/index.css";
import ScrollDownArrow from "./ScrollDownArrow";
import Navbar from "./Navbar";
import { useState, useRef, useEffect } from "react";
import TypingAnimate from "./TypingAnimate";
import ConsoleMsg from "./ConsoleMsg";

const Intro = ({
  backToTop,
  splashStatus,
  scrollHandler,
  globalBlur,
  toggleTheme,
  isLight,
}) => {
  const topRef = useRef(null);
  // console.log(backToTop);
  if (backToTop) {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  const [isBlur, setIsBlur] = useState(false);

  const blurContent = (isopen) => {
    setIsBlur(!isopen);
    globalBlur(!isopen);
  };
  //console.log(splashStatus);
  return (
    <div>
      <ConsoleMsg />
      <div
        ref={topRef}
        className={`flex flex-col min-h-screen ${
          splashStatus ? "" : "relative"
        }`}
      >
        <Navbar
          splashStatus={splashStatus}
          invokeBlur={blurContent}
          toggleTheme={toggleTheme}
          isLight={isLight}
        />
        <div
          className={`flex justify-center items-center min-h-screen md:mt-20 lg:mt-0 ${
            isBlur
              ? "md:blur-none blur-md duration-500 ease-in-out"
              : "blur-none duration-500 ease-in-out"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 xl:px-80 lg:px-52 md:px-36 px-8">
            <div
              className={`col-span-2 md:row-span-4 md:row-start-1 flex justify-center md:items-center`}
            >
              <DisplayPicture splashStatus={splashStatus} isLight={isLight} />
            </div>
            <div className="col-span-2 md:row-start-1 row-start-2 md:row-span-2 md:col-span-3 md:col-start-3 text-center md:text-start flex md:justify-start justify-center items-center md:items-end mt-10 px-10 md:mt-0">
              {/*using an external animation library*/}
              <TypingAnimate splashStatus={splashStatus} isLight={isLight} />

              {/* <div
                className={
                  splashStatus
                    ? `text-darktheme md:text-5xl text-3xl`
                    : `text-white inline-block overflow-hidden whitespace-nowrap font-mono animate-typing border-r-4 md:text-5xl text-3xl`
                }
              >
                Hi...<span className="text-darktheme">.</span>
              </div> */}
            </div>

            <div className="col-span-3 row-start-3 md:col-start-3 md:text-start flex justify-center md:justify-start px-10 text-2xl md:text-3xl mt-6 md:mt-0 md:pt-2 pt-0">
              <span className="md:self-end self-center">I'm </span>{" "}
              <span
                className={`ps-2 ${
                  isLight
                    ? "text-highlightBrown underline decoration-wavy decoration-highlightBrown decoration-1"
                    : "text-textBlue"
                } self-end`}
              >
                Jasur.
              </span>
            </div>
            <div className="col-span-3 md:row-start-4 row-star md:col-start-3 md:text-start text-center flex justify-center md:justify-start hyphens-none px-16 sm:px-12 md:px-10 md:text-xl">
              <span className="md:self-end self-center">
                I am a Full Stack Developer with experience in creating{" "}
                <span className="text-newOrange">user-friendly,</span>{" "}
                responsive websites and web applications. On the frontend, I
                work with <span className="text-newOrange">React</span>,{" "}
                <span className="text-textBlue">Vite</span>,{" "}
                <span className="text-newYellow">Next.js</span>, and{" "}
                <span className="text-newYellow">Tailwind CSS</span>. On the
                backend, I have experience with{" "}
                <span className="text-newOrange">Node.js</span>,{" "}
                <span className="text-textBlue">Express.js</span>, and{" "}
                <span className="text-newYellow">NestJS</span>, as well as
                working with <span className="text-newOrange">PostgreSQL</span>{" "}
                and <span className="text-textBlue">MongoDB</span> databases.
                <br />
                <br />
                {/* I'm eager to contribute and grow in a collaborative team. */}
              </span>
            </div>
          </div>
        </div>
        <ScrollDownArrow
          splashStatus={splashStatus}
          btnClicked={scrollHandler}
          blurStatus={isBlur}
          isLight={isLight}
        />
      </div>
    </div>
  );
};

export default Intro;
