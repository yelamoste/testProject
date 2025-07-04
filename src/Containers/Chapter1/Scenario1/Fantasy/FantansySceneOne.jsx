import React, { useEffect, useState } from "react";
import { FirstInteractionFantasyS1 } from "./FirstInteractionFantasyS1";

const FantansySceneOne = ({ playerName, finalRole }) => {
  const [currentSequence, setCurrentSequence] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const sentences = [
    `It was an odd day..`,
    `The wind seems to follow along the dances of the leaves..`,
    `The sun glazes upon the sun kissed skin..`,
    `a person named ${playerName} came and descended from above..`,
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
    return <FirstInteractionFantasyS1 finalRole={finalRole} />;
  }

  return (
    <div className="justify-center self-center flex h-full w-full">
      <p className={` animate-fadeIn text-gray-300 self-center text-center`}>
        {sentences[currentSequence]}
      </p>
    </div>
  );
};

export default FantansySceneOne;
