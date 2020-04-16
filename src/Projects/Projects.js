import React from 'react';
import Navbar from '../Navbar/Navbar'
import evas from '../Evas.jpg'
import wanderlust from '../Wanderlust.png'
import fin from '../mcfinny.png'
import philosophy from '../philosophyApp.png'
import './Projects.css'

const Projects = () => {
    return (
        <div>
        <Navbar/>
        <div className='mainProjectsDiv'>
            
            <a href='https://github.com/danielmruales/evas-bakery' rel="noopener noreferrer" target='_blank'>
            <h1 className='projectTitle'> Eva's Bakery</h1>
                <img src={evas} alt='project screenshot' className='projects'/>
                <p className='description'>Full Stack website for a local bakery</p>
                <p className='madeWith'> React, Node, MongoDB, Express </p>
                <p className='firstBtn'> View On GitHub</p>
            </a>
            <a href='https://wanderlusthikes.netlify.app' target='_blank' rel="noopener noreferrer" >
                <h1 className='projectTitle'>WanderLust</h1>
                <img src={wanderlust} alt='preview' className='projects'/>
                <p className='description'>Web application to find local hikes </p>
                <p className='madeWith'> React, Node, Hiking Project API </p>
                <p className='liveBtn'>View Live</p>
            </a>
            <a href='https://philosophizethis.netlify.com/' target='_blank' rel="noopener noreferrer" width='287px'>
                <h1 className='projectTitle' >Philosophize This</h1>
                <img src={philosophy} className='philosophyPic' alt='preview' />
                <p className='description'>Website aimed at democratizing philosophy</p>
                <p className='madeWith'> React, Node, JavaScript </p>
                <p className='lastLiveBtn'>View Live</p>
            </a>
            <a href='https://github.com/danielmruales/mccauleyfinnegan' target='_blank' rel="noopener noreferrer">
                <h1 className='projectTitle' >M.C. Finnegan</h1>
                <img src={fin} className='projects' alt='preview' />
                <p className='description'>Full Stack website for local professional</p>
                <p className='madeWith'> React, Node, MongoDB, Express </p>
                <p className='caulBtn'>View On GitHub</p>
            </a>
            
        </div>
        </div>
    );
};

export default Projects;