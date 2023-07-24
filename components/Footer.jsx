'use client'
import React from 'react'
import Image from 'next/image'
import footer1 from '@public/footer1.png'
import footer2 from '@public/footer2.png'
import footer3 from '@public/footer3.png'
import footer4 from '@public/footer4.png'
import footer5 from '@public/footer5.png'
const Footer = () => {
  return (
    <footer className='h-footer '>
      <ul className='footerIcon'>
        <li>
  <Image src={footer1} alt="classIcon" sx={{ width: '5.25rem',height:'5.25rem'  }} />
        </li>
        <li>
        <Image src={footer2} alt="classIcon" sx={{ width: '5.25rem',height:'5.25rem'  }} />
        </li>
        <li>
        <Image src={footer3} alt="classIcon" sx={{ width: '5.25rem',height:'5.25rem'  }} />
        </li>
        <li>
        <Image src={footer4} alt="classIcon" sx={{ width: '5.25rem',height:'5.25rem'  }} />
        </li>
        <li>
        <Image src={footer5} alt="classIcon" sx={{ width: '5.25rem',height:'5.25rem'  }} />
        </li>
      </ul>
    </footer>
  )
}

export default Footer