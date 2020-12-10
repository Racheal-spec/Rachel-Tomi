import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {gsap, ScrollTrigger} from 'gsap/all';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

gsap.registerPlugin(ScrollTrigger);

/*
gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true, 
    pinSpacing: false
  });
})

ScrollTrigger.create({
  snap: 1/4
})
*/
 const headerTl = gsap.timeline();

 headerTl.from('.nav-active', {opacity: 0, x: -100})


const heroTl = gsap.timeline();

heroTl.from('.logo h1', {opacity: 0, yPercent: -50, delay: 0.5})
.from('.links', {
  opacity: 0,
  duration: 0.5,
  yPercent: 50,
  stagger: 0.2
})
.fromTo('.social-icons', {opacity: 0}, {opacity: 1, xPercent: -20})
.from('.img-hero',{
  opacity: 0,
  duration: 0.5,
  x: -20
})

const contactTl = gsap.timeline();

//contactTl.from('.col-1', {duration: 1, opacity: 0, x: -20})
//contactTl.from('.col-2-img', {duration: 1, opacity: 0, x: 20})
contactTl.from('.card', {duration: 1, opacity: 0, y: 50 })

