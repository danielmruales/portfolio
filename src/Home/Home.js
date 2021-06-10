import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <h1 className='hi'>Hi, I am </h1>
            <h1 className='title'>Daniel Ruales</h1>
            <h2 className='subTitle'>Product Manager, Developer, and SDR </h2>
            {/* <h2 className='subTitle'>Product, engineering, sales is what I do</h2> */}
            <div className='buttonDiv'>
                {/* <Link to='/projects' className='button'> View Projects </Link>  */}
                <Link to='/about' className='aboutBtn'> Get to know me </Link>
            </div>
        </div>

    );
};

export default Home;


