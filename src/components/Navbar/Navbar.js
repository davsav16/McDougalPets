import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown.js';

function Navbar() {
    const[click, setClick] = useState(false);
    const [dropdown, setDropDown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropDown(false)
        } else {
            setDropDown(true)
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropDown(false)
        } else {
            setDropDown(false)
        }
    }

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    McDougal Pets <i className='fab fa-firstdraft'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/facility' className='nav-links' onClick={closeMobileMenu}>
                            Facility
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                            F.A.Q.
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/pet-tributes' className='nav-links' onClick={closeMobileMenu}>
                            Pet Tributes
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;