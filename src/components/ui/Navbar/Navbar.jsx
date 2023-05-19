import React from 'react'
import { Search } from './components/Search'
import { Nav } from './components/Nav'
import { User } from './components/User'

export const Navbar = () => {
  return (
    <div className='h-14 w-full bg-[#242526] flex justify-between items-center px-4 fixed'>
        <div className='w-[50%] md:w-[33%]'>
            <Search/>          
        </div>

        <div className='w-[0%] md:w-[33%]'>
            <Nav/>
        </div>

        <div className='w-[50%] md:w-[33%]'>
            <User/>
        </div>
    </div>
  )
}
