import React from 'react';
import './Land.scss';

import HeritageDesk from '../../assets/about/desktop/image-heritage.jpg';

const Land = () => {
    return (
        <section className='land'>
            <div className='container land_container'>
                <div className='land_content'>
                    <div className='line'></div>
                    <h2>Our Heritage</h2>
                    <p>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</p>
                    <p>Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.</p>
                    <p>Our small team of world-class professionals provides input on every project.</p>
                </div>
                <div className='land_img'>
                    <img
                        src={HeritageDesk}
                        alt="Arch Studio Heritage" />
                </div>
            </div>
        </section>
    )
}

export default Land;