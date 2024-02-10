import React from "react";

function Featured() {
  return (
    <div className="w-full rounded-t-2xl bg-zinc-900 -translate-y-7">
      <div className="px-4 pt-[91px] border-b-[1px] border-zinc-700">
        <h1 className="text-[9vh] pb-[30px] font-smaller">Featured projects</h1>
      </div>
      <div className="w-full px-4 py-20 flex gap-5">
        <div className="w-1/2">
          <div className="flex items-center gap-2 pb-4 text-sm">
            <div className="bg-zinc-100 rounded-full w-2 h-2"></div>
            <p className="font-smaller">FYDE</p>
          </div>
          <div className="w-full overflow-hidden rounded-lg hover:scale-95 transition-transform duration-300 ease-in-out">
            <img
              className="hover:scale-110 transition-transform duration-300 ease-in-out"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              alt="img"
            />
          </div>
          <div className="w-full">
            <button className="rounded-full text-[13px] mr-3 mt-5 font-smaller px-3 py-2 border-zinc-400 border-[1px] relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-zinc-100 before:transition-transform before:duration-300 before:content-[''] hover:text-zinc-900 before:hover:scale-y-100 before:hover:border-zinc-100 overflow-hidden ">
              AUDIT
            </button>
            <button className="rounded-full text-[13px] mr-3 mt-5 font-smaller px-3 py-2 border-zinc-400 border-[1px] relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-zinc-100 before:transition-transform before:duration-300 before:content-[''] hover:text-zinc-900 before:hover:scale-y-100 before:hover:border-zinc-100 overflow-hidden ">
              COPYWRITING
            </button>
            <button className="rounded-full text-[13px] mr-3 mt-5 font-smaller px-3 py-2 border-zinc-400 border-[1px] relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-zinc-100 before:transition-transform before:duration-300 before:content-[''] hover:text-zinc-900 before:hover:scale-y-100 before:hover:border-zinc-100 overflow-hidden ">
              SALES DECK
            </button>
            <button className="rounded-full text-[13px] mr-3 mt-5 font-smaller px-3 py-2 border-zinc-400 border-[1px] relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-zinc-100 before:transition-transform before:duration-300 before:content-[''] hover:text-zinc-900 before:hover:scale-y-100 before:hover:border-zinc-100 overflow-hidden ">
              SLIDES DESIGN
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center gap-2 pb-4 text-sm">
            <div className="bg-zinc-100 rounded-full w-2 h-2"></div>
            <p className="font-smaller">VISE</p>
          </div>
          <div className="w-full overflow-hidden rounded-lg border-[1px] border-zinc-700 hover:scale-95 transition-transform duration-300 ease-in-out">
            <img
              className="hover:scale-110 transition-transform duration-300 ease-in-out"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
              alt="img"
            />
          </div>
          <div className="w-full">
            <button className="rounded-full text-[13px] mr-3 mt-5 font-smaller px-3 py-2 border-zinc-400 border-[1px] relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-zinc-100 before:transition-transform before:duration-300 before:content-[''] hover:text-zinc-900 before:hover:scale-y-100 before:hover:border-zinc-100 overflow-hidden ">
              AGENCY
            </button>
            <button className="rounded-full text-[13px] mr-3 mt-5 font-smaller px-3 py-2 border-zinc-400 border-[1px] relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-zinc-100 before:transition-transform before:duration-300 before:content-[''] hover:text-zinc-900 before:hover:scale-y-100 before:hover:border-zinc-100 overflow-hidden ">
              COMPANY PRESENTATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
