import React from 'react';
import './Leaders.scss';
import { Link } from 'react-router-dom';
import { LeadersData } from './LeadersData';

import LinkedInIcon from '../../assets/icons/icon-linkedin.svg';
import TwitterIcon from '../../assets/icons/icon-twitter.svg';

const Leaders = () => {
    return (
        <section className='leaders'>
            <div className='container leaders_container'>
                <h2 className='leaders_title'>The Leaders</h2>
                <div className='leaders_personas'>
                    {LeadersData.map(leader => (
                        <div className='leaders_persona' key={leader.id}>                        
                            <div className='leaders_img'>
                                <img src={leader.imgPersona} alt='Arch Studio Leaders' />
                            </div>
                            <div className='leaders_content'>
                                <h3>{leader.name}</h3>
                                <h4>{leader.job}</h4>
                            </div>
                            <div className='leaders_social'>
                                <Link to={{ pathname: 'https://www.linkedin.com/' }} target='_blank'>
                                    <img src={LinkedInIcon} alt='Arch Studio LinkedIn' />
                                </Link>
                                <Link to={{ pathname: 'https://www.twitter.com/' }} target='_blank'>
                                    <img src={TwitterIcon} alt='Arch Studio Twitter' />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Leaders;