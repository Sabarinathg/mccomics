import React, { useState } from 'react'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import Downpage from '../components/Downpage';
import { useLocation } from 'react-router-dom';
import Backtotop from '../components/Backtotop';
import './css/home.css'
import Sidebar from '../components/Sidebar';
import Searchbar from '../components/Searchbar';

const Downloadpage = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const location = useLocation();
    const book = location.state?.book;

  const toggleNavVisibility = () => {
    setNavVisible(!isNavVisible);
  };
  return (
    <div className='page-container'>
      <div className='page-comp'>
        <Searchbar />
        <Logo toggleNavVisibility={toggleNavVisibility} isNavVisible={isNavVisible} />
        <Navbar isNavVisible={isNavVisible} />
        <Downpage book={book}/>
        <Sidebar />
        <Footer />
        <Backtotop />
      </div>  
    </div>
  )
}

export default Downloadpage