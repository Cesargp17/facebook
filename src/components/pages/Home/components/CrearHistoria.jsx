import { Profilepic } from '@/components/ui/Profilepic'
import Image from 'next/image'
import React from 'react'
import { RiAddCircleFill } from 'react-icons/ri'

export const CrearHistoria = () => {
  return (
    <div className="flex-shrink-0 w-[120px] h-[200px] rounded-lg mr-2 relative cursor-pointer shadow-2xl">
        {/* <Image
            src={'/images/Profile.jpg'}
            width={100}
            height={150}
            className='bg-cover bg-center'
        /> */}
        <img src="/images/Profile.jpg" className='w-full bg-cover bg-center h-[140px] rounded-t-lg' alt="" />
        <div className='absolute top-32 left-11'>
            <RiAddCircleFill className='text-[#2374E1] text-4xl ring-4 bg-[#242526] rounded-full ring-[#242526]'/>
        </div>
        <span className='text-white font-bold text-sm absolute bottom-2 right-4'>Crear historia</span>
    </div>
  )
}
