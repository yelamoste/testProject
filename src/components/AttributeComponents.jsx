import React, { useState } from "react";
import AttributeCont from "./AttributeCont";

const AttributeComponents = (props) => {
  const attributeName = props.attributeName;
  const imgSrc = props.imgSrc;
  const attribDir = props.attribDir;

  return (
    <>
      <button
        className="animate-bounceIn h-[60%] w-[23%] bg-gray-800 m-[10px] rounded-2xl hover:scale-105 hover:border-amber-200 cursor-pointer hover:border-2"
        onClick={attribDir}
      >
        <img
          src={imgSrc}
          className="w-[calc(100% - 40px)] h-[50%] m-[20px] border-amber-50 border-[2px] animate-bounceIn"
        ></img>
        <p className="text-s text-gray-400 hover:text-yellow-300 font-semibold text-center m-[20px] font-orbitron">
          {attributeName}
        </p>
      </button>
    </>
  );
};

export default AttributeComponents;

export const AttribReturnBtn = (props) => {
  const btnName = props.btnName;
  const setAttribDir = props.setAttribDir;
  const attribDir = props.attribDir;
  const returnBtn = () => {
    setAttribDir(attribDir);
  };

  return (
    <button
      className="*-none text-gray-400 text-sm m-[20px] text-left hover:text-gray-200 cursor-pointer"
      onClick={returnBtn}
    >
      Back to {btnName}
    </button>
  );
};
