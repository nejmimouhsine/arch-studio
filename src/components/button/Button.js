import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

import ArrowIcon from '../../assets/icons/icon-arrow-w-s.svg';

const Button = ({ children, cName, to }) => {
    return (
        <button className={cName}>
            <Link to={to} className='btn_link'>
                { children }
                <img src={ArrowIcon} alt='Arch Studio' />
            </Link>
        </button>
    )
}

export default Button;