"use client";

import { UserButton } from '@clerk/clerk-react';
import React from 'react'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='flex justify-between items-center gap-x-4 p-5 bg-green-500'>
      <div>
        Logo
        <div className='hidden lg:flex lg:flex-1'>
          {/* Search */}
        </div>
      </div>
      <div>
        <UserButton/>
      </div>
    </div>
  )
}

export default Navbar