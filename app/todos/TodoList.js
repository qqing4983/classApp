'use client'
import React from 'react'
import Link from 'next/link';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useSWR from 'swr'
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
const url = 'https://jsonplaceholder.typicode.com/todos/'
const fetcher = (url) => fetch(url).then((res) => res.json());
// function renderRow(props) {
//     const { index, style } = props;
//     const { data, error } = useSWR(`${url}`, fetcher)
//     if (error) return <div>failed to load</div>
//     return (
//         <>
//             {data && data.map((todo, index) => {
//                 return (
//                     <ListItem component="div" disablePadding key={index}>
//                         <Link href={`/todos/${todo.id}`}>
//                             <ListItemButton>
//                                 <ListItemText primary={`Todo ${todo.id}`} />
//                             </ListItemButton></Link>
//                     </ListItem>
//                 )
//             })}
//         </>
//     )



// }
const TodoList = () => {
    const { data, error } = useSWR(`${url}`, fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return 'Loading...'
    return (
        <Box
            sx={{ width: '100%', height: 800, maxWidth: 360, bgcolor: 'background.paper' ,overflowY:'scroll'}}
        >
            <List sx={style} component="nav" aria-label="mailbox folders">
            {data && data.map((todo, index) => {
                return (
                    <ListItem component="div"  key={todo.id} divider>
                        <Link href={`/todos/${todo.id}`}>
                            <ListItemButton>
                                <ListItemText primary={`Todo ${todo.id}`} />
                            </ListItemButton></Link>
                    </ListItem>
                )
            })}
            </List>
        </Box>
    )
}

export default TodoList