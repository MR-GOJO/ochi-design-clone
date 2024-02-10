import React from "react";
import { motion } from "framer-motion";

function Moving() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full py-24 bg-[#004D43] flex overflow-hidden rounded-t-2xl"
    >
      <div className="border-t-[1px] border-b-[1px] border-[#52857e] flex whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[35vh] pr-8 font-bold leading-none tracking-tighter mt-[-30px]"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[35vh] pr-8 font-bold leading-none tracking-tighter mt-[-30px]"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Moving;
