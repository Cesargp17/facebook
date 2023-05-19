import React from 'react'
import { RiArrowLeftFill, RiMenu5Fill, RiSearchLine } from 'react-icons/ri'
import { SearchResults } from './SearchResults'

export const Searchbar = ({ isSearching, setIsSearching }) => {
  return (
    <div className='relative w-full flex z-50'>
        <div onClick={ () => setIsSearching( true ) } className='text-xl bg-[#3A3B3C] rounded-full w-10 h-10 flex items-center justify-center text-gray-400 hover:cursor-pointer hover:bg-[#4E4F50] mr-2 lg:hidden'>
            <RiSearchLine/>
        </div>
        <div onClick={ () => setIsSearching( true ) } className='relative w-full text-white hidden lg:block'>
            <div className='absolute left-3 top-3'>
                <RiSearchLine/>
            </div>
            <input 
                className='bg-[#3A3B3C] rounded-full w-[40%] h-10 px-8 focus:outline-none' 
                placeholder='Buscar en Facebook' 
                type="text" 
            />
        </div>
        <div className={`absolute z-50 bg-[#242526] rounded-b-2xl w-80 h-[500px] ${ isSearching ? 'block' : 'hidden' } top-0 -left-4 flex shadow-xl`} >
            <div onClick={ () => setIsSearching( false ) } className={`text-xl rounded-full w-9 h-9 flex items-center justify-center text-gray-400 hover:cursor-pointer hover:bg-[#4E4F50] ${ isSearching ? 'block' : 'hidden' }`}>
                <RiArrowLeftFill/>
            </div>
            <div onClick={ () => setIsSearching( true ) } className='relative w-full text-white'>
                <div className='absolute left-3 top-3'>
                    <RiSearchLine/>
                </div>
                <input 
                    className='bg-[#3A3B3C] rounded-full w-[90%] h-10 px-8 focus:outline-none' 
                    placeholder='Buscar en Facebook' 
                    type="text" 
                />
            </div>
            <div className='absolute flex flex-col top-12 p-3 w-full justify-between'>
                <div className='flex w-full justify-between'>
                    <h3 className='text-gray-300 font-medium text-md'>Recientes</h3>
                    <button className='text-[#2374E1] hover:bg-[#4E4F50] w-[60px] rounded-md'>Editar</button>
                </div>

                <SearchResults/>

            </div>
        </div>
    </div>
  )
}
