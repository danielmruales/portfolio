import React from 'react';
import Navbar from '../Navbar/Navbar'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <h1 className='message'>Let's Chat!</h1>
                <h3>Want to collaborate on a project? Shoot me an email <span> danielmruales@gmail.com</span></h3>
                <a href="mailto:danielmruales@gmail.com">Email Us</a>  


                
            </div>
        </div>
    );
};

export default Contact;