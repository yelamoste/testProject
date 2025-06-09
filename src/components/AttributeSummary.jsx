import React, { useEffect, useState } from "react";

const AttributeSummary = (props) => {
  const attributeName = props.attributeName;
  const attributeValue = props.attributeValue;
  const addAttribVal = props.addAttribVal;
  const [displayAddAtt, setAddAtt] = useState(`invisible`);

  useEffect(() => {
    if (addAttribVal) {
      setAddAtt(`visible`);
    }
  }, [addAttribVal]);

  return (
    <p className="text-gray-400 ">
      <span className="font-bold mr-2">{attributeName}: </span>
      <span className="text-right">
        <span className="font-normal text-yellow-300"> {attributeValue} </span>
        <span className={`${displayAddAtt} text-gray-600`}>
          {" "}
          (+{addAttribVal}){" "}
        </span>
      </span>
    </p>
  );
};

export default AttributeSummary;
