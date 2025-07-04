import React, { useEffect, useState } from "react";
import FirstInteraction from "./FirstInteraction";

const ApocalypticSceneOne = ({ finalRole }) => {
  const [currentSequence, setCurrentSequence] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const sentences = [
    `The world has ended..`,
    `Skies turned dark gray as if it was the end of the world`,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSequence((prev) => {
        if (prev < sentences.length - 1) {
          return prev + 1;
        } else {
          setIsComplete(true);
          return prev;
        }
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  if (isComplete) {
    return <FirstInteraction finalRole={finalRole} />;
  }

  return (
    <div className="justify-center self-center flex h-full w-full">
      <p className={` animate-fadeIn text-gray-300 self-center text-center`}>
        {sentences[currentSequence]}
      </p>
    </div>
  );
};

export default ApocalypticSceneOne;
