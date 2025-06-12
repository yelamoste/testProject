import React from "react";

const MainBtn = ({ mainBtn, mainBtnName }) => {
  return (
    <button
      className=" text-gray-500 cursor-pointer hover:text-gray-50 hover:before:content-['[_'] hover:after:content-['_]'] ease-in font-silkscreen font-normal"
      onClick={mainBtn}
    >
      {mainBtnName}
    </button>
  );
};

export default MainBtn;
