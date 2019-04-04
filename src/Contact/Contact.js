import React from 'react';
import Navbar from '../Navbar/Nabar'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <h1 className='message'>Let's Collaborate!</h1>
                
                <h3>Contact me at danielmruales@gmail.com</h3>
                
            </div>
        </div>
    );
};

export default Contact;