import React from 'react';
import './Welcome.scss';

import WelcomeImage from '../../assets/home/desktop/image-welcome.jpg';

const Welcome = () => {
    return (
        <section className='welcome'>
            <div className='container welcome_container'>
            <div className='welcome_content'>
                    <h2 className='welcome_title'>Welcome</h2>
                    <h3>Welcome to Arch Studio</h3>
                    <p>We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.</p>
                    <p>Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.</p>
                    <p>We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.</p>
                </div>
                <div className='welcome_image'>
                    <img src={WelcomeImage} alt="Arch Studio Welcome" />
                </div>
            </div>
        </section>
    )
}

export default Welcome;