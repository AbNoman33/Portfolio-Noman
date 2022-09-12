import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroImg2 from '../components/HeroImage/HeroImg2';
import Navbar from '../components/Navbar/Navbar';
import PricingCard from '../components/pricingCard/PricingCard';

import Work from '../components/WorkData/Work';

const Projects = () => {
    return (
        <div>
          <Navbar/>
          <HeroImg2 heading="Project."
           text ="Some of my most Recent Works."/>
           <Work/>
           <PricingCard/>
          <Footer/> 

        </div>
    );
};

export default Projects;