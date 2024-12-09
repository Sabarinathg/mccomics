import React, { useState } from 'react'
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import './css/home.css';
import SearchResults from '../components/SearchResults';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Backtotop from '../components/Backtotop';

const Search = () => {
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
          <SearchResults />
          <Sidebar />
          <Footer />
          <Backtotop />
        </div>  
      </div>
    );
};

export default Search