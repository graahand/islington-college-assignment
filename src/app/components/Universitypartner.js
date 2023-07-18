import React from "react";

const UniversityPartner = () => {
  return (
    <div className="flex mt-[-5cm] ">
      <div className="w-1/2 ">
        <img
          src="/university-partner.png"
          alt="Image"
          className="ml-[8cm] mt-[-3cm] mr-[-2.5cm] h-[+24cm]"
        />
      </div>

      <div className="w-1/2 ml-[-2cm] mt-[-3cm]">
        <div className="h-screen flex flex-col justify-center items-start ml-10">
          <h1 className="text-customSize font-light uppercase text-customColor cursor-pointer inline-block">
            University <span class="font-bold">Partner</span>
          </h1>

          <img src="/londonmet-logo.svg" alt="Logo" className="mt-customMt cursor-pointer" />
          <p className="  text-customColor1 mt-[2cm] mb-[1cm]">
            London Metropolitan University (London Met) is a diverse and vibrant{" "}
            <br /> place of learning, located in the heart of the world’s most
            exciting capital <br /> city, London, UK. The University has a
            population of over 10,000 UK-based <br /> higher education students.
          </p>
          <p className="mt-16">
            <a
              href="#"
              className="text-customColor1 mt-[1.5cm] uppercase hover:text-blue-600"
            >
              about university &gt;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniversityPartner;
