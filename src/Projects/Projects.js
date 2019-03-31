import React from 'react';
import Navbar from '../Navbar/Nabar'
import './Projects.css'

const Projects = () => {
    return (
        <div>
        <Navbar/>
        <div className='mainProjectsDiv'>
            <a href='http://wanderlustbase.surge.sh/' target='_blank' rel="noopener noreferrer" >
                <img src='https://warnercnr.colostate.edu/wp-content/uploads/sites/2/2017/04/shutterstock_428626417-1024x683.jpg' alt='preview' className='projects'/>
            </a>
            <img src='https://www.tripsavvy.com/thmb/IXSDIHwCLwuwxUHJhlHyd1L4jpA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-547918233-5907d0305f9b58647026e62a.jpg' alt='preview' className='projects' />
            <img src='http://www.adventureprofessionals.com.au/wp-content/uploads/2014/03/AP-Adventure-on-High.jpg' className='projects' alt='preview' />
        </div>
        </div>
    );
};

export default Projects;