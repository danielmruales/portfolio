import React from 'react';
import Navbar from '../Navbar/Nabar'
import './Projects.css'

const Projects = () => {
    return (
        <div>
        <Navbar/>
        <div className='mainProjectsDiv'>
            
            <a href='https://github.com/danielmruales/evas-bakery' rel="noopener noreferrer" target='_blank'>
            <h1 className='projectTitle'> Eva's Bakery</h1>
                <img src='https://lh3.googleusercontent.com/sD_QTi5lWCBnPjsl4u8O97wldJ4C3fTdep2qNETCQTFqIPBDGlpRzXuqFBChpdE4Fpd0MmDSoo8sBnQDVnNORv5g_WpiOGLgvoPaCt_ozHLVb5__ID3tZOtMVtyfT7jh8eWmQMnqFOa2zSE9uzwfuVBOTFzi4u66upEAhO5TK2RKUKwE-_zzSalljsyDq6BoMAkICHSEdsthFUAXbkyxZjCtAqswcdsR19z_bde3JD-Xr6ngL9v-zyuBK_JM8dmdnLvO0FoTNDt1VxSoemImr1jCtiJHgQoBEZZ04ZiXMNxyU-97Ta9IBcrL0HdJJRME0w5Qvko_Eu4EbwwVUVj2fB4LEK5_l4blQeslOD-3M5VH9KiD4pEnqt67pq4XxCCBUqYUdqEhpaOKfX4TkoIDEQMyTUpXupColIM4LI983O_I1xnbjhu7IfZ61xkShlBB7L8Up4UQ_cYzxOJWLk1hB2_Z45zujBZ923mPkUQfQYHcPcLKx3zAmvkj9qG4-x1W6EdMFFS-Jh69KxciUaT454BNZPHoM4HcEzSHbu5-tCZArWO_RSek-l6vFg7K_Zg5uuLWXmazLkR2PwynM6T4yB14PDrnkusiighC4Wrq1bfhNYEIzzMtHZFCB8p6PnnjnOE8HwQB5M6wLqrlhhTSX_UuUoz29zw=w3356-h1768-no' alt='preview' className='projects' />
                <p> Made With: React, Node.js, </p>
                <p className='liveBtn'>See it live</p>
            </a>
            <a href='http://wanderlustbase.surge.sh/' target='_blank' rel="noopener noreferrer" >
                <h1 className='projectTitle'>WanderLust</h1>
                <img src='https://lh3.googleusercontent.com/J5lfid94RSXb9Nb6hN4bmAB6NsjkZtl3bpzWV-WKXnv493c1QxNLSipa5RR-od6j8yILvsuaB8UpjMk6uVNpkvG0KbZVfgVahb6hNNahW6rb2nf4VYxp_WyIh5MFs2w1luFGrzmi2VWYZwIU_SJPQE5oSYNTJKjems0_xqzg6ZMY-pygaa2mN8k7zsomyl7fKjzdzuymJj2MA5770vFcr1cyxQXowCMLU6_w-D9isUEhwzTsV_iqHahSMs-DXnhgxQw4tXe1fn0tg6jO3HQolKXmfVHPhuQfjbXXep_3nMjt80LsGoWFN-9UG5EddBNesHd7vjKGBNKuBbSxg4Jyj0hcSfYKzFERJWDL1tal_U_Fxx0G_bu1CBwqvr8htTsXiNh0vLGLSZ7uB0mhSZK-Ml7UUwBFgAh76MnwWGeHA4aWebZNpfXI4vUa4DAYYPChvKXn5eyFwsypwj7qFSFKGYCla9vG9HfrVh89Jgx9GMIxobAhOqcPOMxqLR3E1C2bk0_hDNJyW3xvi8GJg4BsJX548w49uPda0PKbmxeNLQgEr2KEqQxuEeaxzCP4DMIOrrPhn7htwBpkfGYKSm4sWOLoOYnhmuL7FDvA9urnw0SjEnHkqA403Pejf7bjIoY2th8lq2sPgvQoY37NmXTG25TishnZaWE=w3356-h1768-no' alt='preview' className='projects'/>
                <p> Made With: React, Node.js, </p>
                <p className='liveBtn'>See it live</p>
            </a>
            <a href='https://github.com/danielmruales/portfolio' target='_blank' rel="noopener noreferrer">
            <h1 className='projectTitle' >Some Project</h1>
                <img src='http://www.adventureprofessionals.com.au/wp-content/uploads/2014/03/AP-Adventure-on-High.jpg' className='lastProject' alt='preview' />
            </a>
        </div>
        </div>
    );
};

export default Projects;