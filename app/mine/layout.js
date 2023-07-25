'use client'
import Image from 'next/image'
import footer5 from '@public/footer5.png'
import { Typography, Grid, Paper, Avatar } from '@mui/material';
export default function RootLayout({
    children,
  }) {
    return (
    <main className='flex'>
        <div className="mineCard">
        <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '8.06rem', height: '8.06rem',marginTop:'3.25rem' }} />
        <Typography variant="h5" gutterBottom sx={{ fontSize: '1.875rem', marginTop: '2.43rem',marginBottom:'6.25rem' }}>姓名</Typography>
          <div className='mineButton'></div>
          <div className='mineButton'></div>
        </div>
        <div className='flex-1'>{children} </div>
    </main>
    )
  }