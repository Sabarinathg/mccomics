import React, { useState } from 'react'
import './css/home.css'
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import Sidebar from '../components/Sidebar.js';
import Footer from '../components/Footer.js';
import Aboutpage from '../components/Aboutpage.js';
import Backtotop from '../components/Backtotop.js';
import Searchbar from '../components/Searchbar.js';
const About = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setNavVisible(!isNavVisible);
  };
  return (
    <div className='page-container'>
      <div className='page-comp'>
        <Searchbar />
        <Logo toggleNavVisibility={toggleNavVisibility} isNavVisible={isNavVisible} />
        <Navbar isNavVisible={isNavVisible} />
        <Banner />
        <Aboutpage />
        <Sidebar />
        <Footer />
        <Backtotop />
      </div>  
    </div>
  )
}

export default About