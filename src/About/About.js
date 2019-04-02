import React from 'react';
import Navbar from '../Navbar/Nabar'
import me from '../Danny1.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className='mainAboutDiv'>
                <img  className='profile' src={me} alt='profile pic'/>

            
            </div>
                <p className='aboutMe'> Born in Quito, Ecuador I've always had an unrelenting drive to succeed. Project manager with proficiency in the MERN stack. I specialize in working with SaaS companies and have a strong passion for all things digital. I strive to create products that will bridge the gap between people and technology. </p>
        </div>
    );
};

export default About;