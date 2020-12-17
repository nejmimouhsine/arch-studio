import React, { Fragment } from 'react';

import Hero from '../components/hero/Hero';
import ContactDetails from '../components/contactdetails/ContactDetails';
import Connect from '../components/connect/Connect';
import GoogleMap from '../components/googlemap/GoogleMap';

import ContactHero from '../assets/contact/desktop/image-hero.jpg';
import ContactHeroTablet from '../assets/contact/tablet/image-hero.jpg';
import ContactHeroMobile from '../assets/contact/desktop/image-hero.jpg';

const Contact = () => {
    return (
        <Fragment>
            <div className='App_pages'>
                <div className='App_vertical'></div>
                <h4>Contact</h4>
            </div>
            <Hero
                imgDesk={ContactHero}
                imgTab={ContactHeroTablet}
                imgMob={ContactHeroMobile}
                section='Contact'
                title='Tell us about your project'
                description='We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!'
            /> 
            <ContactDetails />
            <GoogleMap />
            <Connect />
        </Fragment>
    )
}

export default Contact;