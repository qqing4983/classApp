'use client'
import Image from 'next/image'
import { Typography, Grid, Paper, Avatar, Button } from '@mui/material';
import videoIcon from '@public/videoIcon.svg'
import message from '@public/message.svg'
import Link from 'next/link';
import videoActive from '@public/videoActive.png'
import messageActive from '@public/messageActive.png'
const page = () => {
  return (
    <div className='flex'>
      <div className="mineCard">
        <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '8.06rem', height: '8.06rem', marginTop: '3.25rem' }} />
        <Typography variant="h5"  sx={{ fontSize: '1.875rem', marginTop: '2.43rem', marginBottom: '1.75rem' }}>家长姓名</Typography>
        <span className='Label'>妈妈</span>
        <Typography variant="h5" 
          sx={{ fontSize: '1.875rem', marginTop: '1.25rem', textAlign: 'right', color: 'rgb(68, 68, 68)', display: 'flex', alignItems: 'center' }}>累计通话&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className='text-5xl'>15</span><span className='text-lg'>&nbsp;&nbsp;次</span>
        </Typography>
        <Typography variant="h5" 
          sx={{ marginTop: '3.5rem', width: '100%', paddingLeft: '4rem' }}>
          最新留言——
        </Typography>
        <Typography variant="h5" 
          sx={{ marginTop: '0.75rem', width: '100%', paddingLeft: '4rem', paddingRight: '4rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          儿子，晚上我们去爷爷家吃饭，你记的圣诞节含税单价哈就是就哈市是兑换啊还睡不着宁波慈溪啊是噶登记哈萨
        </Typography>
        <Link href={`/SoundMuleDetail/7`}>
        <Button variant="contained"
          sx={{ width: '15.93rem', height: '4.06rem', borderRadius: '1.87rem', marginTop: '5rem', fontSize: '1.87rem' }} >进入详情</Button>
          </Link>
      </div>
      <div className="mineCard">
        <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '8.06rem', height: '8.06rem', marginTop: '3.25rem' }} />
        <Typography variant="h5"  sx={{ fontSize: '1.875rem', marginTop: '2.43rem', marginBottom: '1.75rem' }}>家长姓名</Typography>
        <span className='Label'>爸爸</span>
        <Typography variant="h5" 
          sx={{ fontSize: '1.875rem', marginTop: '1.25rem', textAlign: 'right', color: 'rgb(68, 68, 68)', display: 'flex', alignItems: 'center' }}>累计通话&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className='text-5xl'>2</span><span className='text-lg'>&nbsp;&nbsp;次</span>
        </Typography>
        <Typography variant="h5" 
          sx={{ marginTop: '3.5rem', width: '100%', paddingLeft: '4rem' }}>
          最新留言——
        </Typography>
        <Typography variant="h5" 
          sx={{ marginTop: '0.75rem', width: '100%', paddingLeft: '4rem', paddingRight: '4rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          儿子，晚上我们去爷爷家吃饭，你记的圣诞节含税单价哈就是就哈市是兑换啊还睡不着宁波慈溪啊是噶登记哈萨
        </Typography>
        <Link href={`/SoundMuleDetail/7`}>
        <Button variant="contained"
          sx={{ width: '15.93rem', height: '4.06rem', borderRadius: '1.87rem', marginTop: '5rem', fontSize: '1.87rem' }} >进入详情</Button>
          </Link>
      </div>
    </div>
  )
}

export default page