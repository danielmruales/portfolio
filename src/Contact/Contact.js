import React from 'react';
import Navbar from '../Navbar/Nabar'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <h1 className='message'>Let's Create Something!</h1>
            <div className='mainContactDiv' >
                <form className='form'>
                    <input type='text' placeholder='First Name'/>
                    <input type='text' placeholder='Last Name'/>
                    <input type='text' placeholder='E-mail'/>
                    <button> Submit </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;