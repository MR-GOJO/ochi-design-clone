import React, { useState, useEffect } from "react";

function Ready() {
  const [rotate, setRotate] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isHello, setIsHello] = useState(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <>
      <div className="w-full absolute min-h-screen flex justify-center flex-col pt-24 pb-28 text-zinc-900 bg-[#CDEA68] rounded-t-2xl">
        <div className="w-full flex flex-col items-center">
          {["READY", "TO START", "THE PROJECT?"].map((item, index) => {
            return (
              <h1 className="text-[12vw] tracking-tight leading-none font-display font-black">
                {item}
              </h1>
            );
          })}
        </div>
        <div className="w-full flex flex-col justify-center items-center pt-[40vh]">
          <button
            onMouseEnter={() => setIsStart(true)}
            onMouseLeave={() => setIsStart(false)}
            className="button text-sm uppercase border-2 border-zinc-900 flex justify-center items-center gap-8 font-smaller rounded-full px-5 py-4 mt-3 text-zinc-100 bg-zinc-900"
          >
            start the project
            <div
              className={`w-2 h-2 flex items-center justify-center text-xs text-zinc-900 bg-zinc-100 rounded-full transition-transform duration-300 ease-in-out ${
                isStart ? "scale-[500%]" : ""
              }`}
            >
              {isStart && (
                <span className={`${isStart ? "scale-[30%]" : ""}`}>
                  &#129125;
                </span>
              )}
            </div>
          </button>
          <h1 className="pt-3 pb-1">OR</h1>
          <button
            onMouseEnter={() => setIsHello(true)}
            onMouseLeave={() => setIsHello(false)}
            className="button text-sm uppercase border-2 border-zinc-900 flex justify-center items-center gap-8 font-smaller rounded-full px-5 py-4 mt-3 text-zinc-900 bg-transparent"
          >
            hello@ochi.design
            <div
              className={`w-2 h-2 flex items-center justify-center text-xs text-zinc-100 bg-zinc-900 rounded-full transition-transform duration-300 ease-in-out ${
                isHello ? "scale-[500%]" : ""
              }`}
            >
              {isHello && (
                <span className={`${isHello ? "scale-[30%]" : ""}`}>
                  &#129125;
                </span>
              )}
            </div>
          </button>
        </div>
      </div>

      <div className="eyes pt-[120vh] relative top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-screen">
        <div className="relative w-full h-full">
          <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -tanslate-y-[50%] -mt-20">
            <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
              <div className="relative w-[8vw] h-[8vw] rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[18px]"
                >
                  <div className="w-[15px] h-[15px] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
              <div className="relative w-[8vw] h-[8vw] rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[18px]"
                >
                  <div className="w-[15px] h-[15px] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ready;
