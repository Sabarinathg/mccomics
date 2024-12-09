// Home.js
import React, { useState } from 'react';
import './css/home.css';
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import Comic from '../components/Comic.js';
import Sidebar from '../components/Sidebar.js';
import Footer from '../components/Footer.js';
import Recent from '../components/Recent.js';
import Backtotop from '../components/Backtotop.js';
import Upcoming from '../components/Upcoming.js';
import Hero from '../components/Hero.js';
import Comingsoon from '../components/Comingsoon.js';
import Searchbar from '../components/Searchbar.js';

const Home = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div className='page-container'>
      <div className='page-comp'>
        <Logo toggleNavVisibility={toggleNavVisibility} isNavVisible={isNavVisible} />
        <Navbar isNavVisible={isNavVisible} />
        <Banner />
        <Hero />
        <Searchbar />
        <Comic />
        <Comingsoon />
        <Recent />
        <Upcoming />
        <Sidebar />
        <Footer />
        <Backtotop />
      </div>  
    </div>
  );
};

export default Home;
