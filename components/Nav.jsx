'use client'
import React from 'react'
import Typography from '@mui/material/Typography';
const Nav = () => {
  return (
    <nav className='h-nav w-full'>
      <Typography variant="subtitle2" gutterBottom>
        2023年
      </Typography>
      <Typography variant="h6" gutterBottom className='flex items-center'>
       <span className='weather'>9月18日</span><span className='weather ml-4'> 星期三</span><span className='weather ml-3.5'>32℃ </span>
       <span className='text-sm ml-2.5'>晴 </span><span className='text-sm ml-2.5'>空气质量: </span><span className='text-sm ml-2.5'>优 </span>
      </Typography>
    </nav>
  )
}

export default Nav