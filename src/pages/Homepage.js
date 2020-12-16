import React, { Fragment } from 'react';
import Landing from '../components/landing/Landing';
import Welcome from '../components/welcome/Welcome';
import AboutUs from '../components/aboutus/AboutUs';
import Features from '../components/features/Features';

const Homepage = () => {
    return (
        <Fragment>
            <Landing />
            <Welcome />
            <AboutUs />
            <Features />
        </Fragment>
    )
}

export default Homepage;