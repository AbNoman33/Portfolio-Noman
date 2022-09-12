import React from 'react';
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/Form/ContactForm';
import HeroImg2 from '../components/HeroImage/HeroImg2';
import Navbar from '../components/Navbar/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg2 heading="CONTACT."
            text="Let's have a chat.."/>
            <ContactForm/>
          <Footer/> 
        </div>
    );
};

export default Contact;