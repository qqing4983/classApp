'use client'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider from './Slider';
import { Typography, Grid, Paper, Avatar } from '@mui/material';
import Image from 'next/image'
import flower from '@public/flower.svg'
import redFlag from '@public/redFlag.svg'
import flower1 from '@public/flower1.jpg'
import Bullets from './Bullets';
import LinearWithValueLabel from './LinearProgressWithLabel'
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

      <Box sx={{ height: '353px', overflow: 'hidden' }}>
        <Grid container spacing={{ lg: 2, md: 8 }}>
          <Grid item lg={3} md={4}>
            <div className=''>
              <Grid item lg={12} >
                <div className='classInformation'>
                  <div className='classInformation_left'>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '0.3em' }}>
                      五年级3班
                    </Typography>
                    <Typography variant="body2" gutterBottom sx={{ marginTop: '8px' }}>
                      班主任：王美人
                    </Typography>
                    <div className='flex items-center'>
                      <Image src={flower} alt="flower" className="h-6 w-6" />
                      <span className='ml-2'>126</span>
                      <Image src={redFlag} alt="flower" className="h-6 w-6 ml-6" />
                      <span className='ml-2'>3</span>
                    </div>
                  </div>
                  <div className='classInformation_right'></div>
                </div>
              </Grid>
              <Grid item lg={12}>
                <div className='safflowerRanking'>
                  <Typography variant="body2" gutterBottom sx={{ textAlign: 'center' }}>
                    本周红花榜
                  </Typography>
                  <ul className='safflowerRankingList'>
                    <li className='flex justify-between items-center mb-2'>
                      <div className='flex items-center'> <Image src={flower1} alt="flower" className="h-5 w-5 mr-2" />
                        <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: 46, height: 46 }} /><span className='ml-2.5'>李晓莉</span></div>
                      <span>7朵</span>
                    </li>
                    <li className='flex justify-between items-center mb-2'>
                      <div className='flex items-center'> <Image src={flower1} alt="flower" className="h-5 w-5 mr-2" />
                        <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: 46, height: 46 }} /><span className='ml-2.5'>李晓莉</span></div>
                      <span>5朵</span>
                    </li>
                    <li className='flex justify-between items-center mb-2'>
                      <div className='flex items-center'> <Image src={flower1} alt="flower" className="h-5 w-5 mr-2" />
                        <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: 46, height: 46 }} /><span className='ml-2.5'>李晓莉</span></div>
                      <span>3朵</span>
                    </li>
                  </ul>
                </div>
              </Grid>
            </div>
          </Grid>
          <Grid item lg={6.5} md={5}>
            <div className='slick relative overflow-hidden'>
              <Bullets />
              <Slider />
            </div>
          </Grid>
          <Grid item lg={2.5} md={3}>
            <div className='slick'>
              <Typography variant="body2" gutterBottom sx={{ marginTop: '8px', textAlign: 'center', marginBottom: '24px' }}>
                传音螺
              </Typography>
              <ul className='informationList'>
                <li className='flex mb-3.5'>
                  <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: 46, height: 46 }} />
                  <Typography variant="subtitle2" gutterBottom className='flex flex-col ml-2 leading-[1.8]'>
                    <span className='font-bold text-black'>张三妈妈</span>
                    <span className='overflow-hidden text-ellipsis whitespace-nowrap w-32'>孩子，你在星期天还是去刘姥姥家吧</span>
                  </Typography>
                </li>
                <li className='flex mb-3.5'>
                  <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: 46, height: 46 }} />
                  <Typography variant="subtitle2" gutterBottom className='flex flex-col ml-2 leading-[1.8]'>
                    <span className='font-bold text-black'>张三妈妈</span>
                    <span className='overflow-hidden text-ellipsis whitespace-nowrap w-32'>孩子，你在星期天还是去刘姥姥家吧</span>
                  </Typography>
                </li>
                <li className='flex mb-3.5'>
                  <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: 46, height: 46 }} />
                  <Typography variant="subtitle2" gutterBottom className='flex flex-col ml-2 leading-[1.8]'>
                    <span className='font-bold text-black'>张三妈妈</span>
                    <span className='overflow-hidden text-ellipsis whitespace-nowrap w-32'>孩子，你在星期天还是去刘姥姥家吧</span>
                  </Typography>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: '103px', overflow: 'hidden', marginTop: '19px' }}>
        <Grid container spacing={{ lg: 2, md: 8 }}>
          <Grid item lg={3} md={4}>
            <div className='slick progressHeight '>
              <Typography variant="body2" gutterBottom sx={{}}>
                今日通勤率
              </Typography>
              <LinearWithValueLabel color="LinearProgress" />
              <Typography variant="body2" gutterBottom className='mt-1'>
                <span>总人数：</span>
                <span>45</span>
                <span className='ml-5'>请假：</span>
                <span>2</span>
              </Typography>
            </div>
          </Grid>
          <Grid item lg={6.5} md={5}>
            <div className='slick progressHeight'>

            </div>
          </Grid>
          <Grid item lg={2.5} md={3}>
            <div className='slick progressHeight'>

            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home