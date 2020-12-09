import React from 'react';
import HomeHero from './HomeHero';
import './Home.scss';
import Portfolio from './Portfolio';
import HomeBlog from './HomeBlog';

const Home = () => {

    return(
<div className="home-section">
  <HomeHero />
  <Portfolio />
  <HomeBlog />
</div>
    )
}

export default Home;