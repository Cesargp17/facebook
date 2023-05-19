import Image from 'next/image'
import React from 'react'

export const Solicitudes = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-between items-center mr-4'>
            <h3 className='font-medium text-gray-300'>Solicitudes de amistad</h3>
            <span className='hover:underline text-blue-600 font-medium cursor-pointer'>Ver todo</span>
        </div>
        <div className='flex mt-3 items-center cursor-pointer hover:bg-[#3A3B3C] rounded-xl px-2 py-2'>
            <Image
                src={'/images/Profile.jpg'}
                width={60}
                height={60}
                className='rounded-full'
            />
            <div className='flex flex-col w-full'>
                <div className='flex justify-between'>
                    <span className='ms-2 text-gray-300 font-medium'>César Pérez</span>
                    <span className='mr-4 text-gray-300 text-sm font-medium'>5 d</span>
                </div>
                <span className='ms-2 text-gray-300 text-xs mt-2'>14 amigos en común</span>
            </div>
        </div>
        <div className='flex items-center justify-center mt-2'>
            <button className='bg-blue-600 hover:bg-blue-700 w-32 h-10 rounded-lg mr-1 text-white font-medium'>Confirmar</button>
            <button className='bg-[#444546] hover:bg-[#444546]/80 w-32 h-10 rounded-lg text-white font-medium'>Eliminar</button>
        </div>
    </div>
  )
}
