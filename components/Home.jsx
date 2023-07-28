'use client'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider from './Slider';
import { Typography, Grid, Paper, Avatar } from '@mui/material';
import Image from 'next/image'
import flower from '@public/flower.png'
import redFlag from '@public/redFlag.png'
import flower1 from '@public/flower1.jpg'
import Bullets from './Bullets';
import classIcon from '@public/classIcon.png'
import redFlag1 from '@public/redFlag1.png'
import flowerIcon from '@public/flowerIcon.png'
import LinearWithValueLabel from './LinearProgressWithLabel'
import commuteIcon from '@public/commuteIcon.png'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Home = () => {
  return (
    <div>
      <Box sx={{ height: '34rem', overflow: 'hidden' }}>
        <Grid container>
          <Grid item sx={{ width: '30.43rem' }}>
            <div className=''>
              <Grid item >
                <div className='classInformation'>
                  <div className='classInformation_left'>
                    <Typography variant="h5" gutterBottom sx={{ fontSize: '1.875rem', marginBottom: '0.3em', display: 'flex', alignItems: 'center' }}>
                      <Image src={classIcon} alt="classIcon" sx={{ width: '2.12rem', height: '1.75rem' }} />&nbsp;五年级3班
                    </Typography>
                    <div className='flex mt-7'>
                      <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '4rem', height: '4rem' }} />
                      <div className='ml-3.5'>
                        <Typography variant="h5" gutterBottom >
                          班主任：王美人
                        </Typography>
                        <div className='flex items-center mt-5'>
                          <Image src={flower} alt="flower" className="h-6 w-6" />
                          <span className='ml-2'>126</span>
                          <Image src={redFlag} alt="flower" className="h-6 w-6 ml-6" />
                          <span className='ml-2'>3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image src={redFlag1} alt="flower" className="classInformation_right" />
                </div>
              </Grid>
              <Grid item >
                <div className='safflowerRanking'>
                  <Typography variant="h5" gutterBottom sx={{ fontSize: '1.875rem', marginBottom: '0.3em', display: 'flex', alignItems: 'center' }}>
                    <Image src={flowerIcon} alt="classIcon" sx={{ width: '2.12rem', height: '1.75rem' }} />&nbsp;本周红花榜TOP3
                  </Typography>
                  <ul className='safflowerRankingList mt-7'>
                    <li className='flex justify-between items-center mb-3'>
                      <div className='flex items-center'>
                        <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '4rem', height: '4rem' }} /><span className='ml-2.5'>李晓莉</span></div>
                      <span className='flex items-center'>7朵&nbsp;&nbsp;<Image src={flower} alt="flower" className="h-6 w-6" /></span>
                    </li>
                    <li className='flex justify-between items-center mb-3'>
                      <div className='flex items-center'>
                        <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '4rem', height: '4rem' }} /><span className='ml-2.5'>李晓莉</span></div>
                      <span className='flex items-center'>5朵&nbsp;&nbsp;<Image src={flower} alt="flower" className="h-6 w-6" /></span>
                    </li>
                    <li className='flex justify-between items-center mb-3'>
                      <div className='flex items-center'>
                        <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '4rem', height: '4rem' }} /><span className='ml-2.5'>李晓莉</span></div>
                      <span className='flex items-center'>3朵&nbsp;&nbsp;<Image src={flower} alt="flower" className="h-6 w-6" /></span>
                    </li>
                  </ul>
                </div>
              </Grid>
            </div>
          </Grid>
          <Grid item sx={{ width: '60.18rem', marginLeft: '1.7rem', marginRight: '1.7rem', }}>
            <div className='slick relative overflow-hidden'>
              <Bullets />
              <Slider />
            </div>
          </Grid>
          <Grid item sx={{ width: '20.81rem' }}>
            <div className='slick'>
              <Typography variant="body2" gutterBottom sx={{ fontSize: '1.875rem', textAlign: 'center', color: 'rgb(60, 60, 60)', marginBottom: '2.87rem' }}>
                传音螺
              </Typography>

              <ul className='informationList'>
                <li className='flex mb-3.5'>
                  <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '4rem', height: '4rem' }} />
                  <Typography variant="subtitle2" gutterBottom className='flex flex-col ml-3 leading-[1.8]'>
                    <span className='text-2xl text-neutral-700'>张三妈妈</span>
                    <span className='informationText'>孩子，你在星期天还是去刘姥姥家吧</span>
                  </Typography>
                </li>
                <li className='flex mb-3.5'>
                  <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '4rem', height: '4rem' }} />
                  <Typography variant="subtitle2" gutterBottom className='flex flex-col ml-3 leading-[1.8]'>
                    <span className='text-2xl text-neutral-700'>张三妈妈</span>
                    <span className='informationText'>孩子，你在星期天还是去刘姥姥家吧</span>
                  </Typography>
                </li>
                <li className='flex mb-3.5'>
                  <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '4rem', height: '4rem' }} />
                  <Typography variant="subtitle2" gutterBottom className='flex flex-col ml-3 leading-[1.8]'>
                    <span className='text-2xl text-neutral-700'>张三妈妈</span>
                    <span className='informationText'>孩子，你在星期天还是去刘姥姥家吧</span>
                  </Typography>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: '10.875rem', overflow: 'hidden', marginTop: '1.1rem' }}>
        <Grid container >
          <Grid sx={{ width: '30.43rem', borderRadius: '0.56rem' }}>
            <div className='slick  '>
              <Typography variant="h5" sx={{ fontSize: '1.875rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center' }}>
                <Image src={commuteIcon} alt="flower" className="h-6 w-6 mr-2.5" />今日通勤率
              </Typography>
              <LinearWithValueLabel />
              <Typography variant="body2" gutterBottom className='mt-6 commuteText '>
                <span>总人数：</span>
                <span>45</span>
                <span className='ml-5'>请假：</span>
                <span>2</span>
              </Typography>
            </div>
          </Grid>
          <Grid sx={{ width: '60.18rem', marginLeft: '1.7rem', marginRight: '1.7rem', borderRadius: '0.56rem' }}>
            <div className='slick course flex items-center'>
              <div className='courseLeft flex items-center'>
                <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '4rem', height: '4rem' }} />
                <ul className='ml-3'>
                  <li className='text-2xl'>老师姓名</li>
                  <li className='text-lg'>正在上课</li>
                  <li className='text-2xl'>语文</li>
                </ul>
              </div>
              <div className='courseRight '>
                <ul className='courseList flex'>
                  <li>
                    <Typography gutterBottom>
                      第1节课
                    </Typography>
                    <Typography gutterBottom>
                      8.00-8.40
                    </Typography>
                    <Typography gutterBottom>
                      语文
                    </Typography>
                    <Typography gutterBottom>
                      老师姓名
                    </Typography>
                  </li>
                  <li className='active'>
                    <Typography gutterBottom>
                      第2节课
                    </Typography>
                    <Typography gutterBottom>
                      8.00-8.40
                    </Typography>
                    <Typography gutterBottom>
                      语文
                    </Typography>
                    <Typography gutterBottom>
                      老师姓名
                    </Typography>
                  </li>
                  <li>
                    <Typography gutterBottom>
                      第3节课
                    </Typography>
                    <Typography gutterBottom>
                      8.00-8.40
                    </Typography>
                    <Typography gutterBottom>
                      语文
                    </Typography>
                    <Typography gutterBottom>
                      老师姓名
                    </Typography>
                  </li>
                  <li>
                    <Typography gutterBottom>
                      第4节课
                    </Typography>
                    <Typography gutterBottom>
                      8.00-8.40
                    </Typography>
                    <Typography gutterBottom>
                      语文
                    </Typography>
                    <Typography gutterBottom>
                      老师姓名
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid sx={{ width: '20.81rem', borderRadius: '0.56rem' }}>
            <div className='slick videoCall'>

            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home