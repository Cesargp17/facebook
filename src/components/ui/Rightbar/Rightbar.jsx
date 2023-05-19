import React from 'react'
import { RiAddBoxLine, RiGroup2Line, RiMoreFill } from 'react-icons/ri'
import { AccesoDirecto } from '../Leftbar/components/AccesoDirecto'
import { Solicitudes } from './components/Solicitudes'
import { Contactos } from './components/Contactos'

export const Rigthbar = () => {
  return (
    <div className='h-screen fixed bg-facebook mt-14 w-80 overflow-y-auto'>
        <div className='flex justify-between mt-4 items-center mr-2'>
            <h3 className='font-medium text-gray-300'>Tus páginas y perfiles</h3>
            <RiMoreFill className='text-2xl text-gray-300 cursor-pointer hover:bg-[#3A3B3C] rounded-full p-2 w-9 h-9'/>
        </div>
        <div className='flex flex-col'>
          <AccesoDirecto img={'img6.png'} rounded={'rounded-xl'} text={'NEXT.JS en Español'}/>
          <div className='text-gray-300 text-sm font-medium mt-1 ms-3 hover:bg-[#3A3B3C] cursor-pointer h-8 rounded-lg flex items-center px-2'>
            <RiGroup2Line className='text-xl'/> 
            <span className='ms-2'>Cambiar la página</span>
          </div>
          <div className='text-gray-300 text-sm font-medium mt-1 ms-3 hover:bg-[#3A3B3C] cursor-pointer h-8 rounded-lg flex items-center px-2'>
            <RiAddBoxLine className='text-xl'/>
            <span className='ms-2'>Crear promoción</span>
          </div>
        </div>
        <div className='w-full h-[0.3px] bg-gray-700 mt-2 mb-4'/>
        <Solicitudes/>
        <div className='w-full h-[0.3px] bg-gray-700 mt-6 mb-4'/>
        <Contactos/>
    </div>
  )
}
