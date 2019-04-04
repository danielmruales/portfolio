import React from 'react';
import Navbar from '../Navbar/Nabar'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <h1 className='message'>Want to get in touch?</h1>
            <div className='mainContactDiv' >
                <h3>Send me an e-mail at danielmruales@gmail.com</h3>
            </div>
        </div>
    );
};

export default Contact;