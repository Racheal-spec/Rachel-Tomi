import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';

const Footer = () => {

    return(
<footer>
 < div className="footer-div">
<div className="footer-contact">
    <Link to="/" className="logo">
          <h1>[Rachel Tomi]</h1>
    </Link>
    <p>I'm always ready to work on new projects, you can  
    <Link to="/" className="contact">
      <span> contact </span>
        </Link>
         me on all social media platform for easy communication
    </p>
    <ul className="social-icons">
       <Link to='' className="footer-link">
           <li>
           <i className="fab fa-twitter-square" id="icon"></i>
           </li>
       </Link>
       <Link to='' className="footer-link">
           <li>
           <i className="fab fa-github-square"  id="icon"></i>
           </li>
       </Link>
       <Link to='' className="footer-link">
           <li>
           <i className="fab fa-instagram-square"  id="icon"></i>
           </li>
       </Link>
   </ul>
 </ div>

 <div className="footer-address">
     <p className="sm-heading">CONTACT<i className="fas fa-phone-alt" id="sm-icon"></i></p>
     <p>+(234)811658887</p>
     <p className="sm-heading">EMAIL<i className="fas fa-envelope-open-text" id="sm-icon"></i></p>
     <p>folorunshotosin334@gmail.com</p>
 </div>
 <div className="last-footer-div">© 2020 Rachel Tomi. All Rights Reserved.</div>
 </ div>
</footer>

    )
}

export default Footer;