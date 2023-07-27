'use client'
import QRCode from 'qrcode.react';
import { Typography, Button } from '@mui/material';
import logo from '@public/logo.png'
import Image from 'next/image'
import Qrcode from '@components/Qrcode';
import QRcode1 from '@public/QRcode.png'
const page = () => {

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='logout'>
        <Image src={logo} alt="flower" className="logoImg" />
        <Typography variant="h5"  sx={{ marginTop: '1.75rem' }}>
          乐教乐学智能教考终端
        </Typography>
        <Typography variant="h5"  sx={{ marginTop: '2.5rem', fontSize: '2.75rem' }}>
          学校数字化转型就用乐教乐学
        </Typography>
        <div className='Qrcode'>
          <div className='QrcodeLeft'>
            <Image src={QRcode1} alt="flower" className="QrcodeImg" />
            <Typography variant="h5"  sx={{ marginTop: '1.9rem' }}>
              第一步
            </Typography>
            <Typography variant="h5"  >
              微信扫一扫进入小程序
            </Typography>
          </div>
          <div className='QrcodeRight flex flex-col items-center'>
            <div className='QrcodeImg'>
              <Qrcode />
            </div>
            <Typography variant="h5"  sx={{ marginTop: '1.9rem' }}>
              第二步
            </Typography>
            <Typography variant="h5"  >
              小程序班牌管理中扫一扫
            </Typography>
          </div>
        </div>

      </div>
      <Typography variant="h5"   className='text-center mt-16'>
        北京乐教乐学科技有限公司<br/>
        400-001-2898
      </Typography>
    </div>
  )
}

export default page
