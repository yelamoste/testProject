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
  const [showButtons, setShowBtns] = useState(false);
  const typeAnimate = contentMessage.message.flatMap((text) => [
    text,
    TEXT_ANIMATION_DURATION,
  ]);

  const btnDuration =
    TEXT_ANIMATION_DURATION * contentMessage.message.length * 3;
  const btnText = props.btnText;

  const extraDuration = btnDuration + 6000;

  // console.log(btnDuration);
  // console.log(contentMessage.id);
  // console.log(contentMessage.message.length);
  // console.log(extraDuration);

  useEffect(() => {
    if (backBtn == "true") {
      setDisplay(`visible`);
    }
  }, [backBtn]);

  useEffect(() => {
    const delay =
      contentMessage.id === "contMsg2" ? extraDuration : btnDuration;

    const timeout = setTimeout(() => {
      setShowBtns(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [btnDuration, extraDuration, contentMessage]);

  return (
    <>
      <div className="flex flex-col  bg-amber-50 border-2 w-[60%] h-[80%] max-md:w-[90%] max-md:h-[50%] self-center text-wrap">
        <div
          className={`h-[100%] w-[100%] relative z-0 ${bgImage} bg-center bg-cover bg-no-repeat`}
        ></div>
        <div className="h-[auto] w-[50%] bottom-[15%] p-[20px] absolute z-1 justify-center transition-all duration-300 ease-out self-center text-left mb-[10px] flex flex-col m-[0] max-md:w-[80%] max-md:bottom-[26%] max-md:text-[14px] rounded-[6px] bg-amber-950">
          <p></p>
          <TypeAnimation
            sequence={typeAnimate}
            complete
            repeat={0}
            speed={50}
            omitDeletionAnimation={true}
            style={guideTextStyles}
          />
          {showButtons && (
            <div className="flex flex-row h-[40%] w-[calc(100% - 10px)] m-[10px] mb-0">
              <button
                className={`z-1 w-[100%] h-[50%] border-2 self-end rounded-[10px] ${display} cursor-pointer bg-gray-950 text-white hover:bg-purple-900`}
                onClick={returnBtn}
              >
                Back
              </button>

              <button
                className="z-2 w-[100%] h-[40%] border-2 rounded-[10px] cursor-pointer self-end bg-gray-950 text-white hover:bg-purple-900"
                onClick={nextBtn}
              >
                {btnText}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Introduction;
