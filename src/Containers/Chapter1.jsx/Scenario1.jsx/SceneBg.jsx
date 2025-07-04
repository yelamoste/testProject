import React from "react";
import Scenario1 from "./Scenario1";

const SceneBg = ({ finalRole, playerName, selectedWorld, birthSex }) => {
  //usestate for 3 worlds, first world would be earth, apocalypse, and fantasy.
  // In earth, it will be more of nobility romance regression with painful history
  // in apocalypse, it will be more of monster - system/ game
  //  fantasy, is gonna be adventure.

  return (
    <>
      <div className="w-[80%] h-[80%] bg-amber-50 flex flex-col justify-center self-center">
        {selectedWorld === "Earth" ? (
          <Scenario1
            finalRole={finalRole}
            selectedWorld={selectedWorld}
            sceneOneBgImg="bg-[url(/images/Faraway-bg.webp)]"
            world="Earth"
          />
        ) : selectedWorld === "Apocalyptic" ? (
          <Scenario1
            finalRole={finalRole}
            selectedWorld={selectedWorld}
            sceneOneBgImg="bg-gray-700"
            world="Apocalyptic"
          />
        ) : selectedWorld === "Fantasy" ? (
          <Scenario1
            finalRole={finalRole}
            selectedWorld={selectedWorld}
            sceneOneBgImg="bg-gray-700"
            world="Fantasy"
            playerName={playerName}
          />
        ) : null}
      </div>
    </>
  );
};

export default SceneBg;
