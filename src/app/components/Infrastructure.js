'use client'
const Infrastructures = () => {
  return (
    <div className="flex mt-[3cm] mb-10 items-center">
      <div className="ml-[7.5cm]">
        <img
          src="/infrastructure-lg.jpg"
          alt="Infrastructures Image"
          className="w-110 h-auto duration-300 hover:opacity-700"
        />
      </div>
      <div className="ml-[2cm]  ">
        <h1 className="text-5xl uppercase font-light text-customColor">
          State-of-the-Art
        </h1>
        <h2 className="text-5xl uppercase mt-[0.6cm] text-customColor">
          <span className="font-bold">Infrastructures</span>
        </h2>
        <p className="font-light mt-[1cm] text-sm/[16px] leading-relaxed text-customColor1 mt-4">
          Your education is supplemented by our ultra-modern
           laboratories,<br /> classrooms, and lecture theatres or just choos
           to relax, rewind, and re- <br />energize amongst the many hangout
           spots like the Coffee Station and Juice<br /> Bar!
        </p>
      </div>
    </div>
  );
};

export default Infrastructures;
