import { Profilepic } from '@/components/ui/Profilepic'
import Image from 'next/image'
import React from 'react'

export const Historia = () => {
  return (
    <div className="flex-shrink-0 w-[112px] mr-2 relative cursor-pointer">
        <Image
            src={'/images/History.jpg'}
            width={112}
            height={200}
            className='rounded-lg'
        />
        <div className='absolute top-2 left-2'>
            <Profilepic isHistory={true} />
        </div>
        <div className='absolute bottom-2 left-2'>
            <span className='text-white font-bold text-sm'>César Pérez</span>
        </div>
    </div>

  )
}
