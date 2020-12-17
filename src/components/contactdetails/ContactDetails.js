import React from 'react';
import './ContactDetails.scss';

import Button from '../button/Button';
import { officeData } from './OfficeData';

const ContactDetails = () => {
    return (
        <section className='details'>
            <div className='container details_container'>
                <div className='line'></div>
                <div className='details_content'>
                    <h2>Contact Details</h2>
                    {officeData.map(office => (
                        <div className='details_main' key={office.id}>
                            <h4>{office.title}</h4>
                            <div className='details_table'>
                                <span>Mail:</span>
                                <span>{office.mail}</span>
                                <span>Adress:</span>
                                <span>{office.address}</span>
                                <span>Phone:</span>
                                <span>{office.phone}</span>
                            </div>
                            <Button to='/contact' cName='btn btn_transparent'>View On Map</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContactDetails;