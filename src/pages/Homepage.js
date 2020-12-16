import React, { Fragment } from 'react';
import AboutUs from '../components/aboutus/AboutUs';
import Landing from '../components/landing/Landing';
import Welcome from '../components/welcome/Welcome';

const Homepage = () => {
    return (
        <Fragment>
            <Landing />
            <Welcome />
            <AboutUs />
        </Fragment>
    )
}

export default Homepage;