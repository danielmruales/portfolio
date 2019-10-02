import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <h1 className='hi'>Hi, I'm </h1>
            <h1 className='title'>Daniel Ruales</h1>
            <h2 className='subTitle'>Project Manager &  Full Stack Web Developer currently at Soar.com</h2>
            <div className='buttonDiv'>
                <Link to='/resume' className='resumeBtn'> View Resume</Link>
                <Link to='/projects' className='button'> View Projects</Link>
            </div>
        </div>
    );
};

export default Home;