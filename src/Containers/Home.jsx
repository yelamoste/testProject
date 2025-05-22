import React, { useState } from "react";
import nextBtn from "/src/assets/sound/nextBtn.mp3";

const Home = (props) => {
  const [nextDir, setNextDir] = useState("HomeDir");

  const nextBtn1 = () => {
    setTimeout(() => {
      setNextDir("GuideDir1");
    }, 500);
    new Audio(nextBtn).play();
  };
  const nextBtn2 = () => {
    setTimeout(() => {
      setNextDir("GuideDir2");
    }, 500);
    new Audio(nextBtn).play();
  };

  return (
    <>
      {nextDir == "HomeDir" ? (
        <div className="flex flex-col bg-amber-50 border-2 w-[60%] h-[70%] max-md:w-[90%] self-center text-wrap">
          <div className="h-[80%] w-[100%]"></div>
          <div className="h-[20%] w-[90%] justify-center self-center mb-[10px]  rounded-[6px] bg-amber-950">
            <p className="font-silkscreen text-white m-[15px]">
              Player {props.name}, Welcome to the Faraway Land
            </p>
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
              <p className="font-silkscreen text-white m-[15px]">
                First of all,
              </p>
              <button
                className="z-1 w-[10%] h-[50%] border-2 rounded-[10px] cursor-pointer bg-gray-950 text-white"
                onClick={() => setNextDir("HomeDir")}
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
      ) : (
        <>
          <div className="flex flex-col bg-amber-50 border-2 w-[60%] h-[70%] max-md:w-[90%] self-center text-wrap">
            <div className="h-[80%] w-[100%]"></div>
            <div className="h-[20%] w-[90%] justify-center self-center mb-[10px]  rounded-[6px] bg-amber-950">
              <p className="font-silkscreen text-white m-[15px]">Cool</p>
              <button
                className="z-1 w-[10%] h-[50%] border-2 rounded-[10px] cursor-pointer bg-gray-950 text-white"
                onClick={nextBtn1}
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
      )}
    </>
  );
};

export default Home;
