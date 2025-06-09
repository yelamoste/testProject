import React from "react";

const AttributeCont = (props) => {
  const attribName = props.attribName;
  return (
    <div className="h-[100%] w-[100%] m-[20px] text-gray-500">
      <h1 className="justify-center text-center text-3xl lowercase font-silkscreen">
        {attribName}
      </h1>
      <p></p>
    </div>
  );
};

export default AttributeCont;
