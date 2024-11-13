'use client';
import React, { useState } from 'react';

import Link from 'next/link'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header>
      <div >
          <div id='logo'>
          <h1>SR</h1>
          </div>
        </div>
        
        <nav>
            <ul >
                <li>
                    <Link href={"/"}>About Me</Link>
                </li>
                <li>
                    <Link href={"/myservices"}>My Services</Link>
                </li>
                <li>
                    <Link href={"/portfolio"}>Portfolio</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact Me</Link>
                </li>
            </ul>
        </nav>
        
        <div id='toggle-btn'
            onClick={toggleMenu}
          >
            {/* Hamburger icon */}
            <svg
              className={` ${isMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>

            {/* Close icon */}
            <svg
              className={`${isMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
    </header>
    {isMenuOpen && (
          <div id='toggleNavbar' >
            <Link href="/"  onClick={toggleMenu}> 
                <h1>About</h1>
            </Link>
            <Link  href="/myservices" onClick={toggleMenu}>
            <h1>My Services</h1>
            </Link>
            <Link  href="/portfolio" onClick={toggleMenu}>
             <h1>Portfolio</h1>
            </Link>
            <Link  href="/contact" onClick={toggleMenu}>
             <h1>Contact Me</h1>
            </Link>
            
          </div>
        )}
    </>
  )
}

export default Header
