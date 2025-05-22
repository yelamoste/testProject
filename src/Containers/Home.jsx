import React, { useState } from "react";
import nextBtn from "/src/assets/sound/nextBtn.mp3";
import { TypeAnimation } from "react-type-animation";

const Home = (props) => {
  const [nextDir, setNextDir] = useState("HomeDir");
  const btnSound = new Audio(nextBtn).play();
  const playerName = props.name;

  const nextBtn1 = () => {
    setTimeout(() => {
      setNextDir("GuideDir1");
    }, 700);
    btnSound;
    console.log("From home to guidedir1");
  };

  const nextBtn2 = () => {
    setTimeout(() => {
      setNextDir("GuideDir2");
    }, 700);
    btnSound;
    console.log("From guidedir1 to guidedir2");
  };

  const nextBtn3 = () => {
    setTimeout(() => {
      setNextDir("GuideDir3");
    }, 700);
    btnSound;
    console.log("From guidedir1 to guidedir2");
  };

  const homeBtn = () => {
    setTimeout(() => {
      setNextDir("HomeDir");
    }, 700);
    btnSound;
    console.log("From guidedir1 to home");
  };

  const guideTextStyles = {
    fontFamily: "var(--font-silkscreen)",
    color: "white",
    margin: "15px",
  };

  return (
    <>
      {nextDir == "HomeDir" ? (
        <div className="flex flex-col bg-amber-50 border-2 w-[60%] h-[70%] max-md:w-[90%] self-center text-wrap">
          <div className="h-[80%] w-[100%]"></div>
          <div className="h-[20%] w-[90%] justify-center self-center mb-[10px]  rounded-[6px] bg-amber-950">
            <TypeAnimation
              sequence={[
                `Player ${playerName}, Welcome to the Faraway Land`,
                1000,
              ]}
              repeat={0}
              speed={50}
              style={guideTextStyles}
            />

            <button
              className="z-1 w-[10%] h-[50%] border-2 rounded-[10px] cursor-pointer bg-gray-950 text-white"
              onClick={nextBtn1}
            >
              Next
            </button>
          </div>
        </div>
      ) : nextDir == "GuideDir1" ? (
        <>
          <div className="flex flex-col bg-amber-50 border-2 w-[60%] h-[70%] max-md:w-[90%] self-center text-wrap">
            <div className="h-[80%] w-[100%]"></div>
            <div className="h-[20%] w-[90%] justify-center self-center mb-[10px]  rounded-[6px] bg-amber-950">
              <TypeAnimation
                sequence={[`First of all,`, 1000]}
                repeat={0}
                speed={50}
                style={guideTextStyles}
              />
              <button
                className="z-1 w-[10%] h-[50%] border-2 rounded-[10px] cursor-pointer bg-gray-950 text-white"
                onClick={homeBtn}
              >
                Back
              </button>
              <button
                className="z-1 w-[10%] h-[50%] border-2 rounded-[10px] cursor-pointer bg-gray-950 text-white"
                onClick={nextBtn2}
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : nextDir == "GuideDir2" ? (
        <>
          <div className="flex flex-col bg-amber-50 border-2 w-[60%] h-[70%] max-md:w-[90%] self-center text-wrap">
            <div className="h-[80%] w-[100%]"></div>
            <div className="h-[20%] w-[90%] justify-center self-center mb-[10px]  rounded-[6px] bg-amber-950">
              {/* <p></p> */}
              <TypeAnimation
                sequence={[`Cool, so lets gosdasdasdasdasd`, 1000]}
                repeat={0}
                speed={50}
                style={guideTextStyles}
              />

              <button
                className="z-1 w-[10%] h-[50%] border-2 rounded-[10px] cursor-pointer bg-gray-950 text-white"
                onClick={nextBtn1}
              >
                Back
              </button>
              <button
                className="z-1 w-[10%] h-[50%] border-2 rounded-[10px] cursor-pointer bg-gray-950 text-white"
                onClick={nextBtn3}
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col bg-amber-50 border-2 w-[60%] h-[70%] max-md:w-[90%] self-center text-wrap">
            <div className="h-[80%] w-[100%]"></div>
            <div className="h-[20%] w-[90%] justify-center self-center mb-[10px]  rounded-[6px] bg-amber-950">
              <p>Let's go</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
