import React from "react";

const IslingtonSpirit = () => {
  return (
    <div className="flex bg-gray-100 h-screen mt-[-11cm] ">
      <div className="flex-1 bg-gray-100 p-8 flex flex-col ml-[4cm] justify-center">
        <div className="text-5xl bg-gray-100 uppercase font-light text-customColor mb-2">
          The Islington
        </div>
        <div className="text-5xl uppercase font-bold text-customColor">
          Spirit
        </div>
        <div className="mt-8 text-customColor1">
          Instilling a school of thought obsessed with winning and persevering through <br /> all odds is our relentless pursuit. We know how to deliver a victory!
        </div>
        <div className="mt-4">
          <a href="#" className="text-customColor1 hover:customColor2">
            See more &gt;
          </a>
        </div>
      </div>
      <div className="flex-1 bg-gray-200 justify-center items-center flex-col justify-start overflow-scroll">
        <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
          <img src="/acespectrum-lg.jpg" alt="" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-1/2 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-0 group-hover:h-full"></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="text-white text-xl">
              <p className="font-light text-2xl">Ace Spectrum 2018 <br/><strong className="ml-[1.5cm] font-bold uppercase">Winner</strong></p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
          <img src="/lacup-lg.jpg" alt="" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-0 group-hover:h-full"></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="text-white text-xl">
              <p className="font-light text-2xl">LA Cup 2019 <br/><strong className="ml-[0.6cm] font-bold uppercase">Winner</strong></p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
          <img src="/battleofthebrain-lg.jpg" alt="" className="w-full " />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-0 group-hover:h-full"></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="text-white text-xl">
              <p className="font-light text-2xl">Battle of the Brain 2019<br/> <strong className="ml-[2cm] font-bold uppercase">Winner</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslingtonSpirit;
