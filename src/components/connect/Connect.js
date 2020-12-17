import React from 'react';
import Button from '../button/Button';
import './Connect.scss';

const Connect = () => {
    return (
        <section className='connect'>
            <div className='container connect_container'>
                <div className='connect_title'>
                    <h2>Connect with us</h2>
                </div>
                <div className='connect_inputs'>
                    <input type='text' className='connect_input' placeholder='Name' />
                    <input type='email' className='connect_input' placeholder='Email' />
                    <textarea className='connect_input connect_area' placeholder='Message' />
                    <div className='connect_btn'>
                        <Button to='/contact' cName='btn btn_empty'></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Connect;