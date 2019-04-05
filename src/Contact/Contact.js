import React from 'react';
import Navbar from '../Navbar/Nabar'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <h1 className='message'>Let's Chat!</h1>
                
                <h3>If you want to talk about collaborating on a project or if you just want to say hi, shoot me an email to danielmruales@gmail.com</h3>
                
            </div>
        </div>
    );
};

export default Contact;