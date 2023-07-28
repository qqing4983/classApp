'use client'
import React from 'react'
import { Typography,Button  } from '@mui/material';
import logout from '@public/logout.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const page = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
    <div className='logout'>

        <Typography variant="h6"  sx={{ marginTop: '3.12rem',fontSize:'2rem',color: 'rgb(60, 60, 60)' }}>
        请正确对准摄像头
        </Typography>
            <div className='faceAuthenticationframe'></div>
            <Typography variant="h6"  sx={{ marginTop: '1.3rem',fontSize:'1.5rem',color: 'rgb(236, 56, 52)' }}>
            多次认证失败，请调整位置重试
        </Typography>
        <Button variant="contained" 
        sx={{width:'12.18rem',height:'4.06rem',borderRadius:'1.87rem',marginTop:'2.75rem',backgroundColor:'rgb(0, 167, 144)',fontSize:'1.87rem'}} 
       >点击重试</Button>
    </div>
</div>
  )
}

export default page

