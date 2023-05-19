import { Avatar } from '@/components/ui/Leftbar/components/Avatar'
import Image from 'next/image'
import React from 'react'
import { Like } from './Like'
import { Comentario } from './Comentario'
import { Compartir } from './Compartir'
import { Reacciones } from './Reacciones'
import { Comentarios } from './Comentarios'
import { RiCloseFill, RiMoreFill } from 'react-icons/ri'

export const Publicacion = () => {
  return (
    <div className='h-auto mt-4 w-screen md:w-[680px] bg-[#242526] md:rounded-xl p-3'>
      <div className='flex justify-between items-center'>
        <Avatar isPublication={ true }/>
        <div className='flex'>
          <RiMoreFill className='text-2xl text-gray-300 cursor-pointer hover:bg-[#3A3B3C] rounded-full p-2 w-9 h-9'/>
          <RiCloseFill className='text-2xl text-gray-300 cursor-pointer hover:bg-[#3A3B3C] rounded-full p-2 w-9 h-9'/>
        </div>
      </div>
      <p className='text-white text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      <Image
        src={'/images/Paisaje.jpg'}
        width={680}
        height={400}
        className='mt-4'
      />
      <div className='flex justify-between items-center mt-2'>
        <Reacciones/>
        <Comentarios/>
      </div>
      <div className='w-full h-[0.3px] mt-4 mb-2 bg-gray-700'/>
      <div className='flex w-full justify-center'>
        <Like/>
        <Comentario/>
        <Compartir/>
      </div>
    </div>
  )
}
