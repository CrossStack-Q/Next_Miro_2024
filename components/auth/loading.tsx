import React from 'react'
import Image from 'next/image'

type Props = {}

function Loading({}: Props) {
  return (
    <div  className='h-full w-full flex flex-col justify-center items-center'>
        <Image src="/logo.png" alt='logo' width={120} height={120} className='animate-pulse duration-700'/>
    </div>
  )
}

export default Loading