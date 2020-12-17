import React from 'react';
import Feature from '../feature/Feature';
import { PortfolioData } from './PortfolioData';
import './Works.scss';

const Works = () => {
    return (
        <section className='works'>
            <div className='container works_container'>
                {PortfolioData.map(portfolio => (
                    <Feature 
                        key={portfolio.id}
                        imgMob={portfolio.imgMob}
                        imgTab={portfolio.imgTab}
                        imgDesk={portfolio.imgDesk}
                        name={portfolio.name}
                        viewAll={portfolio.viewAll} />
                ))}
            </div>
        </section>
    )
}

export default Works;