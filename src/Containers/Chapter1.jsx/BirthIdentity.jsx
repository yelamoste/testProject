import React, { useState } from "react";
import CarouselCont from "../../components/CarouselCont";
import MainBtn from "../../components/MainBtn";

const BirthIdentity = () => {
  // first is an option to which gender
  // the world genre they'll choose, ideally it would be best to put roulette over here so the user wouldn't have a choice which world they'll be reborn to.
  // after, will be given which role they'll play e.g. world is western or northern dukedom [noble, maid, daughter/son, cat]

  const [birthSex, setBirthSex] = useState("");
  const [birthDirectory, setBirthDirectory] = useState("BirthSex");

  const handleBirthBtnClick = (handleBirthBtnClick) => () => {
    console.log(handleBirthBtnClick);
    setBirthSex(handleBirthBtnClick);
    setBirthDirectory("BornToWhichWorld");
  };

  const handlePrevDir = (prevDirectory) => () => {
    setBirthDirectory(prevDirectory);
  };

  return (
    <>
      <div className="w-[95%] h-[95%] self-center flex justify-center bg-gray-950 place-self-center rounded-2xl">
        {birthDirectory === "BirthSex" ? (
          <>
            <div className="flex  flex-col h-full w-full justify-center">
              <p className="text-center font-semibold text-[20px] m-[10px] text-gray-400">
                Which do you prefer to reborn as?
              </p>
              <div className="h-[60%] w-[60%] self-center  flex flex-row m-[10px] justify-evenly">
                <CarouselCont
                  contImg="#"
                  contName="Male"
                  handleContBtnClick={handleBirthBtnClick("Male")}
                />
                <CarouselCont
                  contImg="#"
                  contName="Female"
                  handleContBtnClick={handleBirthBtnClick("Female")}
                />
              </div>
            </div>
          </>
        ) : birthDirectory === "BornToWhichWorld" ? (
          <>
            <div className="text-gray-300">{birthSex}</div>
            <MainBtn mainBtn={handlePrevDir("BirthSex")} mainBtnName="Back" />
          </>
        ) : birthDirectory === "BornToWhichRole" ? (
          <>
            <div></div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default BirthIdentity;
