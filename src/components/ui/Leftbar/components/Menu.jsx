import React from 'react'

export const Menu = ({ icon, text }) => {
  return (
    <div className='flex hover:cursor-pointer hover:bg-[#4E4F50] p-2 rounded-lg items-center'>
        <div className='text-2xl bg-[#3A3B3C] rounded-full w-10 h-10 flex items-center justify-center text-[#2374E1] mr-2'>
            { icon }
        </div>
        <h3 className='text-white font-medium'>{ text }</h3>
    </div>
  )
}
