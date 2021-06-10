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
                    I am a <span className="adjectives">passionate</span> , <span className="adjectives">driven</span>, and <span className="adjectives"> adaptable</span> learner. 
                    Working on products that help bridge the gap between humnans and technology is what I do. 
                    <br/>
                    <br/>
                    Some of my passions in life include visiting the symphony, playing soccer, Taekwondo and philosophy. 
                    {/* As a black belt at <span href="https://www.paceacademytkd.com"> Pace Academy Taekwondo </span> */}
                </p>
        </div>
    );
};

export default About;