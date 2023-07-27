'use client'
import Input from '@mui/base/Input';
import { styled } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import { Typography, Avatar, Button, Snackbar } from '@mui/material';
import { teal } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />;
});
const page = ({ params: { detailId } }) => {
  const [message, setMessage] = useState(null);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const handleClose = () => {
    setOpen(false);
  };

  function CustomInputonChange(e) {
    setMessage(e.target.value)
  }
  function sendMessage() {
    if (message < 60) {
    }
    else {
      setOpen(true);
    }
  }
  return (
    <main className='flex'>
      <div className="mineCard">
        <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '8.06rem', height: '8.06rem', marginTop: '3.25rem' }} />
        <Typography variant="h5" sx={{ fontSize: '1.875rem', marginTop: '2.43rem', }}>姓名</Typography>
        <Typography variant="h5"
          sx={{ marginTop: '6.5rem', fontSize: '3rem' }}>
          256次
        </Typography>
        <Typography variant="h5" sx={{ fontSize: '1.875rem', marginTop: '0.65rem', }}>累计与妈妈对话</Typography>
      </div>
      <div className='messageBoard flex flex-col'>
        <div className='grow overflow-y-auto'>
          <div className='message1 flex'>
            <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '6.25rem', height: '6.25rem', }} />
            <div className='ml-7'>
              <Typography variant="h5" sx={{ fontSize: '1.875rem', display: 'flex', alignItems: 'center' }}>家长姓名 <span className='Label LabelMargin'>爸爸</span>
                <span className='text-xl block'>日期时间</span>
              </Typography>
              <div className='messageContent'>
                留言内容
              </div>
            </div>
          </div>
          <div className='message2 flex justify-end '>
            <div className='mr-7'>
              <Typography variant="h5" sx={{ fontSize: '1.875rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <span className='text-xl block timeMargin'>日期时间</span>
                张三
              </Typography>
              <div className='messageContent text-right'>
                留言内容
              </div>
            </div>
            <Avatar alt="Avatar" src="/Avatar.png" sx={{ width: '6.25rem', height: '6.25rem', }} />
          </div>

        </div>

        <div className='relative'>
          <CustomInput aria-label="Demo input" placeholder="请在此输入留言内容，60个字以内" onChange={CustomInputonChange} />
          <ColorButton variant="contained" endIcon={<SendIcon sx={{ fontSize: '2rem!important' }} />} onClick={sendMessage}>发送</ColorButton>

        </div>
      </div>
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        open={open}
        onClose={handleClose}
        message="请输入留言内容，60个字以内"
        key='centertop'
      />
    </main>
  )
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  width: '10.25rem',
  height: '4rem',
  position: 'absolute',
  bottom: '13%',
  right: '2%',
  fontSize: '1.87rem',
  borderRadius: '0.62rem',
  '&:hover': {
    backgroundColor: teal[700],
  },
}));
const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};
const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 100%;
  font-size: 1.5rem;
  height: 5.78rem;
  padding: 2.12rem 16% 2.12rem 1.25rem;
  color: ${theme.palette.mode === 'dark' ? '' : ''};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  border-radius:0.62rem;
  position: relative;
  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);
export default page