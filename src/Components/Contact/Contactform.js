import React, { useState } from 'react';
import Button from '../Button/Button';
import { db } from '../Firebase';

const Contactform = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");


const handleSubmit = (e) => {
 e.preventDefault();

 db.collection('contact').add({
     name: name,
     email: email,
     message: message,
 })
 .then(() => {
     alert("Your message has been sent");
 })
 .catch((error) => {
     alert(error.message);
 })

 setName("");
 setEmail("");
 setMessage("");
}

    return(
<div className="form-section">
    <div className="form-div">
     <div className="main-form">
         <form action="" onSubmit={handleSubmit}>
         <label for="name">Name<span className="star">*</span></label>
             <input type="name" className="all-input" value={name} onChange={(e) => setName(e.target.value)} />
             <label for="email">Email<span className="star">*</span></label>
             <input type="email" className="all-input" value={email} onChange={(e) => setEmail(e.target.value)} />
             <label for="email">Message<span className="star">*</span></label>
             <textarea className="textArea" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
             <Button type="submit">Send Message</Button>
         </form>
         </div>
    </div>
</div>
    )
}

export default Contactform;