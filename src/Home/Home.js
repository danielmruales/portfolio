import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <h1 className='hi'>Hi, I'm </h1>
            <h1 className='title'>Daniel Ruales</h1>
            <h2 className='subTitle'>Product Manager & Front-End Web Developer</h2>
            <div className='buttonDiv'>
                <Link to='/resume' className='button'> View My Resume </Link>
                <Link to='/about' className='aboutBtn'> A Bit About Me </Link>
            </div>
        </div>
    );
};

export default Home;