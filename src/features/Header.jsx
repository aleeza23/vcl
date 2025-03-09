import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Navs } from '../components/Navs';
import Button from '../components/Button';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

    };

    return (
        <div className='h-[20vh] py-3'>
            <div className="container mx-auto relative px-4">
                <div className='flex justify-between items-center'>
                    <a href='/'>
                        <img src={logo} alt="logo" className=' w-32 lg:w-[169px]' />
                    </a>
                    <nav className='flex gap-2'>
                        {/* Desktop Navigation */}
                        <div className="lg:flex items-center hidden">
                            <Navs />
                        </div>
                        {/* Mobile Controls */}
                        <div className="flex gap-4 items-center">
                          <Button>Try for free</Button>


                            <button onClick={toggleMenu}>
                                {isMenuOpen ? <RxCross1 className='size-5 font-extrabold lg:hidden text-white bg-black bg-gradient-to-t from-neutral-800 w-6 h-6 p-1.5 rounded-full' /> : <RxHamburgerMenu className='size-7 text-white font-extrabold lg:hidden' />}

                            </button>
                        </div>
                    </nav>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`z-10 fixed left-0 top-0 h-full w-[250px]  lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? ' opacity-100' : 'opacity-0'}`}
                    style={{ transition: 'all 0.3s ease-in-out' }}
                >
                    <div className="flex flex-col gap-3  border-r border-white/20 bg-black bg-gradient-to-t from-neutral-900 h-full p-8 w-full">
                        <Navs />
                    </div>
                </div>

            </div>
        </div>
    );
};