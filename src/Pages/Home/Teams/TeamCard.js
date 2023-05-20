import React from 'react';
import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa'

const TeamCard = ({ team }) =>
{
    const { picture, name, skill } = team;
    return (
        <div className="card card-compact w-72 p-3 bg-base-100 shadow-xl">
            <figure><img src={picture} className='rounded-lg h-48' alt="Shoes" /></figure>
            <div className="card-body items-center">
                <h2 className="card-title text-[#444444]">{name}</h2>
                <p className='text-lg text-[#737373] font-semibold'>{skill}</p>
                <div className='flex text-[28px]  mt-1'>
                    <FaFacebook className='mr-2 text-blue-700'></FaFacebook>
                    <FaTwitter className='mr-2 text-sky-300'></FaTwitter>
                    <FaLinkedin className='mr-2 text-blue-500'></FaLinkedin>
                    <FaInstagram className='mr-2 text-orange-500'></FaInstagram>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;