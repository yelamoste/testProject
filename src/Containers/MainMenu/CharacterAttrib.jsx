import React, { useEffect } from "react";
import AttributeSummary from "../../components/AttributeSummary";
import CharacterPentagonLevel from "../../components/CharacterPentagonLevel";

const CharacterAttrib = (props) => {
  const strengthStat = props.strengthStat;
  const magicStat = props.magicStat;
  const essenceStat = props.essenceStat;
  const intelligenceStat = props.intelligenceStat;
  const luckStat = props.luckStat;

  console.log(strengthStat);
  return (
    <div className="h-[95%] w-[39%] justify-between self-center bg-gray-950 rounded-2xl origin-right animate-slideRight">
      <div className="h-[60%] w-[100%] rounded-4xl ">
        <CharacterPentagonLevel />
      </div>
      <div className="h-[40%] w-[50%] flex flex-col self-center place-self-center justify-center">
        <AttributeSummary
          attributeName="Strength"
          attributeValue={strengthStat}
          addAttribVal="30"
        />
        <AttributeSummary
          attributeName="Magic Power"
          attributeValue={magicStat}
          //   addAttribVal="30"
        />
        <AttributeSummary
          attributeName="Essence"
          attributeValue={essenceStat}
          addAttribVal="30"
        />
        <AttributeSummary
          attributeName="Intelligence"
          attributeValue={intelligenceStat}
          addAttribVal="30"
        />
        <AttributeSummary
          attributeName="Luck"
          attributeValue={luckStat}
          addAttribVal="30"
        />
      </div>
    </div>
  );
};

export default CharacterAttrib;
