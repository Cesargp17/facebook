import React from 'react'
import { Avatar } from './components/Avatar'
import { Menu } from './components/Menu'
import { RiGroup2Fill, RiGroupFill, RiNewspaperFill, RiPlayCircleFill, RiShoppingBag3Fill } from 'react-icons/ri'
import { AccesoDirecto } from './components/AccesoDirecto'
import { VerMas } from './components/VerMas'
import { Politicas } from './components/Politicas'

export const Leftbar = () => {
  return (
    <div className='fixed h-screen mt-14 w-80 bg-facebook'>
        <div className='mt-4 ms-2'>
            <Avatar/>
            <Menu text={'Amigos'} icon={<RiGroupFill/>}/>
            <Menu text={'Más recientes'} icon={<RiNewspaperFill/>}/>
            <Menu text={'Grupos'} icon={<RiGroup2Fill/>}/>
            <Menu text={'Marketplace'} icon={<RiShoppingBag3Fill/>}/>
            <Menu text={'Watch'} icon={<RiPlayCircleFill/>}/>
            <VerMas/>
            
            <div className='w-full h-[0.3px] bg-gray-700 mt-2 mb-4'/>

            <h2 className='text-gray-300 text-lg font-medium ms-2 mb-2'>Tus accesos directos</h2>
            <AccesoDirecto img={'img6.png'} rounded={'rounded-xl'} text={'NEXT.JS en Español'}/>
            <AccesoDirecto img={'img1.jpg'} rounded={'rounded-xl'} text={'Solo Futboleros'}/>
            <AccesoDirecto img={'img.jpg'} rounded={'rounded-xl'} text={'Chivamania TV'}/>
            <AccesoDirecto img={'img3.png'} rounded={'rounded-xl'} text={'La banda del chivahermano✊👊'}/>
            <AccesoDirecto img={'img5.png'} rounded={'rounded-xl'} text={'Clubes Pro Fifa 23 (Origin - EA)'}/>
            <VerMas/>

            <Politicas/>
        </div>
    </div>
  )
}
