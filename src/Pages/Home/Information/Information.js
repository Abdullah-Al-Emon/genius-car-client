import React from 'react';
import logo1 from '../../../assets/images/information/Group 32.png'
import logo2 from '../../../assets/images/information/Group.png'
import logo3 from '../../../assets/images/information/Group 35.png'

const Information = () =>
{
    return (
        <div className='bg-[#151515] text-white py-20 px-10 md:px-16 rounded-[20px] my-14' >
            <div className='flex justify-between md:flex-row flex-col'>
                <div className='flex items-center mb-4 md:mb-0'>
                    <div className='mr-3'>
                        <img src={logo1} alt="" />
                    </div>
                    <div>
                        <p className='text-sm'>We are open monday-friday</p>
                        <p className='font-bold text-xl'>7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className='flex items-center mb-4 md:mb-0'>
                    <div className='mr-3'>
                        <img src={logo2} alt="" />
                    </div>
                    <div>
                        <p className='text-sm'>Have a question?</p>
                        <p className='font-bold text-xl'>+2546 251 2658</p>
                    </div>
                </div>
                <div className='flex items-center mb-4 md:mb-0'>
                    <div className='mr-3'>
                        <img src={logo3} alt="" />
                    </div>
                    <div>
                        <p className='text-sm'>Need a repair? our address</p>
                        <p className='font-bold text-xl'>Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;