'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';


const Typewriter = () => {
  return (

<Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>
  )
}

export default Typewriter