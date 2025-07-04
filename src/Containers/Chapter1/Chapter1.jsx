import React, { useEffect, useState } from "react";
import MainDirectory from "./MainDirectory";
import BirthIdentity from "./BirthIdentity";
import MainMenu from "../../Containers/MainMenu/MainMenu";

const Chapter1 = (props) => {
  const playerName = props.playerName;
  const finalRole = props.finalRole;
  const selectedWorld = props.selectedWorld;
  const birthSex = props.birthSex;

  const [chapDir, setChapDir] = useState("");

  useEffect(() => {
    if (birthSex && finalRole && selectedWorld) {
      setChapDir("MainDirectory");
    } else {
      setChapDir("InitialInfo");
    }
  }, [birthSex, finalRole, selectedWorld]);

  console.log(playerName);
  console.log(chapDir);

  const handleMenuClick = (selectedchapDir) => () => {
    setChapDir(selectedchapDir);
  };

  if (!chapDir) return null;
  return (
    <>
      <div className="h-full w-full">
        {chapDir === "MainDirectory" ? (
          <>
            <MainDirectory
              handleMenuClick={handleMenuClick("MainMenu")}
              birthSex={birthSex}
              selectedWorld={selectedWorld}
              finalRole={finalRole}
              playerName={playerName}
            />
          </>
        ) : chapDir === "MainMenu" ? (
          <MainMenu
            mainBtn={handleMenuClick("MainDirectory")}
            playerName={playerName}
            birthSex={birthSex}
            selectedWorld={selectedWorld}
            finalRole={finalRole}
          />
        ) : chapDir === "InitialInfo" ? (
          <BirthIdentity playerName={playerName} />
        ) : null}
      </div>
    </>
  );
};

export default Chapter1;
