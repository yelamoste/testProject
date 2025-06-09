import React, { useState } from "react";
import AttributeComponents, {
  AttribReturnBtn,
} from "../../components/AttributeComponents";
import AttributeCont from "../../components/AttributeCont";

const AttributesMenu = () => {
  const [attrib, setAttribDir] = useState("mainAttribCont");

  const attrbDirBtn = (attribDir) => () => {
    setAttribDir(attribDir);
    console.log(attrib);
  };

  return (
    <>
      {attrib === "mainAttribCont" ? (
        <div className="text-gray-500 self-center h-[100%] w-[100%] gap-1.5 justify-center align-middle items-center flex flex-row ">
          <AttributeComponents
            attributeName="Strength"
            imgSrc="#"
            attribDir={attrbDirBtn("strengthDir")}
          />
          <AttributeComponents
            attributeName="Magic Power"
            imgSrc="#"
            attribDir={attrbDirBtn("mpDir")}
          />
          <AttributeComponents
            attributeName="Essence"
            imgSrc="#"
            attribDir={attrbDirBtn("essenceDir")}
          />
          <AttributeComponents
            attributeName="Intelligence"
            imgSrc="#"
            attribDir={attrbDirBtn("intelDir")}
          />
          <AttributeComponents
            attributeName="Luck"
            imgSrc="#"
            attribDir={attrbDirBtn("luckDir")}
          />
        </div>
      ) : attrib === "strengthDir" ? (
        <>
          <div className="flex flex-col w-[100%] h-[100%]">
            <AttribReturnBtn
              btnName="Attributes"
              setAttribDir={setAttribDir}
              attribDir="mainAttribCont"
            />
            <AttributeCont attribName="Strength" />
          </div>
        </>
      ) : attrib === "mpDir" ? (
        <div className="flex flex-col w-[100%] h-[100%]">
          <AttribReturnBtn
            btnName="Attributes"
            setAttribDir={setAttribDir}
            attribDir="mainAttribCont"
          />
          <AttributeCont attribName="Magic Power" />
        </div>
      ) : attrib === "essenceDir" ? (
        <div className="flex flex-col w-[100%] h-[100%]">
          <AttribReturnBtn
            btnName="Attributes"
            setAttribDir={setAttribDir}
            attribDir="mainAttribCont"
          />
          <AttributeCont attribName="Essence" />
        </div>
      ) : attrib === "intelDir" ? (
        <div className="flex flex-col w-[100%] h-[100%]">
          <AttribReturnBtn
            btnName="Attributes"
            setAttribDir={setAttribDir}
            attribDir="mainAttribCont"
          />
          <AttributeCont attribName="Intelligence" />
        </div>
      ) : attrib === "luckDir" ? (
        <div className="flex flex-col w-[100%] h-[100%]">
          <AttribReturnBtn
            btnName="Attributes"
            setAttribDir={setAttribDir}
            attribDir="mainAttribCont"
          />
          <AttributeCont attribName="Luck" />
        </div>
      ) : null}
    </>
  );
};

export default AttributesMenu;
