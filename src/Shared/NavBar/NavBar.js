import React from 'react';
import navLogo from '../../Img/nav/logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="w-full max-w-[1170px] mx-auto backdrop-blur navbar">
            <div class="xl:container m-auto px-6 md:px-12 lg:px-6">
                <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
                    <div class="w-full items-center flex justify-between lg:w-auto">
                        <NavLink to={'/'} >
                         <div className='class="relative flex items-center gap-[9px]"'>
                         <img src={navLogo} alt="" />
                          <p className='text-white font-semibold text-lg'>OR<span className='text-[#D69300]'>BIDO</span></p>
                            </div>                         
                        </NavLink>
                        <label for="hbr" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                            <div aria-hidden="true" class="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                            <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                        </label>
                    </div>
                    <div class="hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                        <div class="text-gray-600 dark:text-gray-300 lg:pr-4">
                            <ul class="space-y-6 tracking-wide text-white text-base gap-14  lg:text-sm lg:flex lg:space-y-0">
                                <li>
                                    <NavLink to={'/'} >
                                        <span className='text-[#ffffffb3] hover:text-white'>Home</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/aboutUs'}>
                                        <span className='text-[#ffffffb3] hover:text-white'>About Us</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/features'} >
                                        <span className='text-[#ffffffb3] hover:text-white'>Features</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/solution'} >
                                        <span className='text-[#ffffffb3] hover:text-white'>Solution</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;