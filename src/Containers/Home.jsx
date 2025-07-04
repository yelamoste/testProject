import React, { useEffect, useState } from "react";
import nextBtnSound from "/sound/nextBtn.mp3";
import Introduction from "./Introductory/Introduction";
import { TEXT_ANIMATION_DURATION } from "../Constants";
import Chapter1 from "./Chapter1/Chapter1";

const Home = (props) => {
  const [nextDir, setNextDir] = useState("HomeDir");
  // const [guideDir, setGuideDir] = useState("");
  const sound = new Audio(nextBtnSound);
  const btnSound = sound.play();
  let playerName = props.name;
  const nameBtn = props.nameBtn;

  if (!playerName) {
    playerName = "Hero";
  }

  const soundDuration = TEXT_ANIMATION_DURATION - 400;
  console.log("soundDuration: ", soundDuration);

  const nextBtn = (guideDir) => () => {
    setTimeout(() => {
      setNextDir(guideDir);
    }, soundDuration);
    btnSound;
  };

  useEffect(() => {
    console.log("Direction changed to:", nextDir);
  }, [nextDir]);

  const guideTextStyles = {
    fontFamily: "var(--font-silkscreen)",
    color: "white",
  };

  const contentMessage = {
    id: "contMsg",
    message: [
      `Player ${playerName}, Welcome to the Faraway Land!`,
      ` I'm Wysteria Oliver, a Tech Enthusiast.`,
    ],
  };
  const contentMessage2 = {
    id: "contMsg2",
    message: [
      ` My life as a Tech Enthusiast is never a boring life to have, which is why I participated in an orginization called Faraday Org.`,
      ` In order for me to get that fulfilling feeling, I need a guide.`,
      `So, I decided that you will be my guide for my Faraway adventure. :)`,
      `So, ${playerName}..`,
      `Let's go and help me figure life ahead!`,
    ],
  };

  const skipBtn = () => {
    setNextDir("GuideDir2");
  };
  return (
    <>
      {nextDir === "HomeDir" ? (
        <>
          <Introduction
            bgImage="bg-[url(/images/Faraway-bg.webp)]"
            guideTextStyles={guideTextStyles}
            nextBtn={nextBtn("GuideDir1")}
            playerName={playerName}
            contentMessage={contentMessage}
            btnText="Next"
          />
          <div className="flex flex-row w-[60%] justify-evenly self-center">
            <button
              className=" text-gray-500 cursor-pointer hover:text-gray-50 hover:before:content-['[_'] hover:after:content-['_]'] ease-in font-silkscreen font-normal"
              onClick={nameBtn}
            >
              Back
            </button>
            <button
              className=" text-gray-500 cursor-pointer hover:text-gray-50 hover:before:content-['[_'] hover:after:content-['_]'] ease-in font-silkscreen font-normal"
              onClick={skipBtn}
            >
              Skip
            </button>
          </div>
        </>
      ) : nextDir === "GuideDir1" ? (
        <Introduction
          guideTextStyles={guideTextStyles}
          contentMessage={contentMessage2}
          nextBtn={nextBtn("GuideDir2")}
          backBtn="true"
          returnBtn={nextBtn("HomeDir")}
          btnText="Proceed"
        />
      ) : nextDir === "GuideDir2" ? (
        <Chapter1 playerName={playerName} />
      ) : null}
    </>
  );
};

export default Home;
