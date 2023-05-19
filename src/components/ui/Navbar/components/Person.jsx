import Image from 'next/image'
import React from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { Profilepic } from '../../Profilepic'

export const Person = () => {
  return (
    <div className='flex mb-4 mt-2 justify-between hover:bg-[#3A3B3C] rounded-lg w-full h-12 items-center cursor-pointer'>
        <div className='flex'>
            <Profilepic/>
            <div className='flex flex-col'>
                <h3 className='text-white font-normal'>César Pérez</h3>
                <h4 className='text-xs text-gray-400'>Amigo</h4>
            </div>
        </div>
        <button className='text-gray-400 hover:bg-[#4E4F50] rounded-full w-7 h-7 flex items-center justify-center mr-2'>
            <RiCloseLine/>
        </button>
    </div>
  )
}
