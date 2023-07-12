'use client'
import Image from 'next/image'
import Navbar from './layout/navbar'

export default function Home() {
  return (
    <>
    <div>
          <Navbar/>
    </div>
    <div className='relative' >
      <Image className='flex bg-center md:bg-top' 
      src='/homepage.jpg'
      width={1920}
      height={900}
      />
      

    </div>
    <div className="container mx-auto py-12 text-center">
        <h1 className="text-4xl font-normal text-blue-500 leading-snug">
          The Islington<br/>
          <span className="font-bold">Experience</span>
        </h1>
        {/* Add more elements or content here */}
      </div>

    
    </>
  )
}
