import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service;

    return (
        <div className="service-container">
            <div className='service-details'>
                <div className='card-img'>
                    <img src={img} alt="" />
                </div>
                <h6 className='service-name'>{name}</h6>
                <p className='service-price'>Price : {price}</p>
                <p className='service-desc'><small>{description}</small></p>
                <button className='service-button'>Book : {name}</button>
            </div>
        </div>
    );
};

export default Service;