import React, { useEffect, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import PropTypes from 'prop-types';


import Button from '../components/layout/Button';
import '../assets/styles/Header.css';
import NavLink from './NavLink';
import { toggleScroll } from '../utilities/general';

function Header({ solidBg }) {
    const location = useLocation();
    const navigate = useNavigate();

    const [scrolled, setScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);



    useEffect(() => {
        const func = () => setScrolled(window.pageYOffset > 30);

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', func);
        }
        func();

        return (() => {
            window.removeEventListener('scroll', func);
        });
    }, []);

    useEffect(() => {
        toggleScroll();

        return () => setTimeout(() => {
            toggleScroll();
        }, 0);
    }, [showMenu]);


    return (
        <>
            <header className={`w-full  bg-primary h-[106px] top-0 z-40 overflow-hidden sticky ${scrolled || solidBg ? 'bg-blac' : ''}`}>
                <div className="content">
                    <div className="w-full flex items-center justify-between md:px-20 px-5 py-8">
                        <div className="logo">
                            <Link to="/">
                                <p>eve.ita</p>
                            </Link>
                        </div>
                        <div className="nav-links hidden lg:block">
                            <ul className="flex items-center">
                                <NavLink link="/" className="mx-3 font-semibold"><span className="text-secondary">01.</span>HOME</NavLink>
                                <NavLink link="/project" className="mx-3 font-semibold"><span className="text-secondary">02.</span> Project</NavLink>
                                <NavLink link="/contact" className="mx-3 font-semibold"><span className="text-secondary">03.</span> Contact</NavLink>
                                <Button
                                    onClick={() => navigate('/experience')}
                                    border>

                                    Resume
                                </Button>




                            </ul>

                        </div>

                        <div className="lg:hidden">
                            <HiOutlineMenuAlt1 className="top-5 right-10 w-8 h-auto text-white cursor-pointer" onClick={() => setShowMenu(true)} />
                        </div>
                    </div>
                </div>
            </header>

            <div
                role="presentation"
                onClick={(e) => (e?.target?.classList?.contains('side-menu') && setShowMenu(false))}
                className={`side-menu ${showMenu ? 'show overlay' : ''} fixed z-40 top-0 left-0 w-full h-2/3 `}
            >
                <div className="bg-primary w-full sm:w-sideMenu absolute right-0 top-0 h-full">
                    <div className="w-full relative">
                        <button
                            type="button"
                            onClick={() => setShowMenu(false)}
                            className="fixed top-5 right-10 text-white font-bold flex items-center hover:bg-opacity-20"
                        >
                            <MdClose className="w-10 h-auto" />
                        </button>
                        <div className="w-full px-10 py-20">
                            <ul className="w-full text-sm">
                                <Link to="/" onClick={() => setShowMenu(false)}>
                                    <li
                                        className={`${location.pathname === '/' ? 'bg-primary bg-opacity-20' : ''
                                            } text-xl px-5 py-4 hover:bg-primary hover:bg-opacity-20`}
                                    >
                                        eve.ita
                                    </li>
                                </Link>

                                <Link to="/" onClick={() => setShowMenu(false)}>
                                    <li
                                        className={`${location.pathname === '/' ? 'bg-primary bg-opacity-20' : ''
                                            } text-xl px-5 py-4 hover:bg-primary hover:bg-opacity-20`}
                                    >
                                        <span className="text-secondary">01.</span> Home
                                    </li>
                                </Link>

                                <Link to="/project" onClick={() => setShowMenu(false)}>
                                    <li
                                        className={`${location.pathname === '/project' ? 'bg-primary bg-opacity-20' : ''
                                            } text-xl px-5 py-4 hover:bg-primary hover:bg-opacity-20`}
                                    >
                                        <span className="text-secondary">02.</span>PROJECT
                                    </li>
                                </Link>
                                <Link to="/contact" onClick={() => setShowMenu(false)}>
                                    <li
                                        className={`${location.pathname === '/leaderboard' ? 'bg-primary bg-opacity-20' : ''
                                            } text-xl px-5 py-4 hover:bg-primary hover:bg-opacity-20`}
                                    >
                                        <span className="text-secondary">03.</span>CONTACT
                                    </li>
                                </Link>
                            </ul>

                            <Button
                                onClick={() => navigate('/experience')}
                                border>Resume</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Header.propTypes = {
    solidBg: PropTypes.bool
};

Header.defaultProps = {
    solidBg: false
};

export default Header;
