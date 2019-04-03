import React from 'react';
import Navbar from '../Navbar/Nabar'
import resumePic from '../DanielResume.pdf'
import './Resume.css'


const Resume = () => {
    return (
        <div>
            <Navbar/>
            <div className='mainResumeDiv'>
            {/* <h1 className='view'>View My Resume Below</h1> */}
                <embed src={resumePic} type="application/pdf" className='resume'/>
            </div>
        </div>
    );
};

export default Resume;