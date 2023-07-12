"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    // <nav className='fixed w-full h-24 shadow-xl bg-white'>
    //     <div className='flex justify-between'>
    //         <div>Left Side</div>
    //         <div>Right Side</div>

    //     </div>

    // </nav>
    <div className="pt-12 relative">
      <div>
    <nav className="flex bg-blue-950 text-white ">
      <div className="max-w-8xl mx-auto px-5 py-2 flex justify-between items-center ">
        
        <div className="px-5 py-2  flex justify-items: center hover:text-red-500">
        <Link href="">WHY US?</Link>
         </div>

        <div className="px-5 py-2  flex justify-items: center hover:text-red-500">
          <Link href="">PROGRAMMES</Link>
        </div>

        <div className="px-5 py-2  flex justify-items: center hover:text-red-500">
          <Link href="">NEWS & EVENTS</Link>
        </div>
        <div className="px-5 py-2 flex justify-items: start hover:text-red-500">
          <Link href="">ALUMNI</Link>
        </div>
        <div className="px-5 py-2 flex justify-items: start hover:text-red-500">
          <Link href="">TIMETABLE</Link>
        </div>
        <div className="px-5 py-2 flex justify-items: start hover:text-red-500">
          <Link href="">SCHOLARSHIPS</Link>
        </div>
      </div>
      
    </nav>

    </div>
    </div>
  );
};

export default Navbar;
