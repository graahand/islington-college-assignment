
import Link from 'next/link';
import React from 'react';

const Imagegallery = () => {
  return (
    <div className='mt-[-24cm] mb-[15cm]'>
      <div className='ml-[4cm] '>
        <img src='aspire-md.jpg' className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:grayscale-100 duration-700'></img>
      </div>

      <div className='ml-[15cm] mt-[-15.5cm] '>
        <img src='holi-md.jpg' className='hover:opacity-50 filter hover:grayscale-100'></img>
      </div>
      <div className='ml-[31.5cm] mt-[-7.5cm]'>
        <img src='spring-md.jpg' className='hover:opacity-50 filter hover:grayscale-100'></img>
      </div>
      <div className='ml-[15cm] mt-[0.4cm]'>
        <img src='britain-md.jpg' className='hover:opacity-50 filter hover:grayscale-100'></img>
      </div>
      <div className='mt-[-7.5cm] ml-[26cm]'>
        <img src='xmas-md.jpg' className='hover:opacity-50 filter hover:grayscale-100'></img>
      </div>
      <div className='ml-[37cm] mt-[-7.5cm]'>
        <img src='sports-md.jpg' className='hover:opacity-50 filter hover:grayscale-100'></img>
      </div>
      <p className='ml-[25cm] mt-[3cm] uppercase text-slate-200 cursor-pointer hover:blue-500'>'See more &gt;'</p>
    </div>
  );
};

export default Imagegallery;
