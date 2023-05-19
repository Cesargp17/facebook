import Image from 'next/image'
import React from 'react'

export const Contacto = () => {
  return (
    <div className='flex items-center hover:bg-[#3A3B3C] p-2 rounded-lg cursor-pointer'>
        <div className='relative'>
            <Image
                src={'/images/Profile.jpg'}
                width={40}
                height={40}
                className='rounded-full'
            />
            <div className='absolute w-2 h-2 rounded-full bg-green-600 right-0 bottom-1'/>
        </div>
        <span className='ms-2 text-gray-300 font-medium'>César Pérez</span>
    </div>
  )
}
