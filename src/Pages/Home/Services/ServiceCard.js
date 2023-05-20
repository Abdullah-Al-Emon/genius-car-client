import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) =>
{
    const { img, price, title, _id } = service;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={img} className='h-52' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-600 font-semibold'>Price: {price}$</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <FaArrowRight className='text-orange-600'></FaArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;