import React from 'react'
import { Historia } from './components/Historia'
import { CrearHistoria } from './components/CrearHistoria'

export const Historias = () => {
  return (
    <div className='h-[232px] mt-20 w-screen md:w-[680px] bg-[#242526] md:rounded-xl flex items-center justify-center overflow-x-auto flex-nowrap'>
        <CrearHistoria/>
        <Historia/>
        <Historia/>
        <Historia/>
        <Historia/>
    </div>
  )
}
