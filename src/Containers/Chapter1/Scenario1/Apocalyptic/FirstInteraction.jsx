import React from "react";
import Mission from "../../../../components/Mission";
import CharacterAttrib from "../../../MainMenu/CharacterAttrib";

const FirstInteraction = ({ finalRole }) => {
  let roleName = null;
  let defStat = {
    strengthStat: null,
    magicStat: null,
    essenceStat: null,
    intelligenceStat: null,
    luckStat: null,
  };
  let additionalDescription = null;
  if (finalRole === "S-Rank Princess") {
    roleName = "Winter Salvatorre";
    defStat = {
      strengthStat: 85,
      magicStat: 92,
      essenceStat: 88,
      intelligenceStat: 90,
      luckStat: 95,
    };
  } else if (finalRole === "Beggar") {
    roleName = "Daffodil Angeles";
    defStat = {
      strengthStat: 30,
      magicStat: 23,
      essenceStat: 30,
      intelligenceStat: 54,
      luckStat: 29,
    };
  } else if (finalRole === "Watcher") {
    roleName = "Loreign Tristan";
    defStat = {
      strengthStat: 65,
      magicStat: 70,
      essenceStat: 75,
      intelligenceStat: 80,
      luckStat: 60,
    };
  } else if (finalRole === "Schooler") {
    roleName = "Iris May Silvestre";
    defStat = {
      strengthStat: 40,
      magicStat: 35,
      essenceStat: 45,
      intelligenceStat: 70,
      luckStat: 50,
    };
  } else if (finalRole === "C-Ranker") {
    roleName = "Westeria Quin Dexter";
    defStat = {
      strengthStat: 55,
      magicStat: 60,
      essenceStat: 58,
      intelligenceStat: 65,
      luckStat: 62,
    };
  } else null;

  if (finalRole === "S-Rank Princess" || "Watcher" || "C-Ranker") {
    additionalDescription = `Fortunately, you are reborn as ${roleName} who is capable of surviving. `;
  }
  console.log(defStat);
  console.log(defStat.strengthStat);

  return (
    <div className="flex h-full w-full">
      <Mission
        missionName="1st day of Survival "
        description={`Congratulations for surviving your first day!  ${additionalDescription}`}
      />
      <div style={{ display: "none" }}>
        <CharacterAttrib
          strengthStat={defStat.strengthStat}
          magicStat={defStat.magicStat}
          essenceStat={defStat.essenceStat}
          intelligenceStat={defStat.intelligenceStat}
          luckStat={defStat.luckStat}
        />
      </div>
    </div>
  );
};

export default FirstInteraction;
