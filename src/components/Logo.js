import React, { useState } from 'react';
import logo1 from '../images/mc logo new.png';
import './comp css/logo.css';
import fb from '../images/socialmedia/fb copy.png';
import twitter from '../images/socialmedia/twitter copy.png';
import insta from '../images/socialmedia/insta copy.png';
import tele from '../images/socialmedia/telegram copy.png';
import discord from '../images/socialmedia/dicord copy.png';
import menu from '../images/menu icon.png';
import connect from '../images/social icon 1.png';
import close from '../images/menu icon close.png';
import { Link } from 'react-router-dom';

const Logo = ({ toggleNavVisibility, isNavVisible }) => {
  const [isMgBarVisible, setIsMgBarVisible] = useState(false);

  const toggleMgBar = () => {
    setIsMgBarVisible(!isMgBarVisible);
  };

  return (
    <div className='logo-con'>
      <div className='logo-c'>
        <img
          src={isNavVisible ? close : menu}  
          alt='menu'
          className='menu-icon'
          onClick={toggleNavVisibility}
        />
        <Link to='/'>
          <img src={logo1} alt='main-logo' className='main-logo' loading='eager' />
        </Link>
       <img
          src={isMgBarVisible ? close : connect}
          className='menu-icon'
          alt='connect'
          onClick={toggleMgBar}
        />
        <div className='lg-r'>
          <div className='social-micon'>
            <a href=' '><img src={fb} alt='media-icon' className='sm-icon' loading='eager'/></a>
            <a href=' '><img src={twitter} alt='media-icon' className='sm-icon' loading='eager'/></a>
            <a href=' '><img src={insta} alt='media-icon' className='sm-icon' loading='eager'/></a>
            <a href=' '><img src={tele} alt='media-icon' className='sm-icon' loading='eager'/></a>
            <a href=' '><img src={discord} alt='media-icon' className='sm-icon' loading='eager'/></a>
          </div>
        </div>
      </div>
      
      {/* Toggle the `visible` class based on `isMgBarVisible` state */}
      <div className={`mg-bar ${isMgBarVisible ? 'visible' : ''}`}>
          <div className='social-micon'>
            <a href=' '><img src={fb} alt='media-icon' className='sm-icon' loading='eager'/></a>
            <a href=' '><img src={twitter} alt='media-icon' className='sm-icon' loading='eager'/></a>
            <a href=' '><img src={insta} alt='media-icon' className='sm-icon' loading='eager'/></a>
            <a href=' '><img src={tele} alt='media-icon' className='sm-icon' loading='eager'/></a>
            <a href=' '><img src={discord} alt='media-icon' className='sm-icon' loading='eager'/></a>
          </div>
        </div>
    </div>
  );
};

export default Logo;
