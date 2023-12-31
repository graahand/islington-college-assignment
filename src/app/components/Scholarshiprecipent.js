'use client'
import React from "react";

const ScholarshipRecipient = () => {
  return (
    <>
    <p className="ml-[9cm] uppercase bg-gray-50 mb-[1.5cm] mt-[-2cm] text-customColor text-customSize4  font-bold">Scholarship Recipient Stories</p>
    <div className="flex bg-gray-50 min-h-screen items-center mt-[-6cm] justify-center ">
        
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-sm hover:shadow-black/30">
          <div className="h-98 w-100">
            <img
              className="h-full w-full object-cover transition-transform duration-700 delay-600 group-hover:rotate-3 group-hover:scale-125"
              src="/stories0@2x.png"
              alt=""
            />
            
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black   group-hover:translate-y-1 "></div>
          <p className="absolute inset-0  flex items-center justify-center text-white text-xl font-bold pointer-events-none">
        Monil Adhikari
      </p>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <p className="mb-3 text-sm text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            "Getting an international degree along with a complete <br/>
             international experience at the London Metropolitan <br/>University was truly a blessing. Thanks to Islington <br/>
             College's Scholarship Program I was able to receive this <br/> opportunity and now, proudly stand abreast in 
            the <br/>competitive professional landscape. Undoubtedly,<br/> Islington is the <strong>best IT college in Nepal</strong>.
            "
            </p>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-83 w-100">
            <img
              className="h-full w-full object-cover transition-transform duration-700 delay-600 group-hover:rotate-3 group-hover:scale-125"
              src="/stories1@2x.png"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            
              
          <p className="mb-3 text-sm text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            "Getting an international degree along with a complete <br/>
             international experience at the London Metropolitan <br/>University was truly a blessing. Thanks to Islington <br/>
             College's Scholarship Program I was able to receive this <br/> opportunity and now, proudly stand abreast in 
            the <br/>competitive professional landscape. Undoubtedly,<br/> Islington is the <strong>best IT college in Nepal</strong>.
            "
            </p>
            
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-83 w-100">
            <img
              className="h-full w-full object-cover transition-transform duration-700 delay-600 group-hover:rotate-3 group-hover:scale-125"
              src="/stories3@2x.png"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <p className="mb-3 text-sm text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            "Getting an international degree along with a complete <br/>
             international experience at the London Metropolitan <br/>University was truly a blessing. Thanks to Islington <br/>
             College's Scholarship Program I was able to receive this <br/> opportunity and now, proudly stand abreast in 
            the <br/>competitive professional landscape. Undoubtedly,<br/> Islington is the <strong>best IT college in Nepal</strong>.
            "
            </p>
            
            
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-83 w-100">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="/stories4@2x.png"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <p className="mb-3 text-sm text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            "Getting an international degree along with a complete <br/>
             international experience at the London Metropolitan <br/>University was truly a blessing. Thanks to Islington <br/>
             College's Scholarship Program I was able to receive this <br/> opportunity and now, proudly stand abreast in 
            the <br/>competitive professional landscape. Undoubtedly,<br/> Islington is the <strong>best IT college in Nepal</strong>.
            "
            </p>
            
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ScholarshipRecipient;
