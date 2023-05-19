import Image from 'next/image'
import React from 'react'

export const Profilepic = ({ isHistory = false }) => {
  return (
    <div className='text-xl bg-[#3A3B3C] rounded-full w-10 h-10 flex items-center justify-center text-gray-400 mr-2'>
        <Image
            src='/images/Profile.jpg'
            width={40}
            height={40}
            className={`rounded-full ${ isHistory && 'ring-4 ring-blue-700' }`}
            alt='Imagen de Avatar'
        />
    </div>
  )
}
