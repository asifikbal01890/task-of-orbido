import React from 'react';
import logo from '../../Img/footerLogo.png';
import { Link } from 'react-router-dom';
import { BiCopyright } from "react-icons/bi";
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-start text-[#ffffffb3] leading-[160%] w-full max-w-[1170px] mb-[30px] mx-auto">
            {/* ----------------- The upper part of the footer section start ---------------*/}
            <div className="max-w-screen-xl px-4 pt-20 mx-auto sm:px-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-10">
                    <div className='col-span-4'>
                        <div className='flex items-center'>
                            <img className='lg:ml-[-40px] ml-[-20px]' src={logo} alt="" />
                            <p className='text-white font-semibold text-[40.576px]'>OR<span className='text-[#D69300]'>BIDO</span></p>
                        </div>
                        <p className="max-w-xs mt-6 font-light text-lg">
                            A new way to make the payments easy, reliable and secure.
                        </p>
                    </div>
                    <div className=' col-span-6'>
                        <div className="lg:flex justify-between grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <div>
                                <p className="font-medium text-lg">
                                    Usefull Links
                                </p>
                                <nav className="flex flex-col mt-6 space-y-2 font-light">
                                    <Link to={'/'} className="hover:opacity-75"> Content </Link>
                                    <Link to={'/'} className="hover:opacity-75"> How it Works </Link>
                                    <Link to={'/'} className="hover:opacity-75"> Create </Link>
                                    <Link to={'/'} className="hover:opacity-75"> Explore </Link>
                                    <Link to={'/'} className="hover:opacity-75"> Teams & Services </Link>
                                </nav>
                            </div>
                            <div>
                                <p className="font-medium text-lg">
                                    Community
                                </p>
                                <nav className="flex flex-col mt-6 space-y-2 font-light">
                                    <Link to={'/'} className="hover:opacity-75"> Help Center </Link>
                                    <Link to={'/'} className="hover:opacity-75"> Partners </Link>
                                    <Link to={'/'} className="hover:opacity-75"> Suggestions </Link>
                                    <Link to={'/'} className="hover:opacity-75"> Blog </Link>
                                    <Link to={'/'} className="hover:opacity-75"> Newsletters </Link>
                                </nav>
                            </div>
                            <div>
                                <p className="font-medium text-lg">
                                    Partner
                                </p>
                                <nav className="flex flex-col mt-6 space-y-2 font-light">
                                    <Link to={'/'} className="hover:opacity-75"> Our Partner </Link>
                                    <Link to={'/'} className="hover:opacity-75"> Become a Partner </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------- The upper part of the footer section end ---------------*/}
            <div className='border border-[#3F3E45] mt-10 mb-[30px] ml-3 lg:ml-7 mr-3'></div>
            {/* ----------------- Copyright section start ---------------*/}
            <div className='lg:flex justify-between items-center'>
                <div className='flex items-center lg:ml-9 ml-3'>
                    <p className='font-[Abel] text-lg mr-[15px]'>Copyright</p>
                    <p><BiCopyright></BiCopyright></p>
                    <p className='text-lg font-light ml-[22px]'>2023 Orbido. All Rights Reserved.</p>
                </div>
                <div className='flex items-center text-white  lg:mt-0 mt-6 ml-3'>
                    <Link to={'/'}><p className='text-2xl mr-[30px] hover:scale-[1.2] duration-500'><FaInstagram></FaInstagram></p></Link>
                    <Link to={'/'}><p className='text-2xl mr-[30px] hover:scale-[1.2] duration-500'><FaFacebook></FaFacebook></p></Link>
                    <Link to={'/'}><p className='text-2xl mr-[30px] hover:scale-[1.2] duration-500'><FaTwitter></FaTwitter></p></Link>
                    <Link to={'/'}><p className='text-2xl mr-[30px] hover:scale-[1.2] duration-500'><FaLinkedin></FaLinkedin></p></Link>
                </div>
            </div>
            {/* ----------------- Copyright section end ---------------*/}
        </footer>
    );
};

export default Footer;