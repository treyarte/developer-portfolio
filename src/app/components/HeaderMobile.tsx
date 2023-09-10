"use client";

import { useEffect } from "react";
import { MobileMenuProps } from "./Header";
import styles from "./HeaderMobile.module.css";

/**
 * Header for mobile navigation
 * @param props 
 * @returns 
 */
export default function HeaderMobile(props:MobileMenuProps) {
    const {isMobileOpen, toggleMobileMenu} = props;

    //When active disable scrolling because the menu should be out
    useEffect(() => {
        isMobileOpen ? 
            document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [isMobileOpen]);

    /**
     * Get styles for when the mobile menu is open
     * @returns 
     */
    const getActiveStyle = () => {
        return isMobileOpen ? styles["is-open"] : "";
    }

    return (
        <nav className={`sm:hidden ${styles["mobile-header"]} ${getActiveStyle()}`}>
            <ol className="flex flex-col items-center justify-center h-full gap-y-10 text-5xl">
                <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>                        
                    <a 
                        onClick={toggleMobileMenu} 
                        href="#hero"
                    >
                        Home
                    </a>
                </li>
                <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>
                    <a 
                        onClick={toggleMobileMenu} 
                        href="#about"
                    >
                        About
                    </a>
                </li>
                <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>
                    <a 
                        onClick={toggleMobileMenu} 
                        href="#experience"
                    >
                        Experience
                    </a>
                </li>
                <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>
                    <a 
                        onClick={toggleMobileMenu} 
                        href="#projects"
                    >
                        Projects
                    </a>
                </li>
                {/* <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>
                    <a 
                        onClick={toggleMobileMenu} 
                        href="#contact"
                    >
                        Contact
                    </a>
                </li> */}
                <li className='list-none'>
                    <a 
                        onClick={toggleMobileMenu} 
                        className='marker:text-portfolio-orange hover:text-portfolio-orange'
                        target='blank' 
                        href="/static/files/treyvion_johnson_resume.pdf">Resume</a>
                </li>
            </ol>
        </nav>
    )
}