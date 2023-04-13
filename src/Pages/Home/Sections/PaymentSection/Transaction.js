import React from 'react';

const Transaction = ({ info }) => {
    const { logo, logoBg, title, days, icon } = info
    return (
        <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center gap-3'>
                <div className={`${logoBg} rounded-full w-10 h-10 flex items-center justify-center`}>
                    <img src={logo} alt="" />
                </div>
                <div className='text-start'>
                    <h5 className='font-semibold'>{title}</h5>
                    <small className='text-xs text-[#ffffffb3]'>{days} Days ago</small>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-1'>
                    <img src={icon} alt="" />
                    <p className='text-sm'>-$250.93</p>
                </div>
            </div>
        </div>
    );
};

export default Transaction;