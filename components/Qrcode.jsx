'use client'
import QRCode from 'qrcode.react';
import useSWR from 'swr'
import {CircularProgress} from '@mui/material';
const url = 'https://jsonplaceholder.typicode.com/todos/7'
const fetcher = (url) => fetch(url).then((res) => res.json());

const Qrcode = () => {
    const { data, error } = useSWR(url, fetcher, {
        refreshInterval: 3000,
        revalidateOnMount: true,
    });
    if (error) return <div>加载失败</div>;
    if (!data) return  <CircularProgress color="success" />;
    return (
        <QRCode value={data} size={200}
        />
    )
}

export default Qrcode