import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <h1 className='title'>Daniel Ruales</h1>
            <Link>Check Out MY Work</Link>
        </div>
    );
};

export default Home;