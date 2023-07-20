'use client'
import React from 'react'
import { Typography,Button  } from '@mui/material';
import logout from '@public/logout.jpg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter()
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='logout'>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginTop: '27px' }}>
                    解除绑定
                </Typography>
                <Image src={logout} alt="flower" className="h-40 w-40 mt-4" />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginTop: '27px' }}>
                    请学校管理员或班主任微信扫一扫<br />
                    在微信小程序进行操作
                </Typography>
                <Button variant="contained" sx={{width:'115px',height:'38px',borderRadius:'19px',marginTop:'24px'}} onClick={() => router.back()}>退出</Button>
            </div>
        </div>
    )
}

export default page