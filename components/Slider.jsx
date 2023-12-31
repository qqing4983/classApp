'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false
    };
    return (
        <Slider {...settings}>
            <div className='SliderImg'>
            <img src="/1.jpg"  className='w-full h-full object-cover rounded-xl'/>
            </div>
            <div className='SliderImg'>
            <img src="/1.jpg"  className='w-full h-full object-cover rounded-xl'/>
            </div>
            <div className='SliderImg'>
            <img src="/1.jpg"  className='w-full h-full object-cover rounded-xl'/>
            </div>
            <div className='SliderImg'>
            <img src="/1.jpg"  className='w-full h-full object-cover rounded-xl'/>
            </div>
            <div className='SliderImg'>
            <img src="/1.jpg"  className='w-full h-full object-cover rounded-xl'/>
            </div>
            <div className='SliderImg'>
            <img src="/1.jpg"  className='w-full h-full object-cover rounded-xl'/>
            </div>
        </Slider>
    )
}

export default Slider1