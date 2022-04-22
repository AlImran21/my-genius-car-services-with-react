import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, img, description, price } = service;

    const navigate = useNavigate ();

    const navigateToServiceDetail = (_id) => {
        navigate (`/service/${_id}`);
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
                <button onClick={() => navigateToServiceDetail (_id)} className='service-button btn btn-primary'>Book : {name}</button>
            </div>
        </div>
    );
};

export default Service;