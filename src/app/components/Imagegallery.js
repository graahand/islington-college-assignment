import React from 'react';

const Imagegallery = () => {
  return (
    <div className='mt-[-24cm] mb-[15cm]'>
      <div className='ml-[4cm] relative group'>
        <img src='aspire-md.jpg' className='hover:opacity-50'></img>
          {/* <h1 className='text-3xl text-left font-bold mb-2'>Heading</h1>
          <hr className='border-1 border-white-500 w-52' />
          <p className='text-lg text-left  mt-2'>This is the text<br />shown in the image</p> */}
        
      </div>

      <div className='ml-[15cm] mt-[-15.5cm] '>
        <img src='holi-md.jpg' className='hover:opacity-50'></img>
      </div>
      <div className='ml-[31.5cm] mt-[-7.5cm]'>
        <img src='spring-md.jpg' className='hover:opacity-50'></img>
      </div>
      <div className='ml-[15cm] mt-[0.4cm]'>
        <img src='britain-md.jpg' className='hover:opacity-50'></img>
      </div>
      <div className='mt-[-7.5cm] ml-[26cm]'>
        <img src='xmas-md.jpg' className='hover:opacity-50'></img>
      </div>
      <div className='ml-[37cm] mt-[-7.5cm]'>
        <img src='sports-md.jpg' className='hover:opacity-50'></img>
      </div>
      <button className='ml-[25cm] mt-[3cm] uppercase text-slate-500 cursor-pointer hover:blue-500'>See more &gt;</button>
    </div>
  );
};

export default Imagegallery;
