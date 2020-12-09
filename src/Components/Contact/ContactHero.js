import React from 'react';
import emailpng from '../../img/email.jpg';

const Contact = () => {

    return(
<div className="contact-section">
<div className="contact-hero">
    <div className="col-1">
        <h2>Contact Me</h2>
    </div>
    <div className="col-2">
    <img src={emailpng} alt="contact us" />   
    </div>
</div>

</div>
    )
}

export default Contact;