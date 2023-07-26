'use client'
import Image from 'next/image'
import { Typography, Avatar, Button } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  width: '18.5rem', 
  height: '4.12rem', 
  borderRadius: '1.87rem', 
  marginTop: '8.87rem',
  fontSize: '1.87rem',
  '&:hover': {
    backgroundColor: teal[700],
  },
}));
const page = () => {
  return (
    <div className='flex'>
      <div className="mineCard">
        <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '8.06rem', height: '8.06rem', marginTop: '3.25rem' }} />
        <Typography variant="h5" gutterBottom sx={{ fontSize: '1.875rem', marginTop: '2.43rem', marginBottom: '1.75rem' }}>家长姓名</Typography>
        <span className='Label'>妈妈</span>
        <div className='CallTime'>
          <div className='CallTimeLeft'>
            <Typography variant="h5"
              gutterBottom sx={{ fontSize: '3rem', color: 'rgb(68, 68, 68)', textAlign: 'right' }}>15<span className='text-lg'>&nbsp;次</span></Typography>
            <Typography variant="h5" gutterBottom sx={{ fontSize: '1.875rem', marginTop: '1.25rem', textAlign: 'right' }}>累计通话</Typography>
          </div>
          <div className='CallTimeRight'>
            <Typography variant="h5"
              gutterBottom sx={{ fontSize: '3rem', color: 'rgb(68, 68, 68)', textAlign: 'right' }}>30<span className='text-lg'>&nbsp;分钟</span></Typography>
            <Typography variant="h5" gutterBottom sx={{ fontSize: '1.875rem', marginTop: '1.25rem', textAlign: 'right' }}>通话时长</Typography>
          </div>
        </div>
         <ColorButton variant="contained">开启视频通话</ColorButton>
      </div>
      <div className="mineCard">
        <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '8.06rem', height: '8.06rem', marginTop: '3.25rem' }} />
        <Typography variant="h5" gutterBottom sx={{ fontSize: '1.875rem', marginTop: '2.43rem', marginBottom: '1.75rem' }}>家长姓名</Typography>
        <span className='Label'>爸爸</span>
        <div className='CallTime'>
          <div className='CallTimeLeft'>
            <Typography variant="h5"
              gutterBottom sx={{ fontSize: '3rem', color: 'rgb(68, 68, 68)', textAlign: 'right' }}>2<span className='text-lg'>&nbsp;次</span></Typography>
            <Typography variant="h5" gutterBottom sx={{ fontSize: '1.875rem', marginTop: '1.25rem', textAlign: 'right' }}>累计通话</Typography>
          </div>
          <div className='CallTimeRight'>
            <Typography variant="h5"
              gutterBottom sx={{ fontSize: '3rem', color: 'rgb(68, 68, 68)', textAlign: 'right' }}>6<span className='text-lg'>&nbsp;分钟</span></Typography>
            <Typography variant="h5" gutterBottom sx={{ fontSize: '1.875rem', marginTop: '1.25rem', textAlign: 'right' }}>通话时长</Typography>
          </div>
        </div>
        <ColorButton variant="contained">开启视频通话</ColorButton>
      </div>
    </div>
  )
}

export default page