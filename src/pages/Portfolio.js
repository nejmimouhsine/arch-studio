import React, { Fragment } from 'react';
import Works from '../components/works/Works';

const Portfolio = () => {
    return (
        <Fragment>
            <div className='App_pages'>
                <div className='App_vertical'></div>
                <h4>Portfolio</h4>
            </div>
            <Works />
        </Fragment>
    )
}

export default Portfolio;