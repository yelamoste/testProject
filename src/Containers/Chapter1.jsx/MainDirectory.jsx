import React from "react";
import MainBtn from "../../components/MainBtn";

const MainDirectory = ({
  handleMenuClick,
  birthSex,
  selectedWorld,
  finalRole,
  playerName,
}) => {
  return (
    <div className="flex flex-col w-[100%] h-[100%]">
      <div className=" bg-gray-950 h-[95%] w-[95%] self-center rounded-2xl animate-fadeIn">
        <p className="justify-center flex flex-col gap-5 text-amber-50 h-[50%] w-[50%] text-center">
          {playerName} {birthSex} {selectedWorld} {finalRole}
        </p>
      </div>
      <MainBtn mainBtnName="Settings" mainBtn={handleMenuClick} />
      {/* for temp */}
    </div>
  );
};

export default MainDirectory;
