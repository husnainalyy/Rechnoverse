import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 w-full text-gray-700   bg-white dark:text-gray-200 dark:bg-gray-800">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="p-4 flex flex-row items-center justify-between">
                    <NavLink
                        to="/"
                        className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
                    >
                        EchoLeaf
                    </NavLink>
                    <button
                        className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            {menuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <nav
                    className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${menuOpen ? 'flex' : 'hidden'
                        }`}
                >
                    <NavLink
                        className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        to="/Learn"
                    >
                        Learn
                    </NavLink>
                    
                    <NavLink
                        className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        to="/Community"
                    >
                        Community
                    </NavLink>
                    
                    <NavLink
                        className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        to="/Contact"
                    >
                        About
                    </NavLink>
                    <div
                        className="relative"
                        onBlur={() => setDropdownOpen(false)}
                        onFocus={() => setDropdownOpen(true)}
                        tabIndex={0}
                    >
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        >

                        </button>
                        
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
