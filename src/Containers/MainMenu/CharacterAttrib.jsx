import React from "react";
import AttributeSummary from "../../components/AttributeSummary";

const CharacterAttrib = () => {
  return (
    <div className="h-[95%] w-[39%] justify-between self-center bg-gray-950 rounded-2xl origin-right animate-slideRight">
      <div className="h-[60%] w-[100%] rounded-4xl "></div>
      <div className="h-[40%] w-[50%] flex flex-col self-center place-self-center justify-center">
        <AttributeSummary
          attributeName="Strength"
          attributeValue="30"
          addAttribVal="30"
        />
        <AttributeSummary
          attributeName="Magic Power"
          attributeValue="20"
          //   addAttribVal="30"
        />
        <AttributeSummary
          attributeName="Essence"
          attributeValue="30"
          addAttribVal="30"
        />
        <AttributeSummary
          attributeName="Intelligence"
          attributeValue="30"
          addAttribVal="30"
        />
        <AttributeSummary
          attributeName="Luck"
          attributeValue="30"
          addAttribVal="30"
        />
      </div>
    </div>
  );
};

export default CharacterAttrib;
