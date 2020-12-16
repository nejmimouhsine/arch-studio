import React from 'react';
import './AboutUs.scss';

import AboutUsImage from '../../assets/home/desktop/image-small-team.jpg';
import AboutUsImageTablet from '../../assets/home/tablet/image-small-team.jpg';
import AboutUsImageMobile from '../../assets/home/mobile/image-small-team.jpg';

import Button from '../button/Button';

const AboutUs = () => {
    return (
        <section className='AboutUs'>
            <div className='container AboutUs_container'>
                <div className='AboutUs_image'>
                    <picture>
                        <source srcSet={`${AboutUsImageMobile} 1x`} media="(max-width: 500px)" />
                        <source srcSet={`${AboutUsImageTablet} 1x`} media="(max-width: 1000px)" />
                        <img
                            srcSet={`${AboutUsImage} 2x`}
                            alt="Full Logo" />
                    </picture>
                </div>
                <div className='AboutUs_content'>
                    <h2>Small team, big ideas</h2>
                    <Button to='/about' cName='btn btn_lg'>About Us</Button>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;