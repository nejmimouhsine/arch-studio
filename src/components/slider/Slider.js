import React, { useState } from 'react';
import './Slider.scss';

import Button from '../button/Button';
import { SliderData } from '../landing/SliderData';

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const slide = SliderData[current];

    const nextSlide = (e) => {
        const btnId = parseInt(e.target.id); 
        setCurrent(btnId);
    }

    if(!Array.isArray(SliderData) || SliderData.length <= 0) { return null }

    return (
        <div className='slider'>
            <div className='slider_container' key={slide.id}>
                <div className='slider_hero'>
                    <picture>
                        <source srcSet={`${slide.imgMobile} 1x`} media="(max-width: 500px)" />
                        <source srcSet={`${slide.imgTablet} 1x`} media="(min-width: 500px) and (max-width: 1000px)" />
                        <img
                            srcSet={`${slide.imgDesktop} 2x`}
                            alt="Full Logo" />
                    </picture>
                </div>
                <div className='slider_content'>
                    <h2>{slide.title}</h2>
                    <p>{slide.text}</p>
                    <Button to='/portfolio' cName='btn btn_lg'>See Our Portfolio</Button>
                </div>
            </div>
            <div className='slider_changer'>
                <div className='slider_num' id='0' onClick={nextSlide}>01</div>
                <div className='slider_num' id='1' onClick={nextSlide}>02</div>
                <div className='slider_num' id='2' onClick={nextSlide}>03</div>
                <div className='slider_num' id='3' onClick={nextSlide}>04</div>
            </div>
        </div>
    )
}

export default Slider
