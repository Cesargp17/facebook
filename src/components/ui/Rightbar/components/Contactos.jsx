import React from 'react'
import { RiMoreFill, RiRecordCircleFill, RiSearchLine } from 'react-icons/ri'
import { Contacto } from './Contacto'

export const Contactos = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-between items-center mr-2'>
            <h3 className='font-medium text-gray-300'>Contactos</h3>
            <div className='flex'>
                <RiRecordCircleFill className='text-2xl text-gray-300 cursor-pointer hover:bg-[#3A3B3C] rounded-full p-2 w-9 h-9'/>
                <RiSearchLine className='text-2xl text-gray-300 cursor-pointer hover:bg-[#3A3B3C] rounded-full p-2 w-9 h-9'/>
                <RiMoreFill className='text-2xl text-gray-300 cursor-pointer hover:bg-[#3A3B3C] rounded-full p-2 w-9 h-9'/>
            </div>
        </div>
        <div>
            <Contacto/>
            <Contacto/>
            <Contacto/>
            <Contacto/>
            <Contacto/>
            <Contacto/>
            <Contacto/>
            <Contacto/>
            <Contacto/>
            <Contacto/>
            <Contacto/>
            <Contacto/>
        </div>
    </div>
  )
}
