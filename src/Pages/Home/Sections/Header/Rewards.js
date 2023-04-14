import React from 'react';

const Rewards = ({info}) => {
    const {title, description, icon} = info;
    return (
        <div data-aos="fade-down-left" className='flex cursor-pointer items-center text-start gap-5 mb-6 rewards-card rounded-[20px] p-5'>
            <p className='text-3xl text-[#00F6FF] rounded-full bg-[#09977c1a] p-4'>{icon}</p>
            <div>
                <h5 className='text-lg font-semibold'>{title}</h5>
                <p className='text-[#ffffffb3]'>{description}</p>
            </div>
        </div>
    );
};

export default Rewards;