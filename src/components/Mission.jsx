import React from "react";

const Mission = ({ missionName, description }) => {
  return (
    <div className="flex relative justify-center items-center w-full h-full content-center">
      <div className="flex w-[35%] h-[90%] absolute rounded-[12px] justify-center place-self-center z-10 opacity-70 bg-purple-950 border-2 border-purple-900"></div>
      <div className="flex w-[35%] h-[90%] absolute z-20 rounded-[12px] border-2">
        <div className="m-[10px] w-[100%] flex-col flex">
          <h3 className="self-center text-center font-bold text-zinc-50 font-orbitron">
            {missionName}
            Mission
          </h3>
          <p className="text-zinc-50 text-center m-[15px] ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
