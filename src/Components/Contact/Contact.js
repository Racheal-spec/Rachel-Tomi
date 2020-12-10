import React from 'react';
import ContactHero from './ContactHero';
import './Contact.scss';
import Contactform from './Contactform';
import Contactcard from './Contactcard';

const Contact = () => {

    return(
<div className="main-div panel">
  <ContactHero />
  <Contactcard />
  <Contactform />
</div>
    )
}

export default Contact;