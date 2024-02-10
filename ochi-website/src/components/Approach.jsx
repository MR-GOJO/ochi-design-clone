import React, { useState } from "react";

function Approach() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.295"
      className="bg-[#CDEA68] text-zinc-800 rounded-2xl -translate-y-4 pb-32"
    >
      <div className="border-[#8ba045] border-b-[1px] pt-10 px-4">
        <h1 className="text-[8.7vh] font-normal leading-none tracking-tight py-10 font-smaller">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
      </div>
      <div className="w-full h-[60vh] p-4 font-smaller flex">
        <div className="w-1/2">What you can expect:</div>
        <div className="w-1/4">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="pt-8">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="w-1/4 flex flex-col justify-center items-end">
          <div className="flex flex-col">
            <p className="pb-4">S:</p>
            <a className="underline">Instagram</a>
            <a className="underline">Behance</a>
            <a className="underline">Facebook</a>
            <a className="underline">Instagram</a>
          </div>
        </div>
      </div>
      <div className="h-[80vh] w-full px-4 flex border-t-[1px] border-[#8ba045]">
        <div className="w-1/2 h-full">
          <h1 className="text-[8.5vh]">Our approach:</h1>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="button text-sm uppercase border-2 border-zinc-900 flex justify-center items-center gap-8 font-smaller rounded-full px-5 py-4 mt-3 text-zinc-100 bg-zinc-900"
          >
            read more
            <div
              className={`w-2 h-2 flex items-center justify-center text-xs text-zinc-900 bg-zinc-100 rounded-full transition-transform duration-300 ease-in-out ${
                isHovered ? "scale-[500%]" : ""
              }`}
            >{isHovered && <span className={`${
              isHovered ? "scale-[30%]" : ""
            }`}>&#129125;</span>}</div>
          </button>
        </div>
        <div className="w-1/2 h-full ">
          <div
            className={`w-full overflow-hidden mt-3 rounded-xl transition-transform duration-1000 ease-in-out ${
              isHovered ? "scale-95" : ""
            }`}
          >
            <img
              className={`transition-transform duration-1000 ease-in-out ${
                isHovered ? "scale-110" : ""
              }`}
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approach;
