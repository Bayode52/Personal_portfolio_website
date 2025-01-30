import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css'
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext.jsx';

export default function Navbar(){
    const [iMenu, setIMenu] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'Home', path: '/'},
        { name: 'About', path: '/about'},
        { name: 'Projects', path: '/projects'},
        { name: 'Contact', path: '/contact'},
    ]

    return(
       <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`} >
            <div className='nav-brand'>
                Bayode Adegboyega
            </div>

            {/* Mobile Menu Toggle */}
            <button 
            className='menu-toggle'
            onClick={() => setIMenu(!iMenu)}
            aria-label='Toggle navigation'
            >
                {iMenu ? <FiX /> : <FiMenu />  }
            </button>
            
            {/* Navigation links */}
            <div className={`nav-links ${iMenu ? 'active' : ''}`}>
                {navLinks.map((link)=> (
                    <NavLink 
                    key={link.path}
                    to={link.path}
                    className={({isActive}) => (isActive ? 'active' : '')}
                    onClick={() => setIMenu(false)}
                    > 
                        {link.name}
                    </NavLink>
    
                ))}
                
            </div>

            {/* Dark Mode Toggle */}
            <button 
            onClick={toggleTheme}
            className='theme-toggle'
            >
                {isDarkMode ? 'sun' : 'moon'}
            </button>
       
       </nav>
    )
}