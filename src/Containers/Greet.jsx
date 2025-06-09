import { useEffect, useState } from "react";
import Home from "./Home";
import btnSound from "/src/assets/sound/btnSound.mp3";

export const Greet = () => {
  const [username, setUsername] = useState("");
  const [homeBtn, setHomeBtn] = useState("NameBtn");
  // const audioRef = useRef(new Audio(btnSound));

  function handleClick() {
    localStorage.setItem("name", username);
    setTimeout(() => {
      setHomeBtn("HomeBtn");
    }, 700);

    new Audio(btnSound).play();
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Entered");
      handleClick();
    }
  };

  useEffect(() => {
    const tmpName = localStorage.getItem("name") || null;

    if (tmpName) {
      setUsername(tmpName);
      handleClick();
    }
  }, []);

  return (
    <>
      {homeBtn == "NameBtn" ? (
        <div className="flex flex-col w-[100%] h-[100%] justify-center animate-bounceIn">
          <div className="h-[48%] w-[50%] flex flex-col justify-center font-silkscreen items-center self-center border-2 max-md:w-[90%]">
            <div className="flex justify-items-start h-[10%] w-[100%] bg-black "></div>
            <div className="h-[90%] w-[100%] bg-amber-100 flex flex-col justify-center">
              <p className="m-[5%] max-md:m-[3%] max-md:text-center">
                Before we start the game, how would you like to be called?
              </p>
              <input
                type="text"
                required
                maxLength={50}
                value={username}
                placeholder="name"
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
                className="text-center border-2 text-purple-900 w-[60%] h-[15%] max-md:w-[70%] max-md:m-[2%] max-md:text-[1.1rem] focus:bg-purple-400 focus:text-white focus:border-purple-950 justify-center self-center"
              />

              <button
                className="cursor-pointer border-2 bg-purple-950 w-[80%] h-[20%] m-[3%] self-center text-white"
                onClick={handleClick}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col w-[100%] h-[100%] justify-center ">
            <Home name={username} />
            <button
              className=" text-gray-500 cursor-pointer hover:text-gray-50 hover:before:content-['[_'] hover:after:content-['_]'] ease-in font-silkscreen font-normal"
              onClick={() => setHomeBtn("NameBtn")}
            >
              Back
            </button>
          </div>
        </>
      )}
    </>
  );
};
