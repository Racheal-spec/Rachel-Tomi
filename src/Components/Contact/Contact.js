import React from 'react';
import ContactHero from './ContactHero';
import './Contact.scss';
import Contactform from './Contactform';

const Contact = () => {

    return(
<div className="main-div panel">
  <ContactHero />
  <Contactform />
</div>
    )
}

export default Contact;