import React from 'react';
import './LetsTrySection.css';

const LetsTrySection = () => {
    return (
        <div className='flex items-center justify-between py-[72px] px-[100px] service-card'>
            <div className='text-start'>
                <h1 className='text-white font-semibold text-5xl leading-[140%]'>Let’s try our service now!</h1>
                <p className='text-[#ffffffb3] mt-6 text-lg leading-[160%]'>Everything you need to accept card payments <br/> and grow your business anywhere on the planet.</p>
            </div>
            <div>
                <button className='text-lg font-medium px-8 py-4 btn-bg text-black rounded-[10px] hover:scale-[1.1] duration-500'>Get Started</button>
            </div>
        </div>
    );
};

export default LetsTrySection;