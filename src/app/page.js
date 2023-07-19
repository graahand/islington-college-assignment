"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Navbar from "./layout/navbar";
import Imagegallery from "./components/Imagegallery";
import Footer from "./layout/Footer";
import IslingtonSpirit from "./components/IslingtonSpirit";
import Internationalexposure from "./components/Internationalexposure";
import Infrastructure from "./components/Infrastructure";
import InfrastructuralAssets from "./components/Infrastructuralassets";
import Facultymembers from "./components/Facultymembers";
import Joinnow from "./components/Joinnow";
import UniversityPartner from "./components/Universitypartner";
import Scholarship from "./components/Scholarship";
import MoreaboutING from "./components/MoreaboutING";
import Typewritereffect from "./components/Typewritereffect";
import Scholarshiprecipent from "./components/Scholarshiprecipent";
import Ouralumni from "./components/Ouralumni";

const HomePage = () => {
  return (
    <>

    
    
      <div className="scrollNav">
        <Navbar  />
      </div>
      

      <div className="relative">
        <Image
          className="flex bg-center md:bg-top scale-100"
          src="/homepage.jpg"
          width={1920}
          height={900}
        />

        <Image
          className="cursor-pointer flex bg-center md:bg-top absolute left-1/2 transform -translate-x-1/2 "
          src="/islington-white-logo.svg"
          width={300}
          height={300}
          style={{ top: "calc(58px + 13cm)" }}
        />

        <div
          className="absolute left-1/2 transform -translate-x-1/2 text-center"
          style={{ top: "calc(48px + 4cm + 13cm)" }}
        >
          <p className="text-white mt-[1.5cm] text-md font-bold text-5xl/[customSize2] md:text-6xl leading-none">
            Developing
            <br />
            Industry Ready Graduates
          </p>
          <p className="text-white text-customSize3 uppercase font-light mt-[1.5cm]">
            Since 1996
          </p>
          {/* <div className="mt-[35cm] mr-[28cm] uppercase font-bold text-typewriterColor text-7xl static ">
            
            <Typewriter
              options ={{
                strings: ["Memories,", "Stories,", "College."],
                autoStart: true,
                loop: true,
              }}
              style={{ fontWeight: "bold", color: "blue" }}
            />
            
          </div> */}
          <Typewritereffect/>
          
            
        </div>
        
      </div>

      <div className="container mx-auto py-12 text-center">
        <h1 className=" mt-[3cm] text-customSize uppercase font-light text-customColor leading-snug
        ">
          The Islington
          <br />
          <span className="font-bold text-customColor">Experience</span>
        </h1>
      </div>

      <div className="container mx-auto py-12 flex flex-col items-center justify-content h-screen">
        <p className="text-lg mt-[-3cm] text-sm/[16px] font-light text-customColor1 text-justify leading-snug text-center py-12">
          A college experience transcends beyond just classrooms and lecture
          theatres. Celebrate our fun-filled
          <br />
          <span className="ml-[2cm]">&nbsp;</span>events throughout the academic
          year. Come and live the Islington Experience!
        </p>
      </div>
      <Typewriter />
      <Imagegallery/>

      <IslingtonSpirit />
      <Internationalexposure />


      
      

      <Infrastructure />

      <InfrastructuralAssets />

      <Facultymembers />

      <Joinnow />

      <UniversityPartner />

      <Scholarship />
      <Scholarshiprecipent/>

      {/* <MoreaboutING/> */}
      <Ouralumni/>

      <Footer />
    </>
  );
};

export default HomePage;
