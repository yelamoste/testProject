import React, { useEffect, useRef, useState } from "react";
import MainBtn from "../../components/MainBtn";
import BornToWhichWorld from "./BornToWhichWorld";
import CarouselCont from "../../components/CarouselCont";
import Chapter1 from "./Chapter1";

const BornToWhichRole = ({ selectedWorld, birthSex, playerName }) => {
  const [prevBtnState, setPrevBtnState] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [moveNext, setMoveNext] = useState(false);
  const intervalRef = useRef(null);
  let finalRole = null;
  // Role data structure
  const roleData = {
    Earth: {
      Female: [
        { id: 1, role: "Princess" },
        { id: 2, role: "Noble" },
        { id: 3, role: "Peasant" },
      ],
      Male: [
        { id: 1, role: "Prince" },
        { id: 2, role: "Nobleman" },
        { id: 3, role: "Peasant" },
        { id: 4, role: "Merchant" },
        { id: 5, role: "Country Boy" },
      ],
    },
    Apocalyptic: {
      Female: [
        { id: 1, role: "S-Rank Princess" },
        { id: 2, role: "Beggar" },
        { id: 3, role: "Watcher" },
        { id: 4, role: "High Schooler" },
        { id: 5, role: "C-Ranker" },
      ],
      Male: [
        { id: 1, role: "S-Rank Prince" },
        { id: 2, role: "Beggar" },
        { id: 3, role: "Watcher" },
        { id: 4, role: "High Schooler" },
        { id: 5, role: "C-Ranker" },
      ],
    },
    Fantasy: {
      Female: [
        { id: 1, role: "Princess" },
        { id: 2, role: "Noble" },
        { id: 3, role: "Wizard" },
        { id: 4, role: "Swordman" },
        { id: 5, role: "Apothecary" },
      ],
      Male: [
        { id: 1, role: "Prince" },
        { id: 2, role: "Noble" },
        { id: 3, role: "Wizard" },
        { id: 4, role: "Swordman" },
        { id: 5, role: "King" },
      ],
    },
  };

  const prevBtn = () => setPrevBtnState(true);

  if (prevBtnState) return <BornToWhichWorld />;

  const currentRoles = roleData[selectedWorld]?.[birthSex] || [];

  const startRoulette = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedCard(null);

    let speed = 100;
    let cycles = 0;
    const maxCycles = 20 + Math.floor(Math.random() * 15);

    const spin = () => {
      setCurrentHighlight((prev) => (prev + 1) % currentRoles.length);
      cycles++;

      if (cycles > maxCycles * 0.7) speed += 30;

      if (cycles >= maxCycles) {
        const finalChoice = Math.floor(Math.random() * currentRoles.length);
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
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, []);

  finalRole = currentRoles[selectedCard]?.role;

  useEffect(() => {
    if (finalRole && !isSpinning) {
      setTimeout(() => {
        setMoveNext(true);
      }, 2000);
    }
  }, [finalRole, isSpinning]);
  if (moveNext) {
    return (
      <Chapter1
        finalRole={finalRole}
        selectedWorld={selectedWorld}
        birthSex={birthSex}
        playerName={playerName}
      />
    );
  }

  return (
    <div className="flex flex-col text-gray-300 justify-center w-full h-full">
      <div className="flex flex-col h-[90%] w-full justify-center">
        {playerName}
        {birthSex}
        {selectedWorld}
        <div
          className={`h-[60%] gap-5 ${
            currentRoles.length === 5 ? "w-[80%]" : "w-[58%]"
          } self-center m-[20px] justify-center text-gray-300 flex flex-row`}
        >
          {currentRoles.map((roleItem, index) => (
            <CarouselCont
              key={roleItem.id}
              contName={roleItem.role}
              isHighlighted={
                (isSpinning && currentHighlight === index) ||
                selectedCard === index
              }
              isSelected={selectedCard === index}
            />
          ))}
        </div>
        {selectedCard !== null && (
          <p className="text-gray-300 text-2xl text-center">
            Congratulations! You are reborn as a{" "}
            <span className="font-bold">{finalRole}</span>
          </p>
        )}

        {!finalRole && (
          <MainBtn
            mainBtn={startRoulette}
            disabled={isSpinning}
            mainBtnName={
              isSpinning ? "Spinning.." : "Spin to select your role!"
            }
          />
        )}
      </div>
      {!finalRole && <MainBtn mainBtn={prevBtn} mainBtnName="Back" />}
    </div>
  );
};

export default BornToWhichRole;
