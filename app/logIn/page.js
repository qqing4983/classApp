'use client'
import { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { Typography, Button } from '@mui/material';
import logo from '@public/logo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter()
  const [data, setData] = useState('Initial Data'); 
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setData(`Updated Data #${counter}`);
      setCounter((prevCounter) => prevCounter + 1);
    }, 3000); 

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='logout'>
        <Image src={logo} alt="flower" className="logoImg" />
        <Typography variant="h5" gutterBottom sx={{marginTop:'1.75rem'}}>
        乐教乐学智能教考终端
        </Typography>
        <Typography variant="h5" gutterBottom sx={{marginTop:'2.5rem',fontSize:'2.75rem'}}>
        学校数字化转型就用乐教乐学
        </Typography>
        <QRCode value={data} size={256} 
      //   imageSettings={{ // 二维码中间的logo图片 
      //     src: './logo.png', //路径
      //     height: 100, //高端
      //     width: 100, //宽度
      //     excavate: true, // 中间图片所在的位置是否镂空 
      // }}
        />
      </div>
    </div>
  )
}

export default page
