import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import {menuIntro} from '../Animate';


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

//To make Gsap animation work, use useRef hook to access the MenuIntro animation
let logoBurger = useRef(null)
useEffect(() => {
  menuIntro(logoBurger.current);
})
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
    <Link to='/blog' className="links">
      <li>Blog</li>
    </Link>
    <Link to='/contact' className="links">
      <li>Contact</li>
    </Link>
   </ul>
  <ul className="social-icons">
       <Link to=''>
           <li>
           <i className="fab fa-twitter-square" id="icon"></i>
           </li>
       </Link>
       <Link to=''>
           <li>
           <i className="fab fa-github-square"  id="icon"></i>
           </li>
       </Link>
       <Link to=''>
           <li>
           <i className="fab fa-instagram-square"  id="icon"></i>
           </li>
       </Link>
   </ul>
  </div>      
 
  <div className={click ? 'firstmobile-nav' : 'nav-active'}>
   <ul className="Nav-list-mobile">
   <Link to='/' className="links" onClick={closeMenu}>
      <li>Home</li>
   </Link>
    <Link to='/blog' className="links" onClick={closeMenu}>
      <li>Blog</li>
    </Link>
    <Link to='/contact' className="links" onClick={closeMenu}>
      <li>Contact</li>
    </Link>
   </ul>
  <ul className="social-icons-mobile">
       <Link to='' onClick={closeMenu}>
           <li>
           <i className="fab fa-twitter-square" id="icon"></i>
           </li>
       </Link>
       <Link to='' onClick={closeMenu}>
           <li>
           <i className="fab fa-github-square"  id="icon"></i>
           </li>
       </Link>
       <Link to='' onClick={closeMenu}>
           <li>
           <i className="fab fa-instagram-square"  id="icon"></i>
           </li>
       </Link>
   </ul>
  </div>     
</nav>
    )
}

export default Header;