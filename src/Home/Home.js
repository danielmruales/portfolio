import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <h1 className='title'>Hi, I'm Daniel Ruales</h1>
            <h2 className='subTitle'>Project Manager &  Full Stack Web Developer</h2>
            <Link to='/projects' className='button'>View My Work</Link>
        </div>
    );
};

export default Home;