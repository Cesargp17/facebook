import React from 'react'
import { Profilepic } from '../../Profilepic'
import Image from 'next/image'

export const AccesoDirecto = ({ img, rounded, text }) => {
  return (
    <div className='flex hover:cursor-pointer hover:bg-[#4E4F50] p-2 rounded-lg items-center'>
        <Image
            src={`/images/${ img }`}
            width={40}
            height={40}
            className={`${ rounded } mr-2`}
        />
        <div>
          <h3 className='text-white font-medium'>{ text }</h3>
        </div>
    </div>
  )
}
