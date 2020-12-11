import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';

const Footer = () => {

    return(
<footer>
 < div className="panel footer-div">
<div className="footer-contact">
    <h6>CONTACT</h6>
    <p>I'm always interested in working on new projects.
    <Link to="/contact" className="contact">
      <span> Hire me </span>
        </Link>
    if you would like to work together 
    </p>
    <ul className="social-icons">
       <Link to={{pathname:"https://twitter.com/racheltomidev"}} target="_blank" className="footer-link">
           <li>
           <i className="fab fa-twitter-square" id="icon"></i>
           </li>
       </Link>
       <Link to={{pathname:"https://github.com/racheal-spec"}} target="_blank" className="footer-link">
           <li>
           <i className="fab fa-github-square"  id="icon"></i>
           </li>
       </Link>
       <Link to={{pathname:"https://instagram.com/racheal-spec"}} target="_blank" className="footer-link">
           <li>
           <i className="fab fa-instagram-square"  id="icon"></i>
           </li>
       </Link>
   </ul>
 </ div>

 <div className="footer-address">
     <p className="sm-heading"><i className="fas fa-phone-alt" id="sm-icon"></i>
     +(234)811658887</p>
     <p className="sm-heading"><i className="fas fa-envelope-open-text" id="sm-icon"></i>info@racheltomi.com</p>
 </div>
 <div className="last-footer-div">© 2020 Rachel Tomi. All Rights Reserved.</div>
 </ div>
</footer>

    )
}

export default Footer;