import React, { useState } from "react";
import BirthIdentity from "./birthIdentity";
import MainDirectory from "./MainDirectory";
import MainMenu from "../../Containers/MainMenu/MainMenu";

const Chapter1 = (props) => {
  const playerName = props.playerName;
  const [chapDir, setChapDir] = useState("InitialInfo");

  console.log(playerName);
  console.log(chapDir);

  const handleMenuClick = (selectedchapDir) => () => {
    setChapDir(selectedchapDir);
  };
  return (
    <>
      <div className="h-full w-full">
        {chapDir === "MainDirectory" ? (
          <>
            <MainDirectory handleMenuClick={handleMenuClick("MainMenu")} />
          </>
        ) : chapDir === "MainMenu" ? (
          <MainMenu
            playerName={playerName}
            mainBtn={handleMenuClick("MainDirectory")}
          />
        ) : chapDir === "InitialInfo" ? (
          <BirthIdentity />
        ) : null}
      </div>
    </>
  );
};

export default Chapter1;
