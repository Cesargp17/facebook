import React from 'react'
import { RiHome4Fill, RiShoppingBasketLine, RiGroup2Line, RiGamepadLine } from 'react-icons/ri'

export const Nav = () => {
  return (
    <div className='hidden md:flex'>
        <div className='text-[#2374E1] text-3xl mt-2 w-full hover:cursor-pointer'>
            <RiHome4Fill className='mx-auto'/>
            <div className='bg-[#2374E1] h-[3px] mt-2'/>
        </div>
        <div className='w-full text-3xl flex items-center justify-center hover:cursor-pointer text-gray-400'>
            <div className='hover:bg-[#3A3B3C] w-[80%] rounded-xl flex justify-center h-[90%] items-center'>
                <RiShoppingBasketLine/>
            </div>
        </div>
        <div className='w-full text-3xl flex items-center justify-center hover:cursor-pointer text-gray-400'>
            <div className='hover:bg-[#3A3B3C] w-[80%] rounded-xl flex justify-center h-[90%] items-center'>
                <RiGroup2Line/>
            </div>
        </div>
        <div className='w-full text-3xl flex items-center justify-center hover:cursor-pointer text-gray-400'>
            <div className='hover:bg-[#3A3B3C] w-[80%] rounded-xl flex justify-center h-[90%] items-center'>
                <RiGamepadLine/>
            </div>
        </div>
    </div>
  )
}
