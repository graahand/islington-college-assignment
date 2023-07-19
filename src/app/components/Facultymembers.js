'use client'
import React from "react";

const Facultymembers = () => {
  return (
    <div className="flex mb-16 h-[calc(100vh - 3rem)]">
      <div className="w-1/2 bg-gray-100">
        <div className="h-full flex flex-col justify-center items-center p-8 text-justify">
          <h1 className="text-5xl font-light text-customColor mb-4">
            INDUSTRY EXPERT
          </h1>
          <h2 className="text-5xl font-bold text-customColor ml-[-4cm] mb-8">
            LECTURERS
          </h2>
          <p className="ml-[2.7cm]">
            Our academicians are masters in their field of study, ensuring a
            world- <br /> class education to aid the students' academic
            progress.
          </p>
          <p className="mt-8">
            <a
              href="#"
              className="text-customColor1 ml-[-5.6cm] hover:text-customColor"
            >
              MEET OUR TEAM &gt;
            </a>
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="/lecturer.jpg"
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Facultymembers;
