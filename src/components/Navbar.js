import React from 'react'
import '../components/comp css/navbar.css';
import home from '../images/sidebaricons/Home.png';
import comics from '../images/sidebaricons/comics.png';
import about from '../images/sidebaricons/about.png';
import contact from '../images/sidebaricons/contact.png';
import join from '../images/sidebaricons/join.png';

import { NavLink, useLocation } from 'react-router-dom';
const Navbar = ({ isNavVisible }) => {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Home',icon:'fa-house',img:home },
    { path: '/comics', label: 'Comics',icon:'fa-book-open',img:comics },
    { path: '/about', label: 'About',icon:'fa-users',img:about },
    { path: '/contactus', label: 'Contact Us',icon:'fa-envelope-open-text',img:contact },
    { path: '/join', label: 'Join',icon:'fa-id-badge',img:join },
  ];

  const activeLabel = navItems.find(item => item.path === location.pathname)?.label || 'Minnal Comics';
  return (
    <div className={`nav-container ${isNavVisible ? 'visible' : ''}`}>
        <ul className='nav-list'>
        {navItems.map((item) => (
          <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
            <NavLink to={item.path} className='lnk'>{item.label}</NavLink>
          </li>
        ))}
      </ul>
      <ul className='vertical-nav'>
        {navItems.map((item) => (
          <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
            <NavLink to={item.path} className='lnk'><img src={item.img} alt='icons'/></NavLink> 
            {/* <i class={`fa-solid ${item.icon}`}></i> */}
          </li>
        ))}
      </ul>
      <div className='vertical-indi'>
        <span>{activeLabel}</span>
      </div>
    </div>
  )
}

export default Navbar