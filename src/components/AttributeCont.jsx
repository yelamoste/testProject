import React from "react";

const AttributeCont = (props) => {
  const attribName = props.attribName;
  const attribImg = props.attribImg;
  const descriptionAttrib = props.descriptionAttrib;

  const altName = attribName + " Image";

  return (
    <div className="h-[100%] w-[calc(100% - 40px)] m-[20px] text-gray-500 flex flex-col">
      <img
        src={attribImg}
        alt={altName}
        className="w-[100%] h-[20%] justify-center self-center bg-amber-50"
      />
      <h1 className="justify-center mt-[20px] text-center text-3xl lowercase font-silkscreen">
        {attribName}
      </h1>

      <p className={descriptionAttrib}></p>
    </div>
  );
};

export default AttributeCont;
