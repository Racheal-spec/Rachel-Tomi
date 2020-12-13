import React from 'react';
import './Home.scss';
import Button from '../Button/Button';


const Portfolio = () => {

    return(
<div className="panel portfolio-section">
<h6>PORTFOLIO</h6>
    {/*first project*/}
    <div className="project">
    <div className="project-text">
            <h3>FashionFiesta<i className="fas fa-arrow-right"></i></h3>
            <p>A react based ecommerce website where users can pick an item, check item details,
                 add item to cart and also remove item from cart
            </p>
            <p>Reactjs  SCSS  </p>
            <Button onClick={()=> {window.location.href="https://fashion-fiesta.vercel.app"}}>View Demo</Button>
            <Button buttonStyle="btn--secondary" onClick={()=> {window.location.href="https://github.com/Racheal-spec/FashionFiesta"}}>Code</Button>
        </div>

    <div className="project-text">
            <h3>Delfy<i className="fas fa-arrow-right"></i></h3>
            <p>A simple crytocurrency landing page with a nice road map section.</p>
            <p>Html  Css Javascript Boostrap</p>
            <Button onClick={()=> {  window.location.href="https://delfy.vercel.app"}}>View Demo</Button>
            <Button buttonStyle="btn--secondary" onClick={()=> {window.location.href="https://github.com/Racheal-spec/delfy"}}>Code</Button>
        </div>
    </div>
    {/*<HrLine color="#7c7a81" /> */}

     {/*second project*/}
    
     <div className="project">
     <div className="project-text">
            <h3>Best Interior<i className="fas fa-arrow-right"></i></h3>
            <p>An interior decoration website that uses the 
                horizontal scrolling effect
            </p>
            <p>Html CSS JavaScript Boostrap GSAP</p>
            <Button onClick={()=> {window.location.href="https://best-interior.vercel.app"}}>View Demo</Button>
            <Button buttonStyle="btn--secondary" onClick={()=> {window.location.href="https://github.com/Racheal-spec/best-interior"}}>Code</Button>
        </div>

     <div className="project-text">
            <h3>MyClinic<i className="fas fa-arrow-right"></i></h3>
            <p>A clinic landing page that showcase what myClinic does best, 
                their team and how to contact them.
            </p>
            <p>HTML CSS JavaScript</p>
            <Button onClick={()=> {window.location.href="https://myclinicapp.netlify.app"}}>View Demo</Button>
            <Button buttonStyle="btn--secondary" onClick={()=> {window.location.href="https://github.com/Racheal-spec/myClinic"}}>Code</Button>
        </div>
    </div>

</div>
 
    )
}

export default Portfolio;