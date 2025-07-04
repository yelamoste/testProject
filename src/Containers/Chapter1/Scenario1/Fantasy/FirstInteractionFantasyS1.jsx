import React from "react";
import Mission from "../../../../components/Mission";
import CharacterAttrib from "../../../MainMenu/CharacterAttrib";

export const FirstInteractionFantasyS1 = ({ finalRole }) => {
  let roleName = null;
  let strengthStat = null;
  let magicStat = null;
  let essenceStat = null;
  let intelligenceStat = null;
  let luckStat = null;

  if (finalRole === "Princess") {
    roleName = "Alexandria Crown Rumigen";
    strengthStat = 30;
    magicStat = 23;
    essenceStat = 30;
    intelligenceStat = 54;
    luckStat = 29;
  } else if (finalRole === "Noble") {
    roleName = "Melody Daffodil Ruffendaen";
    strengthStat = 27;
    magicStat = 25;
    essenceStat = 40;
    intelligenceStat = 36;
    luckStat = 28;
  } else if (finalRole === "Wizard") {
    roleName = "Sofia Pricilla Anchetta";
    strengthStat = 19;
    magicStat = 52;
    essenceStat = 40;
    intelligenceStat = 37;
    luckStat = 12;
  } else if (finalRole === "Swordman") {
    roleName = "Colleen Trustan";
    strengthStat = 58;
    magicStat = 12;
    essenceStat = 36;
    intelligenceStat = 24;
    luckStat = 28;
  } else if (finalRole === "Apothecary") {
    roleName = "Thea Winterson Acc ";
    strengthStat = 25;
    magicStat = 18;
    essenceStat = 57;
    intelligenceStat = 62;
    luckStat = 22;
  } else null;

  return (
    <div className="flex h-full w-full">
      <Mission
        missionName="First "
        description={`As a new owner of ${roleName}`}
      />
      <div className="hidden">
        <CharacterAttrib
          strengthStat={strengthStat}
          magicStat={magicStat}
          essenceStat={essenceStat}
          intelligenceStat={intelligenceStat}
          luckStat={luckStat}
        />
      </div>
    </div>
  );
};
