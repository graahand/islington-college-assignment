'use client'
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Typewritereffect = () => {
  return (
    <div className=" mt-[33cm] ml-[-29cm] ">
      <h1 className="pt-20 text-slate-200 text-[74.95257px]   uppercase text-white-300 font-normal">
        Your <br />
        </h1>
        <h1 className="text-[74.95257px] mt-[-1cm] ml-[4cm] uppercase">
        <span className="text-typewriterColor  font-bold">
          <Typewriter
            
            words={["Memories,", "Stories,", "College."]}
            loop={100}
            cursor
            cursorStyle= "|" 
            typeSpeed={130}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorColor="#ffffff"
            
          
            
            
            
            

        
          />
        </span>
      </h1>
      <h1 className="text-customColor3 mt-[-0.5 cm] ml-[6.5cm] text-base mx-auto mb-10   font-medium">
    Ensuring pleasant lifestyle alongside a secure future through <br/> <p className="ml-[-7cm]">innovation and excellence</p>
  </h1>
    </div>
  );
};

export default Typewritereffect;
