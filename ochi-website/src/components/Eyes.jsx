import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

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
    <div className="eyes w-full h-screen overflow-hidden -translate-y-4">
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -tanslate-y-[50%] -mt-20">
          <div className="flex items-center justify-center w-[16vw] h-[16vw] rounded-full bg-zinc-100">
            <div className="relative w-[10vw] h-[10vw] rounded-full bg-zinc-900">
              <div className="relative flex justify-center items-center uppercase w-[10vw] h-[10vw] rounded-full bg-zinc-900">
                play
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[18px]"
                >
                  <div className="w-[17px] h-[17px] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[16vw] h-[16vw] rounded-full bg-zinc-100">
            <div className="relative w-[10vw] h-[10vw] rounded-full bg-zinc-900">
              <div className="relative flex justify-center items-center uppercase w-[10vw] h-[10vw] rounded-full bg-zinc-900">
                play
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[18px]"
                >
                  <div className="w-[17px] h-[17px] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
