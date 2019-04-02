import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

const Nabar = () => {
    return (
        <div className='nav'>
            <Link to='/' className='logo'>D <span>&#183;</span> M <span>&#183;</span> R</Link>
            <Link to='/projects' className='navItems'>Projects</Link>
            <Link to='/resume' className='navItems'>Resume</Link>
            <Link to='/about' className='navItems'>About</Link>
            <Link to='/contact' className='navItems'>Contact</Link>
        </div>
    );
};

export default Nabar;