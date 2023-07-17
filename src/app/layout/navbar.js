"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    // <nav className='fixed w-full h-24 shadow-xl bg-white'>
    //     <div className='flex justify-between'>
    //         <div>Left Side</div>
    //         <div>Right Side</div>

    //     </div>

    // </nav>
    <div className=" relative">
      <div>
        <Image
          className="cursor-pointer py-2 mt-(-1) ml-[3.5cm] "
          src="islington-logo-smallL.svg"
          width={170}
          height={250}
          style={{ top: "calc(58px +16cm)" }}
        />
        <div className=" ml-30  absolute right-20 top-0 flex flex-row items-center p-4 bg-light-blue-200">
          <p className="mb-2 text-xl right-27 cursor-pointer font-light text-brown-500 opacity-50 font-big mr-4 hover:text-blue-800 ">
            Apply Now
          </p>
          <p className="mb-2 text-xl right-37 cursor-pointer font-light text-brown-500 opacity-50 font-big hover:text-blue-800">
            Menu{"\u00A0"}☰
          </p>
        </div>
      </div>
      <div>
        <nav className="flex bg-customColor text-white">
          <div className="max-w-8xl mx-auto flex justify-between items-center">
            <div className="px-[2cm] py-3.5 hover:text-red-500">
              <Link href="">WHY US?</Link>
            </div>

            <div className="px-[2cm] py-2 mx-8 hover:text-red-500">
              <Link href="">PROGRAMMES</Link>
            </div>

            <div className="px-[2cm] py-2 hover:text-red-500">
              <Link href="">NEWS & EVENTS</Link>
            </div>

            <div className="px-[2cm] py-2 hover:text-red-500">
              <Link href="">ALUMNI</Link>
            </div>

            <div className="px-[2cm] py-2 hover:text-red-500">
              <Link href="">TIMETABLE</Link>
            </div>

            <div className="px-[2cm] py-2 hover:text-red-500">
              <Link href="">SCHOLARSHIPS</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
