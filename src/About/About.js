import React from 'react';
import Navbar from '../Navbar/Navbar'
import me from '../DannySelfie.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className='mainAboutDiv'>
                <img  className='profilePic' src={me} alt='profile pic'/>
            </div>
                <p className='aboutMe'>
                    I am a passionate, driven, and adaptable learner who
                    strives to create products that help bridge the gap between people and technology. 
                    I specialize in working with SaaS companies and 
                    in my free time I enjoy visiting the symphony, playing soccer, and studying philosophy. 
                </p>

        </div>
    );
};

export default About;