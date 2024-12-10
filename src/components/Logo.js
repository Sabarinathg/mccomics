import React from 'react';
import logo1 from '../images/mc logo new.png';
import './comp css/logo.css';
import fb from '../images/socialmedia/fb copy.png';
import twitter from '../images/socialmedia/twitter copy.png';
import insta from '../images/socialmedia/insta copy.png';
import tele from '../images/socialmedia/telegram copy.png';
import discord from '../images/socialmedia/dicord copy.png';
import menu from '../images/menu icon.png';
import close from '../images/menu icon close.png';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

const Logo = ({ toggleNavVisibility, isNavVisible }) => {
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
        <div className='sr-div'>
          <Searchbar />
        </div>
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
    </div>
  );
};

export default Logo;
