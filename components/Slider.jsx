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
                <h3>1</h3>
            </div>
            <div className='SliderImg'>
                <h3>2</h3>
            </div>
            <div className='SliderImg'>
                <h3>3</h3>
            </div>
            <div className='SliderImg'>
                <h3>4</h3>
            </div>
            <div className='SliderImg'>
                <h3>5</h3>
            </div>
            <div className='SliderImg'>
                <h3>6</h3>
            </div>
        </Slider>
    )
}

export default Slider1