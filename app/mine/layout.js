'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Typography, Grid, Paper, Avatar } from '@mui/material';
import videoIcon from '@public/videoIcon.svg'
import message from '@public/message.svg'
import Link from 'next/link';
import videoActive from '@public/videoActive.png'
export default function RootLayout({
    children,
  }) {
    const pathname = usePathname()
    return (
    <main className='flex'>
        <div className="mineCard">
        <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '8.06rem', height: '8.06rem',marginTop:'3.25rem' }} />
        <Typography variant="h5" gutterBottom sx={{ fontSize: '1.875rem', marginTop: '2.43rem',marginBottom:'6.25rem' }}>姓名</Typography>
        <Link href="/mine/videoCall"> 
          <div className={`mineButton ${pathname=='/mine/videoCall'?'videoCallActive':''}`}>
          <Image src={pathname=='/mine/videoCall'?videoActive:videoIcon} alt="videoIcon" sx={{ width: '2.12rem', height: '2.37rem',marginTop:'-1rem' }} />
          <Typography variant="h5" gutterBottom sx={{ fontSize: '1.875rem',marginBottom:'0' }}>视频通话</Typography>
          </div>
          </Link>
          <Link href="/mine/SoundMule"> 
          <div className='mineButton'>
          <Image src={message} alt="message" sx={{ width: '4.18rem', height: '3.81rem',marginTop:'-1rem' }} />
          <Typography variant="h5" gutterBottom sx={{ fontSize: '1.875rem',marginBottom:'0' }}>传音螺</Typography>
          </div>
          </Link>
        </div>
        <div className='flex-1'>{children} </div>
    </main>
    )
  }
 