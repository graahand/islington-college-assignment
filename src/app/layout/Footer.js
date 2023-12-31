"use client";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-solid-svg-icons";
import React from "react";
// import { SocialIcon } from 'react-social-icons';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-footerBG text-white-500 opacity-95 bg-gradient-to-r py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="/islington-logo.svg"
              alt="Islington College Logo"
              className="w-35 h-25 mb-1/2"
            />
            <p className="text-blue-200 text-lg">Kamal Marg, Kamalpokhari</p>
            <p className="text-blue-200 text-lg">Kathmandu, Nepal</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-blue-200 text-lg mb-2">Quick Links</h2>
            <ul className="text-blue-200 text-lg">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Academics</a>
              </li>
              <li>
                <a href="#">Infrastructures</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-blue-200 text-lg mb-2">Programmes</h2>
            <ul className="text-blue-200 text-lg">
              <li>IT Degree</li>
              <li>Business Degree</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-blue-200 text-lg mb-2">Contact</h2>
            <p className="text-blue-200 text-lg">Phone: 000000000000</p>
            <p className="text-blue-200 text-lg">Mobile: 900000000000</p>
            <p className="text-blue-200 text-lg">
              Email: info@islingtoncollege.edu.np
            </p>
            <button className="bg-customColor text-white rounded px-4 py-2 mt-4">
              Enquire Now
            </button>
            <div className="flex items-center mt-4">
              <div className="font-bold text-lg text-blue-200 mr-2">Follow us:</div>
              <div className="flex space-x-2">
                {/* <Link href="#" className="text-gray-200">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link href="#" className="text-gray-200">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link href="#" className="text-gray-200">
                  <FontAwesomeIcon icon={faInstagram} /> */}

                {/* </Link> */}
                {/* <div className="flex space-x-4">
      <SocialIcon
        url="https://twitter.com/your_twitter_profile"
        target="_blank"
        rel="noopener noreferrer"
        className="h-6 w-6"
      />
      <SocialIcon
        url="https://facebook.com/your_facebook_profile"
        target="_blank"
        rel="noopener noreferrer"
        className="h-6 w-6"
      />
       </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* <div className="bg-blue-950 mt-16 py-3.5">
          <div className="container mt- 10 mx-auto px-10 text-center">
            <p className="text-white text-lg">
              © 2023 Islington College. All rights reserved.
            </p>
          </div>
        </div>  */}
    </footer>
  );
};

export default Footer;
