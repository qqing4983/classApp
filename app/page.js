"use client";
import { Button, Grid, Stack } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/lib/redux/slices/counterSlice/'
import {
  incrementAsync,
  incrementIfOddAsync,
} from '@/lib/redux'
export default function Home() {
  return (
    <Grid container height="calc(100vh - 38px)" alignItems="center" justifyContent="center" direction="column">

      <Stack direction="row" columnGap={1}>
      <Button variant="contained" > Add Amount</Button>
      <Button variant="contained">Add Async</Button>
      <Button variant="contained"> Add If Odd</Button>
      </Stack>
    </Grid>
  );
}