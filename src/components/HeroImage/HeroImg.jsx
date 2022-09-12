import './HeroImg.css';
import IntroImg from '../../assets/images/intro-bg.jpg';
import React from 'react'
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img className='intro-img' src={IntroImg} alt="" />
        </div>
        <div className="content">
            <p>Hi, I am a Freelancer.</p>
            <h1>React Developer.</h1>
            <div>
            <Link to="/projects" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
        </div>
        
    </div>
  )
}

export default HeroImg