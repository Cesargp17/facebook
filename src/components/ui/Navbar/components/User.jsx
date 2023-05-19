import Image from 'next/image'
import React from 'react'
import { RiMenu5Fill, RiMessengerFill, RiNotification2Fill } from 'react-icons/ri'

export const User = () => {
  return (
    <div className='flex justify-end'>
        <div className='text-xl bg-[#3A3B3C] rounded-full w-10 h-10 flex items-center justify-center text-gray-400 hover:cursor-pointer hover:bg-[#4E4F50] mr-2'>
            <RiMenu5Fill/>
        </div>
        <div className='text-xl bg-[#3A3B3C] rounded-full w-10 h-10 flex items-center justify-center text-gray-400 hover:cursor-pointer hover:bg-[#4E4F50] mr-2'>
            <RiMessengerFill/>
        </div>
        <div className='text-xl bg-[#3A3B3C] rounded-full w-10 h-10 flex items-center justify-center text-gray-400 hover:cursor-pointer hover:bg-[#4E4F50] mr-2'>
            <RiNotification2Fill/>
        </div>
        <div className='text-xl bg-[#3A3B3C] rounded-full w-10 h-10 flex items-center justify-center text-gray-400 hover:cursor-pointer hover:bg-[#4E4F50] mr-2'>
            <Image
                src='/images/Profile.jpg'
                width={40}
                height={40}
                className='rounded-full'
                alt='Imagen de perfil'
            />
        </div>
    </div>
  )
}
