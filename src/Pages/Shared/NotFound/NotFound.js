import React from 'react';
import Error404 from '../../../images/404.webp';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center mb-5'>Mechanic is sleeping</h2>
            <div className='error-alignment'>
                <img src={Error404} alt="" />
            </div>
        </div>
    );
};

export default NotFound;