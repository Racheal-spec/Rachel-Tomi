import React from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import img1 from '../../img/code-repeat.jpeg';
import img2 from '../../img/local storage.jpg';

const HomeBlog = () => {

    return(
<div className="panel blog-section">
    <h6>BLOG</h6>
< div className="blog-card">
   <div className="card">
   <div className="card-body">
    <Link to={{pathname: "https://blog.racheltomi.com/how-to-spend-more-time-not-coding-as-a-freelance-developer-ckeig5swu001tbjs1afrbhvoc"}} target="_blank" className="blog-link">
    <img src={img1} alt="eat code repeat" />
    </Link>
    <div className="card-text">
    <Link to={{pathname: "https://blog.racheltomi.com/how-to-spend-more-time-not-coding-as-a-freelance-developer-ckeig5swu001tbjs1afrbhvoc"}} target="_blank" className="blog-link">
           <h3>How to spend more time not coding as a developer<i class="fas fa-arrow-right"></i></h3>
    </Link>
       <p>You were expecting some new tech right? You’re always on a tight deadline,
            learning a new framework, 
           </p>
   </div>
   </div>
   </div>
   {/*second card*/}

   <div className="card">
       <div className="card-body">
    <Link to={{pathname: "https://blog.racheltomi.com/how-to-use-local-storage-in-javascript-ckfdnjtko0anx2zs1e0fddjau"}} target= "_blank"  className="blog-link">
    <img src={img2} alt="Local storage" />
    </Link>
       </div>
       <div className="card-text">
       <Link to={{pathname: "https://blog.racheltomi.com/how-to-use-local-storage-in-javascript-ckfdnjtko0anx2zs1e0fddjau"}} target= "_blank" className="blog-link">
           <h3>How to use local storage in Javascript<i class="fas fa-arrow-right"></i></h3>
       </Link>    
         <p>At one point in your javascript journey, you'll need to store some data locally on the client's side.
              In this article, I’m going to 
           </p>
       </div>
   </div>
</div>
 <Link to={{pathname: "https://blog.racheltomi.com"}} target= "_blank" className="readmore">
            <p className="">See all blog posts<i class="fas fa-arrow-right"></i></p>
        </Link>
</div>
    )
}

export default HomeBlog;