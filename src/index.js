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

window.addEventListener('load', () => {
  const Preload = document.querySelector('.preloader');
  Preload.classList.add('preload-finish');
})

gsap.registerPlugin(ScrollTrigger);

 const headerTl = gsap.timeline();
 headerTl.from('.nav-active', {opacity: 0, x: -100})
 .fromTo('#mainBurger', {opacity: 0}, {opacity: 1, xPercent: 10})

const heroTl = gsap.timeline();
heroTl
.from('.logo h1', {opacity: 0, yPercent: -50, delay: 0.5})
.fromTo('.social-icons', {opacity: 0}, {opacity: 1, xPercent: 40})
.from('.img-hero',{
  opacity: 0,
  duration: 1,
  x: -20
})

const portTl = gsap.timeline();

portTl
.from('h3', {
  opacity: 0, 
  yPercent: -30,
  scrollTrigger: {
    trigger: 'h3',
    start: 'center center',
    end: 'center center',
    stagger: 0.2,
    scrub: true
  }
})
  .from('Button', {
    opacity: 0,
    yPercent: -50,
    scrollTrigger: {
      trigger: 'Button',
      start: 'center center',
      end: 'center center'
    }
  })


