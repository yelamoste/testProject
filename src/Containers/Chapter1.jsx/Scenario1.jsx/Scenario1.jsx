import React, { useState } from "react";
import EarthSceneOne from "./Earth/EarthSceneOne";
import ApocalypticSceneOne from "./Apocalyptic/ApocalypticSceneOne";
import FantansySceneOne from "./Fantasy/FantansySceneOne";

const Scenario1 = (props) => {
  const sceneOneBgImg = props.sceneOneBgImg;
  const playerName = props.playerName;
  const world = props.world;
  const finalRole = props.finalRole;

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center">
        {world === "Earth" ? (
          <>
            <div className={`${sceneOneBgImg} bg-cover h-full w-full`}>
              <EarthSceneOne />
            </div>
          </>
        ) : world === "Apocalyptic" ? (
          <>
            <div className={`${sceneOneBgImg} bg-cover h-full w-full`}>
              <ApocalypticSceneOne finalRole={finalRole} />
            </div>
          </>
        ) : world === "Fantasy" ? (
          <>
            <div className={`${sceneOneBgImg} bg-cover h-full w-full`}>
              <FantansySceneOne playerName={playerName} finalRole={finalRole} />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Scenario1;
