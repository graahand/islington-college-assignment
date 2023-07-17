import React from "react";

const Internationalexposure = () => {
  return (
    <div className="relative">
      <img
        src="/international-exposure.jpg"
        alt="Banner Image"
        className="w-full h-auto"
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="cursor-pointer text-4xl font-light text-customColor">
          EXCITING & WELL-ROUNDED
        </h1>
        <h2 className="text-4xl text-customColor">
          <span className="cursor-pointer font-bold">
            INTERNATIONAL EXPOSURE PROGRAMMES
          </span>
        </h2>
      </div>
      {/* <div className="absolute mt-[0.2cm] left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center">
  <h2 className="text-2xl text-gray-400">
    International Experience &gt;
  </h2>
</div> */}
    </div>
  );
};

export default Internationalexposure;
