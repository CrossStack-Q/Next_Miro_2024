
import React from 'react'

interface type1q{
    params:{
        type1: string
    }
}

const page = ({params}:type1q) => {
   

  return (
    <div>
        
        Hello
        <p className='text-2xl text-blue-600'>
        {params.type1}
        </p>
    </div>
  )
}

export default page