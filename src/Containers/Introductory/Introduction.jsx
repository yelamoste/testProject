import { TypeAnimation } from "react-type-animation";
import React, { useEffect, useState } from "react";
import { TEXT_ANIMATION_DURATION } from "../../Constants";

const Introduction = (props) => {
  const guideTextStyles = props.guideTextStyles;
  const bgImage = props.bgImage;
  const nextBtn = props.nextBtn;
  const contentMessage = props.contentMessage;
  const returnBtn = props.returnBtn;
  const backBtn = props.backBtn;
  const [display, setDisplay] = useState(`invisible`);
  const [showButtons, setShowBtns] = useState();

  useEffect(() => {
    if (backBtn == "true") {
      setDisplay(`visible`);
    }
  }, [backBtn]);

  useEffect(() => {
    setTimeout(() => {
      setShowBtns(true);
    }, 2000);
  }, []);
  return (
    <>
      <div className="flex flex-col  bg-amber-50 border-2 w-[60%] h-[80%] max-md:w-[90%] self-center text-wrap">
        <div
          className={`h-[100%] w-[100%] relative z-0 ${bgImage} bg-cover bg-no-repeat`}
        ></div>
        <div className="h-[auto] w-[50%] bottom-[15%] p-[10px] absolute z-1 justify-center self-center text-left mb-[10px] flex flex-col m-[0] rounded-[6px] bg-amber-950">
          <p></p>
          <TypeAnimation
            sequence={[`${contentMessage}`, TEXT_ANIMATION_DURATION]}
            complete
            repeat={0}
            speed={50}
            style={guideTextStyles}
          />
          {showButtons && (
            <div className="flex flex-row h-[40%] w-[100%]">
              <button
                className={`z-1 w-[100%] h-[50%] border-2 self-end rounded-[10px] ${display} cursor-pointer bg-gray-950 text-white`}
                onClick={returnBtn}
              >
                Back
              </button>

              <button
                className="z-2 w-[100%] h-[40%] border-2 rounded-[10px] cursor-pointer self-end bg-gray-950 text-white"
                onClick={nextBtn}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Introduction;
