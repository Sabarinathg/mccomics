import React from 'react'
import './comp css/pagenotfound.css';
import pnfimg from '../images/404.png';
const Pagenotfound = () => {
  return (
    <div className='pagenotfound-container'>
      <div className='pnf-i-container'>
      <img src={pnfimg} alt='404' className='pnf-img' loading='eager'/>
      <span>404</span>
      </div>
      <div className='pnf-content'>
        <h1>Whoops! Lost in the Comic Multiverse!</h1>
        <p>Looks like this page is playing hide-and-seek like a true superhero in stealth mode!</p>
        <p>But fear not, brave reader! Here are some shortcuts to help you back on track:</p>
        <ul>
          <li><a href='/'>Zap back to Homepage</a> and dive into our comic universe!</li>
          <li><a href='/comics'>Discover More Comics</a> for epic tales translated into Tamil!</li>
          <li><a href='/help'>Need Help?</a> We’re here to guide you!</li>
        </ul>
        <p>Happy reading, fearless comic crusader! </p>
      </div>
    </div>
  )
}

export default Pagenotfound