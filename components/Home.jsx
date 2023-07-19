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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Home = () => {
  return (
    <>

      <Box sx={{ flexGrow: 1, height: '375px' }}>
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
          <Grid item lg={7} md={5}>
            <div className='slick'>
              <Slider />
            </div>
          </Grid>
          <Grid item lg={2} md={3}>
            <div className='slick'>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home