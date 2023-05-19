import React from 'react'
import { RiEmotionHappyFill, RiThumbUpFill, RiEmotionLaughFill } from 'react-icons/ri'

export const Reacciones = () => {
  return (
    <div className='flex'>
        <RiThumbUpFill className='text-xl text-[#1289CA] cursor-pointer'/>
        <RiEmotionHappyFill className='text-xl text-[#F8C03E] cursor-pointer'/>
        <RiEmotionLaughFill className='text-xl text-[#F8C03E] cursor-pointer'/>
        <span className='ms-1 text-gray-300 text-sm hover:underline cursor-pointer'>35</span>
    </div>
  )
}
