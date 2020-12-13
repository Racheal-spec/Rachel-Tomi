import React from 'react';
import heroImg from '../../img/Tomi36new.png';
import Button from '../Button/Button';

const HomeHero = () => {
    return(
<div className="panel homehero-section">
<div className="hero">
    <div className="hero-img">
        <img src={heroImg} className="img-hero" alt="Rachel-Tomi"/>
    </div>
    <p>
    I’m Rachel — a freelance front end developer based in the Lagos, Nigeria.
    </p>
   <form action="mailto:folorunshotosin334@gmail.com" 
    method="POST" 
    encType="multipart/form-data">
   <Button>WORK WITH ME</Button>
   </form>
</div>
</div>
    )
}

export default HomeHero;