import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ children, cName, to }) => {
    return (
        <button className={cName}>
            <Link to={to} className='btn_link'>{ children }</Link>
        </button>
    )
}

export default Button;