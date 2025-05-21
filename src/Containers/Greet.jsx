import { useState } from "react";
import Home from "./Home";

export const Greet = () => {
  const [username, setUsername] = useState("");
  const [homeBtn, setHomeBtn] = useState("NameBtn");

  return (
    <>
      {homeBtn == "NameBtn" ? (
        <div className="flex flex-col justify-center font-silkscreen h-[100%] w-[100%] items-center self-center border-2 ">
          <div className="flex justify-items-start h-[10%] w-[100%] bg-black "></div>
          <div className="h-[90%] w-[100%] bg-amber-100 flex flex-col ">
            <p className="m-[8%]">
              Before we start the game, how would you like to be called?
            </p>
            <input
              type="text"
              maxLength={50}
              value={username}
              placeholder="name"
              onChange={(e) => setUsername(e.target.value)}
              className="text-center border-2 text-purple-900 w-[90%] justify-center self-center"
            />
            <button
              className="cursor-pointer "
              onClick={() => setHomeBtn("HomeBtn")}
            >
              Confirm
            </button>
          </div>
        </div>
      ) : (
        <>
          <Home />
          <button
            className=" text-gray-500 cursor-pointer hover:text-gray-50 hover:before:content-['[_'] hover:after:content-['_]'] ease-in font-silkscreen font-normal"
            onClick={() => setHomeBtn("NameBtn")}
          >
            Back
          </button>
        </>
      )}
    </>
  );
};
