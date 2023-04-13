import React from 'react';
import { BsShieldFillCheck, BsStarFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import './Header.css'
import Rewards from './Rewards';

const Header = () => {
    const infos = [
        {
            title: 'Rewards',
            description: 'The best credit cards offer some tantalizing combinations of promotions and prizes.',
            icon: <BsStarFill></BsStarFill>
        },
        {
            title: '100% Secured',
            description: 'We take proactive steps make sure your information and transactions are secure.',
            icon: <BsShieldFillCheck></BsShieldFillCheck>
        },
        {
            title: 'Balance Transfer',
            description: 'A balance transfer credit card can save you a lot of money in interest charges.',
            icon: <FaTelegramPlane></FaTelegramPlane>
        },
    ]
    return (
        <div className='text-white mt-32 mx-3'>
           <div className='w-full lg:w-[700px] h-[82.25] font-bold mx-auto'>
            <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase text-linear-color">make your dream website Stand out in a crowd</h1>
           </div>
           <div className='grid grid-cols-2 gap-3 mt-32'>
            <div className='text-start'>
                <h3 className='text-5xl font-semibold leading-[160%]'>You do the business, we’ll handle the money.</h3>
                <p className='text-lg text-[#ffffffb3] mb-12 mt-6'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <button className='text-lg font-medium px-8 py-4 btn-bg text-black rounded-[10px]'>Get Started</button>
            </div>
            <div className='ml-28'>
                {
                    infos.map((info, index) => 
                    <Rewards
                    key={index}
                    info={info}
                    ></Rewards>)
                }
            </div>
           </div>
        </div>
    );
};

export default Header;