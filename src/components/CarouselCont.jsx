import React from "react";

const CarouselCont = (props) => {
  const contImg = props.contImg;
  const contName = props.contName;
  const contImgAlt = contName + " Image";
  const handleContBtnClick = props.handleContBtnClick;

  return (
    <button
      className="bg-gray-900 h-full w-[30%] rounded-2xl flex flex-col justify-evenly items-center hover:scale-105 hover:border-[1px] hover:border-gray-400 cursor-pointer animate-bounceIn"
      onClick={handleContBtnClick}
    >
      <img
        src={contImg}
        className="w-[80%] h-[60%]"
        alt={contImgAlt}
        title={contName}
      ></img>
      <p className="font-orbitron text-gray-400">{contName}</p>
    </button>
  );
};

export default CarouselCont;
