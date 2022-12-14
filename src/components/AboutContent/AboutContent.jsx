import './AboutContent.css';
import { Link } from "react-router-dom";
import React from 'react';
import React1 from '../../assets/images/react-1.jpg';
import React2 from '../../assets/images/react-2.jpg';

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I ?</h1>
                <p>I am a React Front-End Developer. I can create responsive and secured websites for my clients.</p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>
            <div className='right'>
                <div className="image-container">
                    <div className="img-stack top">
                        <img src={React1} alt="true" className='img' />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} alt="true" className='img' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;