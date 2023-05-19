import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui/Navbar/Navbar'
import { Leftbar } from '../ui/Leftbar/Leftbar'
import { Rigthbar } from '../ui/Rightbar/Rightbar'
import { RiAddFill } from 'react-icons/ri'

export const FacebookLayout = ({ children }) => {
  return (
    <>
        <Head>
            <title>Facebook</title>
            <link rel="icon" href="/images/Logo.ico"/>
        </Head>

        <nav className='z-50 fixed'>
          <Navbar/>
        </nav>

        <div className='xl:flex hidden'>
            <Leftbar/>
          </div>
          <div className='lg:flex hidden justify-end'>
            <Rigthbar/>
          </div>

        <main className='h-screen bg-facebook flex justify-center xl:ms-80 lg:mr-80'>
            { children }
        </main>

        <button className='fixed z-50 bottom-4 right-4 text-white text-3xl rounded-full bg-gray-500 w-12 h-12 flex items-center justify-center'>
          <RiAddFill/>
        </button>
    </>
  )
}
