import React, { useState } from 'react';
import navLogo from '../../Img/nav/logo.png';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const handleMenuBtn = () => {
        setOpen(open => !open)
    }
    console.log(open)

    return (
        <div>
            {/*------------- Large device navbar start ----------------*/}
            <nav className="w-full max-w-[1170px] mx-auto backdrop-blur navbar z-50">
                <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
                    <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
                        <div className="w-full items-center flex justify-between lg:w-auto">
                            <Link to={'/'} >
                                <div className='relative flex items-center gap-[9px]'>
                                    <img src={navLogo} alt="" />
                                    <p className='text-white font-semibold text-lg'>OR<span className='text-[#D69300]'>BIDO</span></p>
                                </div>
                            </Link>
                            <label onClick={handleMenuBtn} className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                <div className="m-auto h-0.5 w-5 rounded bg-white dark:bg-gray-300 transition duration-300"></div>
                                <div className="m-auto mt-2 h-0.5 w-5 rounded bg-white dark:bg-gray-300 transition duration-300"></div>
                            </label>
                        </div>
                        <div className="hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                            <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                                <ul className="space-y-6 tracking-wide text-white text-base gap-14  lg:text-sm lg:flex lg:space-y-0">
                                    <li>
                                        <NavLink to={'/'} >
                                            <span className='text-[#ffffffb3] hover:text-white'>Home</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/'}>
                                            <span className='text-[#ffffffb3] hover:text-white'>About Us</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/'} >
                                            <span className='text-[#ffffffb3] hover:text-white'>Features</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/'} >
                                            <span className='text-[#ffffffb3] hover:text-white'>Solution</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div >
                </div >
            </nav >
            {/*------------- Large device navbar end ----------------*/}
            {/*------------- Mobile device navbar start ----------------*/}
            <div className={`${open ? 'hidden' : 'flex'} navbar-menu relative z-50`}>
                <div className="navbar-backdrop fixed inset-0"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#00040F] overflow-y-auto">
                    <div className="flex items-center justify-end mb-8">
                        <button onClick={handleMenuBtn} className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <NavLink to={'/'} >
                                    <span className='text-[#ffffffb3] hover:text-white'>Home</span>
                                </NavLink>
                            </li>
                            <li className='py-4'>
                                <NavLink to={'/'}>
                                    <span className='text-[#ffffffb3] hover:text-white'>About Us</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/'} >
                                    <span className='text-[#ffffffb3] hover:text-white'>Features</span>
                                </NavLink>
                            </li>
                            <li className='pt-4'>
                                <NavLink to={'/'} >
                                    <span className='text-[#ffffffb3] hover:text-white'>Solution</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/*------------- Mobile device navbar end ----------------*/}
        </div>
    );
};

export default NavBar;