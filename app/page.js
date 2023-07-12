"use client";
import { Button, Grid, Stack,Typography } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, selectCount } from '@/redux/slices/counterSlice'
import {incrementAsync,incrementIfOddAsync} from '@/redux/slices/thunks'
import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  const counterValue = useSelector(selectCount)
  const dispatch = useDispatch()
  return (<div className="bg-gradient">
      <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
   <Link href="/todos"><Button variant="contained" className="m-8">go to todos </Button></Link>
   <Link href="/datagrid"><Button variant="contained" className="m-8">datagrid</Button></Link>
   <Link href="/resposiveDesign?design=mobile"><Button variant="contained" className="m-8">resposiveDesign</Button></Link>
    <Grid container height="calc(100vh - 38px)" alignItems="center" justifyContent="center" direction="column" >
    <Typography variant="h4" gutterBottom>
    {counterValue}
    </Typography>
      <Stack direction="row" columnGap={1} >
        <Button variant="contained" onClick={() => dispatch(increment())} > +</Button>
        <Button variant="contained" onClick={() => dispatch(decrement())}> -</Button>
        <Button variant="contained" onClick={() => dispatch(incrementAsync(5))}>Add Async</Button>
      </Stack>
    </Grid>
  </div>
  );
}