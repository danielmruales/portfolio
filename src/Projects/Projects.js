import React from 'react';
import Navbar from '../Navbar/Nabar'
import evas from '../Evas.jpg'
import wanderlust from '../Wanderlust.png'
import './Projects.css'

const Projects = () => {
    return (
        <div>
        <Navbar/>
        <div className='mainProjectsDiv'>
            
            <a href='https://github.com/danielmruales/evas-bakery' rel="noopener noreferrer" target='_blank'>
            <h1 className='projectTitle'> Eva's Bakery</h1>
                <img src={evas} alt='project screenshot' className='projects'/>
                <p className='madeWith'> React, Node.js, </p>
                {/* <p>Description of Project</p> */}
                <p className='firstBtn'> View On GitHub</p>
            </a>
            <a href='http://wanderlustbase.surge.sh/' target='_blank' rel="noopener noreferrer" >
                <h1 className='projectTitle'>WanderLust</h1>
                <img src={wanderlust} alt='preview' className='projects'/>
                <p className='madeWith'> React, Node.js, </p>
                {/* <p>Description of Project</p> */}
                <p className='liveBtn'>View Live</p>
            </a>
            <a href='https://github.com/danielmruales/portfolio' target='_blank' rel="noopener noreferrer">
                <h1 className='projectTitle' >Personal Project</h1>
                <img src='https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_36722630_Full.jpg?crop=0,0,6549,4912&wid=580&hei=435&scl=11.291954022988506' className='lastProject' alt='preview' />
                <p className='madeWith'> React, Node.js, </p>
                {/* <p>Description of Project</p> */}
                <p className='lastLiveBtn'>View On GitHub</p>
            </a>
        </div>
        </div>
    );
};

export default Projects;