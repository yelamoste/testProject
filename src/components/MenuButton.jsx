import React from "react";

const MenuButton = (props) => {
  const display = props.display;
  const btnName = props.btnName;

  return (
    <button
      className="text-gray-300 text-center w-[100%] h-[3rem] hover:bg-gray-800 hover:transition-all duration-300 ease-in-out  mt-10  cursor-pointer"
      onClick={display}
    >
      {btnName}
    </button>
  );
};

export default MenuButton;
