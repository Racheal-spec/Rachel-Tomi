import React from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import img1 from '../../img/code-repeat.jpeg';
import img2 from '../../img/local storage.jpg';

const HomeBlog = () => {

    return(
<div className="blog-section">
    <h2>Blog</h2>
    <h6>RECENT POST</h6>
< div className="blog-card">
   <div className="card">
   <div className="card-body">
    <Link to="">
    <img src={img1} alt="eat code repeat" />
    </Link>
      
    <div className="card-text">
           <h3>How to spend more time not coding as a developer</h3>
       <p>You were expecting some new tech right? You’re always on a tight deadline,
            learning a new framework, 
           </p>
        <Link to="" className="links">
            <p className="readMore">Read More</p>
        </Link>
   </div>
   </div>
   </div>
   {/*second card*/}

   <div className="card">
       <div className="card-body">
    <Link to="">
    <img src={img2} alt="Local storage" />
    </Link>
       </div>
       <div className="card-text">
           <h3>How to use local storage in Javascript</h3>
         <p>At one point in your javascript journey, you'll need to store some data locally on the client's side.
              In this article, I’m going to 
           </p>
        <Link to="" className="links">
            <p className="readMore">Read More</p>
        </Link>
       </div>
   </div>
</div>
</div>
    )
}

export default HomeBlog;