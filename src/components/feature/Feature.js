import React from 'react';
import { Link } from 'react-router-dom';
import './Feature.scss';

const Feature = (props) => {
    return (
        <Link to='/portfolio' className='feat_container'>
            <div className='feat'>
                <div className='feat_img'>
                    <picture>
                        <source srcSet={`${props.imgMob} 1x`} media="(max-width: 500px)" />
                        <source srcSet={`${props.imgTab} 1x`} media="(max-width: 1000px)" />
                        <img
                            srcSet={`${props.imgDesk} 2x`}
                            alt="Arch Sudio Features" />
                    </picture>
                    <h2>{props.num}</h2>
                </div>
                <div className='feat_content'>
                    <h3>{props.name}</h3>
                    <h4>{props.viewAll}</h4>
                </div>
            </div>
        </Link>
    )
}

export default Feature;