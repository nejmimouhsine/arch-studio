import React, { Fragment } from 'react';
import Hero from '../components/hero/Hero';

import AboutHero from '../assets/about/desktop/image-hero.jpg';
import AboutHeroTablet from '../assets/about/tablet/image-hero.jpg';
import AboutHeroMobile from '../assets/about/mobile/image-hero.jpg';
import Land from '../components/land/Land';

const About = () => {
    return (
        <Fragment>
            <Hero
                imgDesk={AboutHero}
                imgTab={AboutHeroTablet}
                imgMob={AboutHeroMobile}
                section='About'
                title='Your team of professionals'
                description='Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.'
            />
            <Land />
        </Fragment>
    )
}

export default About;