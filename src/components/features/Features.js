import React from 'react';
import Button from '../button/Button';
import Feature from '../feature/Feature';
import './Features.scss';
import { HomeData } from './HomeData';

const Features = () => {
    return (
        <section className='features'>
            <div className='container features_container'>
                <div className='features_head'>
                    <h2>Featured</h2>
                    <Button to='/portfolio' cName='btn'>See All</Button>
                </div>
                <div className='features_feat'>
                    {HomeData.map(feat => (
                        <Feature 
                            key={feat.id}
                            imgMob={feat.imgMob}
                            imgTab={feat.imgTab}
                            imgDesk={feat.imgDesk}
                            num={feat.num}
                            name={feat.name}
                            viewAll={feat.viewAll} />))}
                </div>
            </div>
        </section>
    )
}

export default Features;