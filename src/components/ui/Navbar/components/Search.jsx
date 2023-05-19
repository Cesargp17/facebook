import Image from 'next/image'
import React, { useState } from 'react'
import { Searchbar } from './Searchbar';


export const Search = () => {

    const [isSearching, setIsSearching] = useState(false);

    return (
    <div className='flex'>
        {
            !isSearching &&  
            <Image
            src='/images/Logo.png'
            width={40}
            height={40}
            className='mr-2 cursor-pointer'
            alt='Logo de Facebook'
        />
        }
        <Searchbar
            isSearching={ isSearching }
            setIsSearching={ setIsSearching }
        />
    </div>
  )
}
