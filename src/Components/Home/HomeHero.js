import React from 'react';
import heroImg from '../../img/Tomi36new.png';
const HomeHero = () => {

    return(
<div className="panel homehero-section">
    <div className="hero-img">
        <img src={heroImg} className="img-hero" alt="Rachel-Tomi"/>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum nulla at nisl luctus pretium. Quisque ut blandit velit. Quisque finibus nunc id tellus rutrum eleifend. Duis tincidunt nec magna et efficitur. Nullam pharetra libero quam, a pharetra lacus vulputate eget. Aliquam magna quam, vestibulum quis mattis id, tincidunt a augue. 
        Proin pellentesque, ex vitae eleifend suscipit, dui felis consequat eros, nec pretium diam augue id risus.
    </p>
</div>
    )
}

export default HomeHero;