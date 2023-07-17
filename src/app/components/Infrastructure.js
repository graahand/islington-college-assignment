const Infrastructures = () => {
  return (
    <div className="flex mt-10 mb-10 items-center">
      <div className="ml-[7.5cm]">
        <img
          src="/infrastructure-lg.jpg"
          alt="Infrastructures Image"
          className="w-110 h-auto duration-300 hover:opacity-700"
        />
      </div>
      <div className="ml-9 ">
        <h1 className="text-5xl uppercase font-light text-customColor">
          State-of-the-Art
        </h1>
        <h2 className="text-5xl uppercase text-customColor">
          <span className="font-bold">Infrastructures</span>
        </h2>
        <p className="text-normal text-customColor1 mt-4">
          Your education is supplemented by our ultra-modern
          <br /> laboratories, classrooms, and lecture theatres or just choose{" "}
          <br /> to relax, rewind, and re-energize amongst the many hangout{" "}
          <br /> spots like the Coffee Station and Juice Bar!
        </p>
      </div>
    </div>
  );
};

export default Infrastructures;
