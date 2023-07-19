'use client'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Slider from './Slider';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import  flower from '@public/flower.svg'
import  redFlag from '@public/redFlag.svg'
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
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <div className=''>
              <Grid item lg={12} >
                <div className='classInformation'>
                  <div className='classInformation_left'>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' ,marginBottom:'0.3em'}}>
                      h5. Heading
                    </Typography>
                    <Typography variant="body2" gutterBottom sx={{ marginTop: '8px' }}>
                      班主任：王美人
                    </Typography>
                   <div className='flex items-center'>
                   <Image src={flower} alt="flower" className="h-6 w-6"  />
                   <span className='ml-2'>126</span>
                   <Image src={redFlag} alt="flower" className="h-6 w-6 ml-6"  />
                   <span className='ml-2'>3</span>
                     </div>
                  </div>
                  <div className='classInformation_right'></div>
                </div>
              </Grid>
              <Grid item lg={12}>
                <div className='safflowerRanking'></div>
              </Grid>
            </div>
          </Grid>
          <Grid item lg={7}>
            <div className='slick'>
              <Slider />
            </div>
          </Grid>
          <Grid item lg={2}>
            <div className='slick'>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home