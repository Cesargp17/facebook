import Image from 'next/image'
import React from 'react'
import { Profilepic } from '../../Profilepic'

export const Avatar = ({ isPublication = false }) => {
  return (
    <div className={`flex ${ !isPublication && 'hover:bg-[#4E4F50]'} cursor-pointer p-2 rounded-lg items-center`}>
        <Profilepic/>
        <div>
          <h3 className='text-white font-medium hover:underline'>César Pérez</h3>
          { isPublication && <span className='text-gray-400 text-xs'>Hace 10 minutos</span> }
        </div>
    </div>
  )
}
