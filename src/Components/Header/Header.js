import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';


const Header = () => {
 const[click, setClick] = useState(false);

 const handleClick = () => {
    setClick(!click);
   }
const closeMenu = () => {
  setClick(!click);
}
 useEffect(() =>{
   handleClick();
 }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return(
<nav className="navs">
<div className="logoBurger">
          <div className= {click? 'burger' : 'fas fa-times'}  onClick={handleClick}>
               <div className='line1'></div>
               <div className='line2'></div>
               <div className='line3'></div>
            </div>  
        <Link to="/" className="logo">
          <h1>[Rachel Tomi]</h1>
        </Link>
        </div> 
 
    <div className="first-nav">
   <ul className="Nav-list">
   <Link to='/' className="links">
      <li>Home</li>
   </Link>
    <Link to={{pathname: "https://blog.racheltomi.com"}} target="_blank" className="links">
      <li>Blog</li>
    </Link>
    <Link to='/contact' className="links">
      <li>Contact</li>
    </Link>
   </ul>
  <ul className="social-icons">
       <Link to={{pathname:"https://twitter.com/racheltomidev"}} target="_blank">
           <li>
           <i className="fab fa-twitter-square" id="icon"></i>
           </li>
       </Link>
       <Link to={{pathname:"https://github.com/racheal-spec"}} target="_blank">
           <li>
           <i className="fab fa-github-square"  id="icon"></i>
           </li>
       </Link>
       <Link to={{pathname:"https://instagram.com/girlliketomi"}} target="_blank">
           <li>
           <i className="fab fa-instagram-square"  id="icon"></i>
           </li>
       </Link>
   </ul>
  </div>      
 
  <div className={click ? 'firstmobile-nav' : 'nav-active'}>
  
  </div>     
</nav>
    )
}

export default Header;