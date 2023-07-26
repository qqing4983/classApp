'use client'
import React from 'react'
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import Image from 'next/image'
import setUp from '@public/setUp.png'
const Nav = () => {
  return (
    <nav className='h-nav w-full'>
      <Typography variant="subtitle2" gutterBottom>
        2023年
      </Typography>
      <Typography variant="h6" gutterBottom className='flex items-center justify-between'>
      <div>
      <span className='weather'>9月18日</span><span className='weather ml-4'> 星期三</span><span className='weather ml-3.5'>32℃ </span>
       <span className='text-sm ml-2.5'>晴 </span><span className='text-sm ml-2.5'>空气质量: </span><span className='text-sm ml-2.5'>优 </span></div>
     <div>
     <Link href="/logout"> <LinkIcon fontSize='large' sx={{marginRight:'2.62rem'}}/></Link>
       <Link href="#"> 
       {/* <Image src={setUp} alt="flower" className="h-6 w-6" /> */}
       <SettingsIcon fontSize='large'/>
       </Link>
     </div>
      </Typography>
    </nav>
  )
}

export default Nav