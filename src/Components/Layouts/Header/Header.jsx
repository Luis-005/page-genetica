import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Navbar } from '../../UI/Navbar'
import './Header.css'

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };
  return (
    <header className='headerPrincipal'>
    <div className='menu-icon' onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
    </div>
    <nav className={`navbarHeader ${isOpen ? 'open' : ''}`}>
        <Navbar styles='navbarHeader' />
    </nav>
</header>
  )
}
