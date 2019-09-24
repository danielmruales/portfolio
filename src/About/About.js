import React from 'react';
// import Navbar from '../Navbar/Nabar'
import me from '../Danny1.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <div className='mainAboutDiv'>
                <img  className='profile' src={me} alt='profile pic'/>
            </div>
                <p className='aboutMe'> Born in Quito, Ecuador I came to the United States at a young age. Growing up an immigrant in Utah county I've always had an unrelenting drive to succeed. I specialize in working with SaaS companies and have a strong passion for all things digital. I strive to create products that will help bridge the gap between people and technology. Any time I'm not at a computer I'm usually at the symphony, playing soccer, or out on an adventure. </p>
        </div>
    );
};

export default About;