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
                    Nothing excites me more than working on and buildoing software that helps bridge the gap between humans and technology. 
                    <br/>
                    <br/>
                    Some of my passions in life outside of the tech industry include visiting the symphony, soccer, Taekwondo, Magic the Gathering, and philosophy. 
                    {/* As a black belt at <span href="https://www.paceacademytkd.com"> Pace Academy Taekwondo </span> */}
                </p>

        </div>
    );
};

export default About;