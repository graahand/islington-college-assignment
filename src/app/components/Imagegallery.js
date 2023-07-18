import React from "react";

const Imagegallery = () => {
  return (
    <>
      <div className="h-screen p-16 grid grid-cols-4 grid-rows-4 gap-6 mt-[-6cm]">
        <div className="bg-blue-500 text-white text-center text-5xl py-10 rounded-lg row-span-2">
          <img src="/aspire-md.jpg"></img>
        </div>

        <div className="bg-blue-500 text-white text-center text-5xl py-4 rounded-lg col-span-2 row">
          6
        </div>
        <div className="bg-blue-500 text-white text-center text-5xl py-4 rounded-lg col-span-2">
          6
        </div>
        <div className="bg-blue-500 text-white text-center text-5xl py-4 rounded-lg">
          2
        </div>
        <div className="bg-blue-500 text-white text-center text-5xl py-4 rounded-lg">
          3
        </div>
        <div className="bg-blue-500 text-white text-center text-5xl py-4 rounded-lg">
          4
        </div>
      </div>
    </>
  );
};

export default Imagegallery;
