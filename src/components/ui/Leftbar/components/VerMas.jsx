import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

export const VerMas = () => {
  return (
    <div className='flex hover:cursor-pointer hover:bg-[#4E4F50] p-2 rounded-lg items-center'>
        <div className='text-2xl bg-[#3A3B3C] rounded-full w-10 h-10 flex items-center justify-center text-white mr-2'>
            <RiArrowDownSLine/>
        </div>
        <h3 className='text-white font-medium'>Ver más</h3>
    </div>
  )
}
