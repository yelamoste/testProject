import React, { useEffect, useState } from "react";
import nextBtnSound from "/src/assets/sound/nextBtn.mp3";
import Introduction from "./Introductory/Introduction";
import { TEXT_ANIMATION_DURATION } from "../Constants";
import { MainMenu } from "./MainMenu/MainMenu";

const Home = (props) => {
  const [nextDir, setNextDir] = useState("HomeDir");
  // const [guideDir, setGuideDir] = useState("");
  const btnSound = new Audio(nextBtnSound).play();
  let playerName = props.name;

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

  const contentMessage = [
    `Player ${playerName}, Welcome to the Faraway Land!`,
    ` I'm Wysteria Oliver, a Tech Enthusiast.`,
  ];
  const contentMessage2 = [
    ` My life as a Tech Enthusiast is never a boring life to have, which is why I participated in an orginization called Faraday Org.`,
    ` In order for me to get that fulfilling feeling, I need a guide.`,
    `So, I decided that you will be my guide for my Faraway adventure. :)`,
    `So, ${playerName}..`,
    `Let's go and help me figure life ahead!`,
  ];

  return (
    <>
      {nextDir === "HomeDir" ? (
        <Introduction
          bgImage="bg-[url(/src/assets/images/Faraway-bg.png)]"
          guideTextStyles={guideTextStyles}
          nextBtn={nextBtn("GuideDir1")}
          playerName={playerName}
          contentMessage={contentMessage}
          btnText="Next"
        />
      ) : nextDir === "GuideDir1" ? (
        <>
          <Introduction
            guideTextStyles={guideTextStyles}
            contentMessage={contentMessage2}
            nextBtn={nextBtn("GuideDir2")}
            backBtn="true"
            returnBtn={nextBtn("HomeDir")}
            btnText="Proceed"
          />
        </>
      ) : (
        <MainMenu />
      )}
    </>
  );
};

export default Home;
