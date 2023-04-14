import React from 'react';
import airbnb from '../../../../Img/companys/airbnb.png';
import binance from '../../../../Img/companys/Binance.png';
import coinbase from '../../../../Img/companys/coinbase.png';
import dropbox from '../../../../Img/companys/Dropbox.png';

const Companys = () => {

    return (
        <div className='lg:flex grid grid-cols-2 items-center justify-between mt-48 mb-24 w-full max-w-[1065.76px] lg:mx-auto mx-3'>
          <img className='h-[60px]' src={airbnb} alt="" />
          <img className='h-[38.64px]' src={binance} alt="" />
          <img className='h-[41.25px]' src={coinbase} alt="" />
          <img className='h-[37.88px]' src={dropbox} alt="" />
        </div>
    );
};

export default Companys;