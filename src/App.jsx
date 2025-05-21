import { Greet } from "./Containers/Greet";
import { React, useState } from "react";

function App() {
  const [btnDir, setBtnDir] = useState("StartBtn");

  return (
    <>
      {btnDir == "StartBtn" ? (
        <div className="flex bg-purple-950 h-[100%] w-[100%] align-middle justify-center">
          <button
            className="*-none text-gray-500 cursor-pointer hover:text-gray-50 hover:before:content-['[_'] hover:after:content-['_]'] ease-in font-silkscreen font-normal "
            onClick={() => setBtnDir("NameBtn")}
          >
            Start
          </button>
        </div>
      ) : (
        <>
          <div className="flex bg-purple-950 h-[100%] w-[100%] align-middle justify-center flex-col">
            <button
              className="*-none self-end mr-[15%] text-gray-500 cursor-pointer hover:text-gray-50 hover:before:content-['[_'] hover:after:content-['_]'] ease-in font-silkscreen font-normal"
              onClick={() => setBtnDir("StartBtn")}
            >
              close
            </button>
            <Greet />
          </div>
        </>
      )}
      <div className="bg-black text-gray-500 text-[0.9rem] flex justify-center">
        yelamoste @ 2025 - beta version
      </div>
    </>
  );
}
export default App;
