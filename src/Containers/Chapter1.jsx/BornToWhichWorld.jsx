import React, { useEffect, useRef, useState } from "react";
import CarouselCont from "../../components/CarouselCont";
import MainBtn from "../../components/MainBtn";
import BornToWhichRole from "./BornToWhichRole";

const BornToWhichWorld = ({ onBack, birthSex, playerName }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const intervalRef = useRef(null);
  const [moveNext, setMoveNext] = useState(false);
  const [display, setDisplay] = useState(`visible`);

  let selectedWorld = null;

  //   The following code up to the other comment is from claude.ai, this is for horizontal carousel roulette.
  const cards = [
    { id: 1, title: "Earth" },
    { id: 2, title: "Apocalyptic" },
    { id: 3, title: "Fantasy" },
  ];

  const startRoulette = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedCard(null);

    let speed = 100;
    let cycles = 0;
    const maxCycles = 20 + Math.floor(Math.random() * 15);

    const spin = () => {
      setCurrentHighlight((prev) => (prev + 1) % 3);
      cycles++;

      if (cycles > maxCycles * 0.7) {
        speed += 30;
      }

      if (cycles >= maxCycles) {
        const finalChoice = Math.floor(Math.random() * 3);
        setCurrentHighlight(finalChoice);
        setSelectedCard(finalChoice);
        setIsSpinning(false);
        clearInterval(intervalRef.current);
      } else {
        intervalRef.current = setTimeout(spin, speed);
      }
    };
    spin();
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, []);

  // This is for transferring data to other components

  if (selectedCard !== null && !isSpinning) {
    selectedWorld = cards[selectedCard].title;
  }
  useEffect(() => {
    if (selectedWorld && !isSpinning) {
      setTimeout(() => {
        setMoveNext(true);
      }, 2000);
    }
  }, [selectedWorld, isSpinning]);
  if (moveNext) {
    return (
      <BornToWhichRole
        selectedWorld={selectedWorld}
        birthSex={birthSex}
        playerName={playerName}
      />
    );
  }

  function prevBtn() {
    onBack();
  }

  return (
    <div className="flex flex-col text-gray-300 justify-center w-full h-full">
      <div className="flex flex-col h-[90%] w-full justify-center">
        {playerName} {birthSex}
        <div className="h-[60%] gap-5 w-[58%] self-center m-[20px] justify-center text-gray-300 flex flex-row">
          {cards.map((card, index) => (
            <CarouselCont
              key={card.id}
              contName={card.title}
              isHighlighted={
                (isSpinning && currentHighlight === index) ||
                selectedCard === index
              }
              isSelected={selectedCard === index}
            />
          ))}
        </div>
        {selectedWorld && (
          <p className="text-gray-300 text-2xl text-center">
            Congratulations! You are reborn in{" "}
            <span className="font-bold">{selectedWorld}</span> world!
          </p>
        )}
        {!selectedWorld && (
          <MainBtn
            mainBtn={startRoulette}
            disabled={isSpinning}
            mainBtnName={
              isSpinning ? "Spinning.." : "Spin to select your world!"
            }
          />
        )}
      </div>
      {!selectedWorld && <MainBtn mainBtn={prevBtn} mainBtnName="Back" />}
    </div>
  );
};

export default BornToWhichWorld;
