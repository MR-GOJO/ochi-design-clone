import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-2%"
      className="w-full h-screen bg-zinc-900"
    >
      <div className="w-full h-[77vh] flex flex-col justify-center border-b-[1px] border-zinc-700 pb-20 pl-5 font-semibold">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="flex">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.87, 0, 0.13, 1], duration: 1 }}
                  className="w-[8vw] h-[10.8vh] bg-[url('D:\harma\Documents\Coding\Ochi\ochi-website\src\assets\small-pic.png')] bg-cover bg-slate-600 mt-[8.8px] rounded-md mr-2"
                ></motion.div>
              )}
              <h1 className="font-display text-[12.5vh] leading-[12.5vh] font-semibold">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between w-full p-4">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return <p>{item}</p>;
        })}
        <button className="border-[1px] border-zinc-400 py-[2px] px-[10px] uppercase rounded-full animate-bounce relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-zinc-100 before:transition-transform before:duration-300 before:content-[''] hover:text-zinc-900 before:hover:scale-y-100 before:hover:border-zinc-100 overflow-hidden ">
          start the project
        </button>
      </div>
    </div>
  );
}

export default Hero;

