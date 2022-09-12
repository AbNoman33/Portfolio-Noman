import React from 'react';
import AboutContent from '../components/AboutContent/AboutContent';
import Footer from '../components/Footer/Footer';
import HeroImg2 from '../components/HeroImage/HeroImg2';
import Navbar from '../components/Navbar/Navbar';

const About = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="ABOUT."
    text="I am a passionate Front-End Developer."/>
    <AboutContent/>
    <Footer/> 

</div>
  )
}

export default About