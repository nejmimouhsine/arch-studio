import React from 'react';
import './Landing.scss';
import HeroParamour from '../../assets/home/desktop/image-hero-paramour.jpg';
import HeroParamourTablet from '../../assets/home/tablet/image-hero-paramour.jpg';
import HeroParamourMobile from '../../assets/home/mobile/image-hero-paramour.jpg';

import ArrowIcon from '../../assets/icons/icon-arrow-w-s.svg';

import Button from '../button/Button';

const Landing = () => {
    return (
        <section className='landing'>
            <div className='container landing_container'>
                <div className='landing_hero'>
                    <picture>
                        <source srcSet={`${HeroParamourMobile} 1x`} media="(max-width: 500px)" />
                        <source srcSet={`${HeroParamourTablet} 1x`} media="(max-width: 1000px)" />
                        <img
                            className="logo__apple"
                            srcSet={`${HeroParamour} 2x`}
                            alt="Full Logo" />
                    </picture>
                </div>
                <div className='landing_content'>
                    <h2>Project Paramour</h2>
                    <p>Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</p>
                    <Button cName='btn btn_lg'>
                        See Our Portfolio
                        <img src={ArrowIcon} alt='Arch Studio' />
                    </Button>
                </div>
                <div className='landing_changer'>
                    <div className='landing_num'>01</div>
                    <div className='landing_num'>02</div>
                    <div className='landing_num'>03</div>
                    <div className='landing_num'>04</div>
                </div>
            </div>
        </section>
    )
}

export default Landing;