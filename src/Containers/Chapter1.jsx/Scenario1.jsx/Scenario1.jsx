import React, { useState } from "react";
import EarthSceneOne from "./Earth/EarthSceneOne";

const Scenario1 = (props) => {
  const sceneOneBgImg = props.sceneOneBgImg;
  const world = props.world;

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
              Display Apocalyptic
            </div>
          </>
        ) : world === "Fantasy" ? (
          <>
            <div className={`${sceneOneBgImg} bg-cover h-full w-full`}>
              Display fantasy
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Scenario1;
