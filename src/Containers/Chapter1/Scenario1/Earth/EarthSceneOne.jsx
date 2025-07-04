import React, { useEffect, useState } from "react";

const EarthSceneOne = () => {
  const [currentSequence, setCurrentSequence] = useState(0);

  const sentences = [
    `I woke up one day seeing myself as someone I read in the book..`,
    `She was the terrifying character that I never once imagine i'd take control of..`,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSequence((prev) =>
        prev < sentences.length - 1 ? prev + 1 : prev
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="justify-center self-center flex h-full w-full">
      <p className={`animate-fadeIn text-gray-300 self-center text-center`}>
        {sentences[currentSequence]}
      </p>
    </div>
  );
};

export default EarthSceneOne;
