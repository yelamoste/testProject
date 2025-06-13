import React from "react";
import MainBtn from "../../components/MainBtn";
import Scenario1 from "./Scenario1.jsx/Scenario1";
import SceneBg from "./Scenario1.jsx/SceneBg";

const MainDirectory = ({
  handleMenuClick,
  birthSex,
  selectedWorld,
  finalRole,
  playerName,
}) => {
  return (
    <div className="flex flex-col w-[100%] h-[100%]">
      <div className=" bg-gray-950 h-[95%] w-[95%] self-center rounded-2xl flex justify-center animate-fadeIn">
        <SceneBg
          birthSex={birthSex}
          playerName={playerName}
          selectedWorld={selectedWorld}
          finalRole={finalRole}
        />
      </div>
      <MainBtn mainBtnName="Settings" mainBtn={handleMenuClick} />
      {/* for temp */}
    </div>
  );
};

export default MainDirectory;
