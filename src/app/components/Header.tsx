"use client"

import { useState } from 'react';
import HeaderMobile from './HeaderMobile';
import HamburgerBtn from './utils/HamburgerBtn';

export type MobileMenuProps = {
    isMobileOpen:boolean, 
    toggleMobileMenu:() => void
}

/**
 * Header component for display navigation links
 * @returns 
 */
export default function Header() {
    const [isMobileOpen, setMobileOpen] = useState(false);

    /**
     * Toggles the mobile open or close
     */
    const toggleMobileMenu = () => {
        setMobileOpen(!isMobileOpen);
    }

    return (
        <>
        <header 
            className="z-10 min-h-[var(--navbar-height)] bg-zinc-800 sticky top-0 flex items-center 
            sm:justify-around justify-between px-5 sm:px-0 backdrop-filter backdrop-blur-lg bg-opacity-30"
        >
                <a className="z-[100] h-[40px] block z-" href="/">
                    <img 
                        className="w-full h-full"
                        src="/static/images/logo.png" 
                        alt="logo" 
                    />
                </a>                
                <nav className='flex'>
                    <ol className="md:list-decimal md:list-inside sm:flex flex-row items-center gap-x-10 hidden">
                        <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>                        
                            <a href="#hero">Home</a>
                        </li>
                        <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>
                            <a href="#about">About</a>
                        </li>
                        <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>
                            <a href="#experience">Experience</a>
                        </li>
                        <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>
                            <a href="#projects">Projects</a>
                        </li>
                        {/* <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>
                            <a href="#contact">Contact</a>
                        </li> */}
                        <li className='list-none'>
                            <a 
                                className='inline-block bg-portfolio-orange hover:bg-orange-600 font-semibold 
                                py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                                rounded-full'
                                target='blank' 
                                href="/static/files/treyvion_johnson_resume.pdf">Resume</a>
                        </li>
                    </ol>
                    <HamburgerBtn 
                        isMobileOpen={isMobileOpen} 
                        toggleMobileMenu={toggleMobileMenu}
                    />
                </nav>
        </header>
                        <HeaderMobile 
                        isMobileOpen={isMobileOpen} 
                        toggleMobileMenu={toggleMobileMenu}
                    />
        </>
    )
}