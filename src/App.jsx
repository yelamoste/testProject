import { Greet } from "./Containers/Greet";
import { React, useState } from "react";
import navBtn from "/src/assets/sound/navBtn.mp3";
import btnSound from "/src/assets/sound/btnSound.mp3";

function App() {
  const [btnDir, setBtnDir] = useState("StartBtn");
  const startBtn = () => {
    new Audio(navBtn).play();
    setTimeout(() => {
      setBtnDir("NameBtn");
    }, 1000);
  };
  const closeBtn = () => {
    setTimeout(() => {
      setBtnDir("StartBtn");
    }, 500);
    new Audio(btnSound).play();
  };

  return (
    <>
      {btnDir == "StartBtn" ? (
        <div className="flex bg-purple-950 h-[100%] w-[100%] align-middle justify-center">
          <button
            className="*-none text-gray-500 cursor-pointer hover:text-gray-50 hover:before:content-['[_'] hover:after:content-['_]'] ease-in font-silkscreen font-normal "
            onClick={startBtn}
          >
            Start
          </button>
        </div>
      ) : (
        <>
          <div className="flex self-center bg-purple-950 h-[100%] w-[100%] align-middle justify-center flex-col">
            <button
              className="*-none self-end m-[5px] p-[10px] text-gray-500 cursor-pointer hover:text-gray-50 hover:before:content-['[_'] hover:after:content-['_]'] ease-in font-silkscreen font-normal"
              onClick={closeBtn}
            >
              close
            </button>
            <Greet />
          </div>
        </>
      )}
      <div className="bg-black text-gray-500 text-[0.9rem] flex justify-center">
        yelamoste @ 2025 - pre-alpha version
      </div>
    </>
  );
}
export default App;
