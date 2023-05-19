import React from 'react'
import { RiShareForwardLine } from 'react-icons/ri'

export const Compartir = () => {
  return (
    <div className='w-full flex text-gray-300 items-center hover:bg-[#3A3B3C] justify-center cursor-pointer rounded-lg h-8'>
        <RiShareForwardLine className='text-2xl mr-2'/>
        <span className='text-md font-medium'>Compartir</span>
    </div>
  )
}
