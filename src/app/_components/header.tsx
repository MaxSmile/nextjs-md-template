// src/app/_components/header.jsx
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MAIN_MENU } from "@/lib/constants";
import Image from 'next/image';
import { useRouter } from 'next/router';
import MenuIconOpen from './MenuIconOpen';
import MenuIconClose from './MenuIconClose';
import Container from './Container';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

//   const handleToggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="p-4 flex justify-between items-center max-w-6xl mx-auto text-accent-1">
//       {/* Logo and title */}
//       <h1 className="text-3xl font-bold">
//         <Link href="/">
//           <span className="cursor-pointer hover:text-gray-700">UAANT</span>
//         </Link>
//       </h1>

//       {/* Navigation Menus */}
//       <nav className="hidden md:flex flex-grow items-center justify-center space-x-4">
//         {/* Desktop Navigation Links */}
//         {MAIN_MENU.map((item, index) => (
//           <Link href={item.link} key={index}>
//             <span className="cursor-pointer">{item.title}</span>
//           </Link>
//         ))}
//       </nav>

//       {/* Buttons */}
//       <div className="hidden md:flex space-x-4">
//         <Link href="#donate"><span className="bg-accent-1 hover:bg-blue-600 px-4 py-2 transition duration-300 text-white cursor-pointer">Donate Now</span></Link>
//         <Link href="#volunteer"><span className="bg-accent-2 hover:bg-yellow-600 px-4 py-2 transition duration-300 text-accent-1 cursor-pointer">Volunteer</span></Link>
//       </div>

//       {/* Mobile Navigation Button */}
//       <button  className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black px-3 py-2 rounded-md text-black cursor-pointer" aria-expanded={isMobileMenuOpen} 
//           aria-label="Toggle mobile menu" onClick={handleToggleMenu}>
//         <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//         </svg>
        
//       </button>

//       {/* Mobile Navigation Menu */}
//       <div className={`absolute p-8 top-0 right-0 bg-white shadow-md z-10 space-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
//         {/* Close button */}
//         <button onClick={handleToggleMenu} className="self-end">
//           <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//         {/* Mobile Navigation Links */}
//         {MAIN_MENU.map((item, index) => (
//           <Link href={item.link} key={index}>
//             <span className="block p-2">{item.title}</span>
//           </Link>
//         ))}
//         <Link href="#donate"><span className="block my-2 bg-accent-1 hover:bg-blue-600 px-4 py-2 transition duration-300 text-white text-center">Donate Now</span></Link>
//         <Link href="#volunteer"><span className="block bg-accent-2 hover:bg-yellow-600 px-4 py-2 transition duration-300 text-accent-1 text-center">Volunteer</span></Link>
//       </div>


//     </header>
//   );
// };

const Header = (props: any) => {
  const [router, setRouter] = useState('')

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
          console.log("switch toggleMenu",showMenu);
          setShowMenu(!showMenu);
  };

    useEffect(() => {
        setRouter(''+window.location.pathname);
    }, []);

  return (
      <header className='sticky top-0 z-50 transition bg-white duration-300 drop-shadow-xl'>
          <Container>
              <div className="flex items-center justify-between py-5 lg:py-0">
                  <Link href="/">
                      <Image src="/images/logo-vasilkoff.webp" alt="Vasilkoff logo" className="h-12" width={104} height={48} />
                  </Link>
                  <div className="flex items-center">
                      {/* Overlay */}
                      <div id='overlay' onClick={() => toggleMenu()} 
                          className={`overlay fixed inset-0 h-screen w-full z-[51] bg-black/60 ${showMenu ? '' : 'hidden'}`}></div>

                      {/* Menu */}
                      <div id='menu' className={`menus top-0 pt-1 ${showMenu ? 'overflow-y-auto !right-0' : ''}`}>
                          
                          <button id='close-menu'
                              onClick={() => toggleMenu()} type="button" aria-label="Menu" 
                              className="lg:hidden absolute top-5 right-5 p-2 z-[51] rounded-full bg-primary items-center justify-center"
                              role='button'>
                                  <MenuIconClose />
                              </button>
                          <ul role='menu' onClick={() => setShowMenu(false)} >
                          {MAIN_MENU.map((item, index) => (
                              <li role='menuitem' key={index}>
                                  <Link href={item.link} className={router.includes(item.link) ? 'active' : ''}>
                                      {item.title}
                                  </Link>
                              </li>
                          ))}
                              {/* <li role='menuitem'>
                                  <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
                                      Home
                                  </Link>
                              </li>
                              <li role='menuitem'>
                                  <Link
                                      href="/portfolio"
                                      className={router.pathname === '/portfolio' || router.pathname.startsWith('/portfolio/') ? 'active' : ''}
                                  >
                                      Portfolio
                                  </Link>
                              </li>
                              <li role='menuitem'>
                                  <Link
                                      href="/#team"
                                      className={router.pathname === '/#team' || router.pathname.startsWith('/team/')  ? 'active' : ''}
                                  >
                                      Team
                                  </Link>
                              </li>
                              <li role='menuitem'>
                                  <Link
                                      href="/blog"
                                      className={router.pathname === '/blog' || router.pathname.startsWith('/blog/')  ? 'active' : ''}
                                  >
                                      Blog
                                  </Link>
                              </li>
         
                              <li role='menuitem'>
                                  <Link href="/about-us" className={router.pathname === '/about-us' ? 'active' : ''}>
                                      About Us
                                  </Link>
                              </li> */}
                          </ul>
                      </div>
                      
                      <button
                          id='menu-toggle'
                          type="button" aria-label="Menu"
                          role='button'
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
                          onClick={() => toggleMenu()}
                      >
                          <MenuIconOpen />
                      </button>
                  </div>
              </div>
          </Container>
           
      </header>
  );
};

export default Header;
