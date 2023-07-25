'use client'
import React from 'react'
import { Typography,Button  } from '@mui/material';
import logout from '@public/logout.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter()
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='logout'>

                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginTop: '3rem',fontSize:'2.75rem',color: 'rgb(60, 60, 60)' }}>
                    解除绑定
                </Typography>
                <Image src={logout} alt="flower" className="logoutImg" />
                <Typography variant="h6" gutterBottom sx={{  marginTop: '2.37rem' }}>
                    请学校管理员或班主任微信扫一扫<br />
                    在微信小程序进行操作
                </Typography>
                <Button variant="contained" 
                sx={{width:'12.18rem',height:'4.06rem',borderRadius:'1.87rem',marginTop:'5.62rem',backgroundColor:'rgb(0, 167, 144)',fontSize:'1.87rem'}} onClick={() => router.back()}>退出</Button>
            </div>
        </div>
    )
}

export default page
  