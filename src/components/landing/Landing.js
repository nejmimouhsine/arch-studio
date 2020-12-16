import React from 'react';
import './Landing.scss';
import Slider from '../slider/Slider';

const Landing = () => {
    return (
        <section className='landing'>
            <div className='container landing_container'>
                <Slider />
            </div>
        </section>
    )
}

export default Landing;