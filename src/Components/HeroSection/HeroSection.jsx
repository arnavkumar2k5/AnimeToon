import React from "react";
import { Link } from "react-scroll";

function HeroSection() {
  return (
    <div
      id="hero-section"
      className="h-[90vh] bg-gradient-to-b from-indigo-900 to-slate-900 flex flex-col justify-center items-start pl-6 md:pl-10 text-white"
    >
      <section>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-gradient-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          A Myth Rewritten. A Love Reimagined.
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-5xl mb-6 md:mb-8 md:font-semibold bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-text-delay">
          Explore the epic tale of Hades and Persephone.
        </h2>

        <div className="text-lg md:text-xl bg-orange-500 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-500 cursor-pointer p-4 md:p-5 border-2 border-white rounded-full inline-block shadow-lg hover:shadow-yellow-500/50 animate-pulse">
          <Link to="readmore" smooth={true} duration={500}>
            Read More...
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
