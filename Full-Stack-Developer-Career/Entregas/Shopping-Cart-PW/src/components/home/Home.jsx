import React from "react";
import HomeRender from "./HomeRender";

function Home() {
    return (
      <div className="flex flex-col items-center justify-center h-screen pt-24 sm:mr-0 mb-0 pb-0 sm:pt-24">
        <h1 className="bg-black p-6 mb-0 px-2 rounded-full text-4xl md:text-8xl font-bold text-white sm:mt-24">
          Cows Shop
        </h1>
        <div className="w-full">
          <HomeRender />
        </div>
      </div>
    );
  }

export default Home;
