import React from 'react';
import Navbar from '../Navbar/Navbar'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <h1 className='message'>Contact Me</h1>
                <h3>Interested in working together? <br/> Hit the button below!</h3>
                <a href="mailto:danielmruales@gmail.com" className='mailBtn'> Email Me</a>  
                
            </div>
        </div>
    );
};

export default Contact;