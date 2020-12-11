import React from 'react';
import {useHistory} from 'react-router-dom';
import heroImg from '../../img/Tomi36new.png';
import Button from '../Button/Button';
const HomeHero = () => {
let history = useHistory();

const redirect = () => {
    history.push('/contact')
}
    
    return(
<div className="panel homehero-section">
<div className="hero">
    <div className="hero-img">
        <img src={heroImg} className="img-hero" alt="Rachel-Tomi"/>
    </div>
    <p>
    I’m Rachel — a freelance front end developer based in the Lagos, Nigeria.
    </p>
    <Button onClick={redirect}>WORK WITH ME</Button>
</div>
</div>
    )
}

export default HomeHero;