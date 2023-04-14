import React from 'react';
import './PaymentSection.css';
import dribble from '../../../../Img/paymentimg/Dribble.png';
import netflix from '../../../../Img/paymentimg/Netflix.png';
import manulife from '../../../../Img/paymentimg/Manulife.png';
import polygonRed from '../../../../Img/paymentimg/PolygonRed.png';
import polygonGreen from '../../../../Img/paymentimg/PolygonGreen.png';
import paypal from '../../../../Img/paymentimg/paypal.png';
import google from '../../../../Img/paymentimg/google.png';
import apple from '../../../../Img/paymentimg/apple.png';
import Transaction from './Transaction';
import { toast } from 'react-hot-toast';

const PaymentSection = () => {

    const infos = [
        {
            logo: dribble,
            logoBg: "bg-[#E74D89]",
            title: 'Dribble Pro',
            days: "15",
            icon: polygonRed
        },
        {
            logo: netflix,
            logoBg: "bg-[#FDFDFE]",
            title: 'Netflix',
            days: "4",
            icon: polygonRed
        },
        {
            logo: manulife,
            logoBg: "bg-[#DFFFF0]",
            title: 'Manulife Cash',
            days: "4",
            icon: polygonGreen
        },
    ]

    const handlePaymentBtn = () => {
        toast.success('Great! Your Payment is succesfully.');
    }

    return (
        <div className='mt-80 text-white grid lg:grid-cols-2 grid-cols-1 lg:ml-0 ml-3'>
            {/*---------------- Left side of this section start -----------------*/}
            <div className='relative'>
                {/*--------- Last Transaction card start -----------*/}
                <div className='payment-card px-5 pt-[26px] rounded-[9.12px] w-[335px] h-[292px]'>
                    <h3 className='text-[22px] font-semibold text-start mb-8'>Last Transaction</h3>
                    <div>
                        {
                            infos.map((info, index) => <Transaction
                                key={index}
                                info={info}
                            ></Transaction>)
                        }
                    </div>
                </div>
                {/*--------- Last Transaction card end -----------*/}
                {/*--------- paypal card start -----------*/}
                <div className='payment-card rounded-[10px] w-[227px] h-[222px] p-5 absolute top-[-150px] left-[230px]'>
                    <div className='flex items-center gap-[11.79px]'>
                        <div className='w-14 h-14 p-3 rounded-full bg-white'>
                            <img src={paypal} alt="" />
                        </div>
                        <div className='text-start'>
                            <h3 className='text-2xl font-semibold'>Paypal</h3>
                            <small className='text-xs text-[#ffffffb3]'>Checkout</small>
                        </div>
                    </div>
                    <div className='flex items-end justify-between mt-6'>
                        <div>
                            <small className='text-xs text-[#ffffffb3]'>Total</small>
                            <p className='text-lg font-medium'>$210</p>
                        </div>
                        <div>
                            <button className='px-[10.27px] py-[7px] text-xs font-semibold change-btn hover:font-normal'>Change</button>
                        </div>
                    </div>
                    <button onClick={handlePaymentBtn} className='mt-[19px] text-xs font-medium w-full py-[7px] btn-bg text-black rounded-[10px] hover:scale-[1.05] duration-500'>Make Payment</button>
                </div>
                {/*--------- paypal card end -----------*/}
            </div>
            {/*---------------- Left side of this section end -----------------*/}
            {/*---------------- Right side of this section start -----------------*/}
            <div className='text-start mt-20 lg:mt-[-92px] lg:ml-24 ml-3'>
                <h1 className='text-5xl font-semibold leading-[160%]'>Easily control your billing & invoicing</h1>
                <p className='text-[#ffffffb3] mt-6 font-[100]'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat</p>
                <div className='flex gap-8 mt-12'>
                    <img src={apple} alt="" />
                    <img src={google} alt="" />
                </div>
            </div>
             {/*---------------- Right side of this section end -----------------*/}
             <div className='payment-gradient z-0'></div>
             <div className='payment-gradient-three z-0'></div>
        </div>
    );
};

export default PaymentSection;