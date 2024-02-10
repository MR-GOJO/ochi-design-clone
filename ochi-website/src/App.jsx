import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Moving from "./components/Moving";
import Approach from "./components/Approach";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Ready from "./components/Ready";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-screen bg-zinc-900 text-zinc-100">
      <Navbar />
      <Hero />
      <Moving />
      <Approach />
      <Eyes />
      <Featured />
      <Cards />
      <Ready />
    </div>
  );
}

export default App;
