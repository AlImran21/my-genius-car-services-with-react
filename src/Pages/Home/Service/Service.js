import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate ();

    const navigateToServiceDetail = (id) => {
        navigate (`/service/${id}`);
    }

    return (
        <div className="service-container">
            <div className='service-details'>
                <div className='card-img'>
                    <img src={img} alt="" />
                </div>
                <h6 className='service-name'>{name}</h6>
                <p className='service-price'>Price : {price}</p>
                <p className='service-desc'><small>{description}</small></p>
                <button onClick={() => navigateToServiceDetail (id)} className='service-button'>Book : {name}</button>
            </div>
        </div>
    );
};

export default Service;