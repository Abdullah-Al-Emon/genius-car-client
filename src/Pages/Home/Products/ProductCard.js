import React from 'react';
import { FaStar } from 'react-icons/fa'

const ProductCard = ({ product }) =>
{
    const { balance, picture, name } = product;
    return (
        <div className="card card-compact w-72 p-3 bg-base-100 shadow-xl">
            <figure><img src={picture} className='rounded-lg bg-[#F3F3F3] w-64 px-8 py-3 h-48' alt="Shoes" /></figure>
            <div className="card-body items-center">
                <div className='text-orange-400 flex'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <h2 className="card-title">{name}</h2>
                <div className="flex justify-between items-center">
                    <p className='text-lg text-orange-600 font-semibold'>Price: {balance}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;