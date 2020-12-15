import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

import ArchLogo from '../../assets/logo.svg';
import MenuToggle from '../../assets/icons/icon-hamburger.svg';
import MenuClose from '../../assets/icons/icon-close.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <header className='header'>
            <div className='container header_container'>
                <div className='header_logo'>
                    <Link to='/'><img src={ArchLogo} alt='ArchStudio Logo' /></Link>
                </div>
                <nav className={toggle ? 'header_navigation active' : 'header_navigation' }>
                    <ul className='header_list'>
                        <li><Link to='/portfolio' className='header_link'>Portfolio</Link></li>
                        <li><Link to='/about' className='header_link'>About Us</Link></li>
                        <li><Link to='/contact' className='header_link'>Contact</Link></li>
                    </ul>
                </nav>
                <div className='header_toggle' onClick={handleToggle}>
                    <img src={toggle ? MenuClose : MenuToggle} alt='ArchStudio Toggle' />
                </div>
            </div>
        </header>
    )
}

export default Header;