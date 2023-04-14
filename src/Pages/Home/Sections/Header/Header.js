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
        <div className='text-white mt-32 mx-3 z-10'>
            <div className='hero-gradient absolute'></div>
            {/*----------- Hero Section start ------------*/}
            <div className='w-full lg:w-[897px] h-[306px] mx-auto'>
                <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase text-linear-color font-bold leading-[82px] lg:p-16">make your dream website Stand out in a crowd</h1>
            </div>
            {/*----------- Hero Section end ------------*/}
            {/*----------- Business Section start ------------*/}
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-32'>
                {/*----------- left side of Business Section start ------------*/}
                <div data-aos="zoom-in-right" className='text-start'>
                    <h3 className='text-4xl lg:text-5xl font-semibold leading-[160%] tracking-tight'>You do the business, we’ll handle the money.</h3>
                    <p className='text-lg text-[#ffffffb3] mb-12 mt-6 leading-[160%]'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <button className='text-lg font-medium px-8 py-4 btn-bg text-black rounded-[10px] hover:scale-[1.1] duration-500'>Get Started</button>
                </div>
                {/*----------- left side of Business Section end ------------*/}
                {/*----------- right side of Business Section start ------------*/}
                <div data-aos="zoom-in-left" className='lg:ml-24 mt-10 lg:mt-0'>
                    {
                        infos.map((info, index) =>
                            <Rewards
                                key={index}
                                info={info}
                            ></Rewards>)
                    }
                </div>
                {/*----------- right side of Business Section end ------------*/}
            </div>
            {/*----------- Business Section end ------------*/}
            <div className='hero-gradient-two'></div>
        </div>
    );
};

export default Header;