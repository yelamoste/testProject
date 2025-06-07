import React from "react";
import CharacterAttrib from "./CharacterAttrib";

export const MainMenu = () => {
  return (
    <div className="flex flex-row center w-[100%] justify-evenly  h-[100%] ">
      <div className="h-[100%] w-[20%] bg-gray-900 rounded-2xl flex flex-col overflow-hidden">
        <button className="text-gray-300 text-center w-[100%] h-[3rem] hover:bg-gray-800 mt-10 mb-10 cursor-pointer">
          Character
        </button>
      </div>
      <div className="h-[100%] w-[78%] bg-gray-900 rounded-2xl flex flex-row">
        <div className="h-[98%] w-[60%] self-center "></div>
        <CharacterAttrib />
      </div>
    </div>
  );
};
