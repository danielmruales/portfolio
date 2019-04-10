import React from 'react';
import {SocialIcon} from 'react-social-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <SocialIcon url="http://linkedin.com/in/danielmruales" target="_blank" fgColor="white" bgColor="none" className='social'/>
            <SocialIcon url="http://twitter.com/danielmruales" target="_blank" fgColor="white" bgColor="none" className='social'/>
            <SocialIcon url="http://github.com/danielmruales" target="_blank" fgColor="white" bgColor="none" className='social'/>
        </div>
    );
};

export default Footer;