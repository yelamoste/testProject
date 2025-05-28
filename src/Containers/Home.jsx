import React, { useEffect, useState } from "react";
import nextBtnSound from "/src/assets/sound/nextBtn.mp3";
import Introduction from "./Introductory/Introduction";
import { TEXT_ANIMATION_DURATION } from "../Constants";

const Home = (props) => {
  const [nextDir, setNextDir] = useState("HomeDir");
  // const [guideDir, setGuideDir] = useState("");
  const btnSound = new Audio(nextBtnSound).play();
  const playerName = props.name;

  const nextBtn = (guideDir) => () => {
    setTimeout(() => {
      setNextDir(guideDir);
    }, TEXT_ANIMATION_DURATION);
    btnSound;
  };
  useEffect(() => {
    console.log("Direction changed to:", nextDir);
  }, [nextDir]);

  const guideTextStyles = {
    fontFamily: "var(--font-silkscreen)",
    color: "white",
  };

  const contentMessage = `Player ${playerName}, Welcome to the Faraway Land! I'm Wysteria Oliver, a Tech Enthusiast.`;
  const contentMessage2 = [
    ` My life as a Tech Enthusiast is never a boring life to have, which is why I participated in an orginization called Faraday Org.`,
    ` In order for me to get that fulfilling feeling, I need a guide.`,
    `So, I decided that you will be my guide for my Faraway adventure. :)`,
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
        />
      ) : nextDir === "GuideDir1" ? (
        <>
          <Introduction
            guideTextStyles={guideTextStyles}
            contentMessage={contentMessage2}
            nextBtn={nextBtn("GuideDir2")}
            backBtn="true"
            returnBtn={nextBtn("HomeDir")}
          />
        </>
      ) : nextDir === "GuideDir2" ? (
        <>
          <Introduction
            contentMessage={`Let's go `}
            guideTextStyles={guideTextStyles}
            nextBtn={() => console.log("You’re at the final screen.")}
            backBtn="true"
            returnBtn={nextBtn("GuideDir1")}
          />
        </>
      ) : null}
    </>
  );
};

export default Home;
