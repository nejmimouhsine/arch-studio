import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

import LogoWhite from '../../assets/logo-white.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container footer_container'>
                <div className='footer_logo'>
                    <img src={LogoWhite} alt='Arch Studio Logo' />
                </div>
                <div className='footer_nav'>
                    <ul className='footer_list'>
                        <li><Link to='/portfolio' className='footer_link'>Portfolio</Link></li>
                        <li><Link to='/about' className='footer_link'>About Us</Link></li>
                        <li><Link to='/contact' className='footer_link'>Contact</Link></li>
                    </ul>
                </div>
                <div className='footer_btn'>
                    <Button to='/portfolio' cName='btn btn_lg'>See Our Portfolio</Button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;