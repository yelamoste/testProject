import React from "react";
import MainBtn from "../../components/MainBtn";
import BirthIdentity from "./birthIdentity";

const MainDirectory = ({ handleMenuClick }) => {
  return (
    <div className="flex flex-col w-[100%] h-[100%]">
      <div className=" bg-gray-950 h-[95%] w-[95%] self-center rounded-2xl animate-fadeIn"></div>
      <MainBtn mainBtnName="Settings" mainBtn={handleMenuClick} />
      {/* for temp */}
    </div>
  );
};

export default MainDirectory;
