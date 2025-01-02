import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className=' px-4 sm:px-[5vw] bg-gray-800 text-slate-200 font-sans flex items-center justify-center gap-8 h-20 '>
       <Image src={'/logo.png'} alt='' width={24} height={24} className=' w-12 rounded-full' /> 
       <p>All rights reserved @derco.co.za </p>
    </div>
  )
}

export default Footer
