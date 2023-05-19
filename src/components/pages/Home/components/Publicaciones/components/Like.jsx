import React from 'react'
import { RiThumbUpLine } from 'react-icons/ri'

export const Like = () => {
  return (
    <div className='w-full flex text-gray-300 items-center hover:bg-[#3A3B3C] justify-center cursor-pointer rounded-lg h-8'>
        <RiThumbUpLine className='text-2xl mr-2'/>
        <span className='text-md font-medium'>Me gusta</span>
    </div>
  )
}
