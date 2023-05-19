import { Profilepic } from '@/components/ui/Profilepic'
import React from 'react'
import { RiEmotionFill, RiImage2Fill, RiRecordCircleFill } from 'react-icons/ri'

export const CrearPublicacion = () => {
  return (
    <div className='h-[123px] mt-4 w-screen md:w-[680px] bg-[#242526] md:rounded-xl flex flex-col items-center justify-center px-4'>
        <div className='flex w-full'>
            <Profilepic/>
            <input className='w-full rounded-full bg-[#3A3B3C] h-10 px-4 text-lg focus:outline-none text-gray-300' placeholder='Que estas pensando, Cesar?' type="text" />
        </div>
        <div className='w-full h-[0.3px] mt-4 mb-2 bg-gray-700'/>
        <div className='flex w-full justify-center'>
            <div className='hidden w-full md:flex items-center justify-center hover:bg-[#3A3B3C] rounded-lg p-2 cursor-pointer'>
                <RiRecordCircleFill className='text-3xl text-red-700'/>
                <h3 className='text-gray-300 font-medium ms-2'>Video en vivo</h3>
            </div>
            <div className='flex w-full items-center justify-center hover:bg-[#3A3B3C] rounded-lg p-2 cursor-pointer'>
                <RiImage2Fill className='text-3xl text-[#58C472]'/>
                <h3 className='text-gray-300 font-medium ms-2'>Foto/video</h3>
            </div>
            <div className='flex w-full items-center justify-center hover:bg-[#3A3B3C] rounded-lg p-2 cursor-pointer'>
                <RiEmotionFill className='text-3xl text-[#F8C03E]'/>
                <h3 className='text-gray-300 font-medium ms-2'>Sentimiento/actividad</h3>
            </div>
        </div>
    </div>
  )
}
