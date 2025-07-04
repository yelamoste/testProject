import React, { useEffect, useState } from "react";
import CharacterAttrib from "./CharacterAttrib";
import MenuButton from "../../components/MenuButton";
import Tier from "../../components/Tier";
import Class from "../../components/Class";
import AttributesMenu from "./AttributesMenu";
import MapMenu from "./MapMenu";
import MainBtn from "../../components/MainBtn";
import Profile from "./Profile";
// import usersJson from "../../json/users.json";

const MainMenu = (props) => {
  const [display, setDisplay] = useState("Character");
  const playerName = props.playerName;
  const birthSex = props.birthSex;
  const selectedWorld = props.selectedWorld;
  const finalRole = props.finalRole;
  const mainBtn = props.mainBtn;
  // const strengthStat = props.strengthStat;
  // const magicStat = props.magicStat;
  // const essenceStat = props.essenceStat;
  // const intelligenceStat = props.intelligenceStat;
  // const luckStat = props.luckStat;

  const displayBtn = (displayCont) => () => {
    setDisplay(displayCont);
  };

  const title = "< No Title >";

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch(usersJson)
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // if (!data) {
  //   return <div className="">Loading....</div>;
  // }
  // console.log(data);
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex flex-row center w-[100%] justify-evenly h-[93%] animate-fadeIn">
        <div className="font-silkscreen h-[100%] w-[20%] bg-gray-900 rounded-2xl flex flex-col overflow-hidden">
          <MenuButton btnName="Character" display={displayBtn("Character")} />
          <MenuButton btnName="Attributes" display={displayBtn("Attributes")} />
          <MenuButton btnName="Map" display={displayBtn("Map")} />
          <MenuButton btnName="Profile" display={displayBtn("Profile")} />
        </div>
        <div className="h-[100%] w-[78%] bg-gray-900 rounded-2xl flex flex-row">
          {display === "Character" ? (
            <>
              <div className="h-[98%] w-[60%] self-center ">
                <div className="h-[60%] w-[calc(100% - 10px)] rounded-3xl m-[5px]"></div>
                <div className="h-[35.5%] w-[calc(100% - 20px)] rounded-2xl m-[10px] animate-fadeIn bg-gray-800">
                  <h2 className=" text-2xl text-gray-300 text-center p-[10px] uppercase font-silkscreen font-extrabold">
                    {playerName}
                  </h2>
                  <p className="text-gray-400 flex flex-row self-center justify-center text-center font-orbitron items-center content-center text-sm">
                    <Tier tierRanking="E-tier" />
                    -tier
                  </p>
                  <p className="font-orbitron text-gray-400 text-center text-sm mt-[20px]">
                    Class: <Class classGroup="Hero" />
                  </p>
                  <p className="font-orbitron text-gray-400 text-center text-sm">
                    Title: {title}
                  </p>
                  <p className="font-orbitron text-gray-400 text-center text-sm">
                    Type: Mutant
                  </p>
                </div>
              </div>
              <CharacterAttrib
              // key={data.id}
              // strengthStat={data.defStat.strength}
              // magicStat={data.defStat.magic}
              // essenceStat={data.defStat.essence}
              // intelligenceStat={data.defStat.intelligence}
              // luckStat={data.defStat.luck}
              />
            </>
          ) : display === "Attributes" ? (
            <>
              <AttributesMenu />
            </>
          ) : display === "Map" ? (
            <>
              <MapMenu selectedWorld={selectedWorld} />
            </>
          ) : display === "Profile" ? (
            <>
              <Profile
                selectedWorld={selectedWorld}
                playerName={playerName}
                finalRole={finalRole}
                birthSex={birthSex}
              />
            </>
          ) : null}
        </div>
      </div>
      <MainBtn mainBtnName="Exit" mainBtn={mainBtn} />
    </div>
  );
};
export default MainMenu;
