import React, { Fragment } from 'react';

import Hero from '../components/hero/Hero';
import ContactDetails from '../components/contactdetails/ContactDetails';

import ContactHero from '../assets/contact/desktop/image-hero.jpg';
import ContactHeroTablet from '../assets/contact/tablet/image-hero.jpg';
import ContactHeroMobile from '../assets/contact/desktop/image-hero.jpg';

const Contact = () => {
    return (
        <Fragment>
            <Hero
                imgDesk={ContactHero}
                imgTab={ContactHeroTablet}
                imgMob={ContactHeroMobile}
                section='Contact'
                title='Tell us about your project'
                description='We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!'
            /> 
            <ContactDetails />
        </Fragment>
    )
}

export default Contact;