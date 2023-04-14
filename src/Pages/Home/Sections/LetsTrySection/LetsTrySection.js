import React from 'react';
import './LetsTrySection.css';

const LetsTrySection = () => {
    return (
        <div className='lg:flex items-center justify-between py-[72px] lg:px-[100px] mx-3 px-6 service-card mb-[82px]'>
            <div className='lg:text-start lg:w-[650px]'>
                <h1 className='text-white font-semibold text-4xl md:text-5xl leading-[14git 0%]'>Let’s try our service now!</h1>
                <p className='text-[#ffffffb3] mt-6 text-lg leading-[160%] lg:w-[445px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div>
                <button className='text-lg font-medium px-8 py-4 btn-bg text-black rounded-[10px] hover:scale-[1.1] duration-500 mt-6 lg:mt-0'>Get Started</button>
            </div>
        </div>
    );
};

export default LetsTrySection;