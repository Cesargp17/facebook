import { FacebookLayout } from '@/components/layouts/FacebookLayout'
import { CrearPublicacion } from '@/components/pages/Home/CrearPublicacion'
import { Historias } from '@/components/pages/Home/Historias'
import { Publicaciones } from '@/components/pages/Home/components/Publicaciones/Publicaciones'
import React from 'react'

const HomePage = () => {
  return (
    <FacebookLayout>
      <div className='flex-col'>
        <Historias/>
        <CrearPublicacion/>
        <Publicaciones/>
      </div>
    </FacebookLayout>
  )
}

export default HomePage