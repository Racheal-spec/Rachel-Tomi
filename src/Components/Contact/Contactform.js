import React from 'react';
import Button from '../Button/Button';

const Contactform = () => {

    return(
<div className="form-section">
    <div className="form-div">
     <div className="main-form">
         <form>
           <label for="email">Name<span className="star">*</span></label>
             <input type="email" className="all-input"></input>
             <label for="email">Email<span className="star">*</span></label>
             <input type="email" className="all-input"></input>
             <label for="email">Message<span className="star">*</span></label>
             <textarea className="textArea"></textarea>
             <Button>Send Message</Button>
         </form>
         </div>
    </div>
</div>
    )
}

export default Contactform;