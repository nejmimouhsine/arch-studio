import React, { Fragment } from 'react';
import Landing from '../components/landing/Landing';
import Welcome from '../components/welcome/Welcome';
import AboutUs from '../components/aboutus/AboutUs';
import Features from '../components/features/Features';

const Homepage = () => {
    return (
        <Fragment>
            <div className='App_pages'>
                <div className='App_vertical'></div>
                <h4>Home</h4>
            </div>
            <Landing />
            <Welcome />
            <AboutUs />
            <Features />
        </Fragment>
    )
}

export default Homepage;