import React from 'react';
import Header from './Sections/Header/Header';
import PaymentSection from './Sections/PaymentSection/PaymentSection';
import Companys from './Sections/Companys/Companys';
import LetsTrySection from './Sections/LetsTrySection/LetsTrySection';

const Home = () => {

    return (
        <div className='w-full max-w-[1170px] mx-auto'>
           <Header></Header>
           <PaymentSection></PaymentSection>
           <Companys></Companys>
           <LetsTrySection></LetsTrySection>
        </div>
    );
};

export default Home;