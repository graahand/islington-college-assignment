import React from "react";

const Scholarship = () => {
  return (
    <div className="bg-gray-50 p-8 mb-[3cm]">
      <h1 className="text-customColor uppercase text-center mt-[2cm]">
        <span className=" text-5xl/[100px] cursor-pointer font-light">Scholarship</span>{" "}
        <span className="text-5xl/[100px] cursor-pointer font-bold">opportunities</span>
      </h1>
      <p className="mt-8 mb-[1.5cm] text-center font-light text-customColor1">
        Seize the opportunity to become part of our amazing scholarship program
        (
        <strong>
          International Student House &amp; London Metropolitan University
          <br />
          Scholarship Programme
        </strong>
        ); an ING initiative that allows you to reinforce your academics and
        experience at an international level, courtesy of the London  
        <br />
        Metropolitan University in the UK worth   <strong className="font-bold text-red-500">Rs. 1.5 Crore</strong>.
      </p>

      <p className="mt-8 text-center text-customColor1">
        We also present <strong>100% scholarships</strong> to 2 other shortlisted students for
        their Master’s <br/> programme at our very own Islington College.
      </p>
      <button className="mt-[2cm] ml-[18cm] px-32 rounded py-6 bg-customColor text-white hover:bg-white hover:text-customColor transition-colors duration-300 w-auto">
  More about scholarship program
</button>

    </div>
  );
};

export default Scholarship;
