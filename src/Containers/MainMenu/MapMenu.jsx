import React from "react";

const MapMenu = (props) => {
  const selectedWorld = props.selectedWorld;
  return (
    <div className="w-full h-full flex justify-center">
      <p className="text-center text-gray-400 ">{selectedWorld}</p>
    </div>
  );
};

export default MapMenu;
