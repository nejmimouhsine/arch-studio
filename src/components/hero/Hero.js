import React from 'react';
import './Hero.scss';

const Hero = (props) => {
    return (
        <section className='hero'>
            <div className='container hero_container'>
                <div className='hero_img'>
                    <picture>
                        <source srcSet={`${props.imgMob} 1x`} media="(max-width: 500px)" />
                        <source srcSet={`${props.imgTab} 1x`} media="(max-width: 1000px)" />
                        <img
                            srcSet={`${props.imgDesk} 2x`}
                            alt="Arch Studio About Hero" />
                    </picture>
                </div>
                <div className='hero_content'>
                    <h2>{props.section}</h2>
                    <div className='line'></div>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Hero
