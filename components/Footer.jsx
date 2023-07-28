'use client'
import React from 'react'
import Image from 'next/image'
import footer1 from '@public/footer1.png'
import footer2 from '@public/footer2.png'
import footer3 from '@public/footer3.png'
import footer4 from '@public/footer4.png'
import footer5 from '@public/footer5.png'
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className='h-footer '>
      <ul className='footerIcon'>
      <Link href="/"> 
      <li className='pt-1.5'>
      {/* className="footerImg" */}
          <Image src={footer1} alt="footer1"  />
        </li>
       </Link>
       <Link href="#"> 
        <li>
          <Image src={footer2} alt="footer2"   />
        </li>
        </Link>
        <Link href="#"> 
        <li className='pt-1.5'>
          <Image src={footer3} alt="footer3"   />
        </li>
        </Link>
        <Link href="#"> 
        <li className='pt-1.5'>
          <Image src={footer4} alt="footer4"  />
        </li>
        </Link>
        <Link href="/mine/videoCall"> 
        <li className='pt-1'>
          <Image src={footer5} alt="footer5" />
        </li>
        </Link>
      </ul>
    </footer>
  )
}

export default Footer