import React, { useEffect, useState } from 'react'
import '../components/comp css/footer.css';
import logo from '../images/mc logo new.png';
import rarrow from '../images/arrow.png';
import fb from '../images/socialmedia/fb copy.png';
import twitter from '../images/socialmedia/twitter copy.png';
import insta from '../images/socialmedia/insta copy.png';
import tele from '../images/socialmedia/telegram copy.png';
import discord from '../images/socialmedia/dicord copy.png';
import { Link, useNavigate } from 'react-router-dom';
const Footer = () => {
    
    const[date,setdate]=useState();

    const navigate=useNavigate();

    const handlehome=()=>
    {
        navigate('/');
    }

    useEffect(() => {
    
        setdate(new Date().getFullYear());
       
      }, []);

  return (
    <div className='footer-container'>
        <div className='footer-top'>
            <div className='pannel box'>
                <div className='logo-name' onClick={handlehome}>
                    <img src={logo} alt='logo' />
                    Minnal ComicS
                </div>
                <div className='sm-list'>
                    <span>mcomics@support.org</span>
                    <ul>
                        <li><img src={fb} alt='media-icon' className='sm-icon'/></li>
                        <li><img src={twitter} alt='media-icon' className='sm-icon'/></li>
                        <li><img src={insta} alt='media-icon' className='sm-icon'/></li>
                        <li><img src={tele} alt='media-icon' className='sm-icon'/></li>
                        <li><img src={discord} alt='media-icon' className='sm-icon'/></li>
                    </ul>
                </div>
            </div>
            <div className='pannel2 box'>
                <div className='pan-con'>
                    Popular Comics
                    <ul className='pop-com'>
                        <li><Link to='/comic/5' className='pages'><img src={rarrow} alt='arr' />Crush 2003</Link></li>
                        <li><Link to='/comic/6' className='pages'><img src={rarrow} alt='arr' />Panthom Road</Link></li>
                        <li><Link to='/comic/7' className='pages'><img src={rarrow} alt='arr' />Pincess Pincess</Link></li>
                        <li><Link to='/comic/8' className='pages'><img src={rarrow} alt='arr' />Tenement 01</Link></li>
                    </ul>
                </div>
            </div>
            <div className='pannel2 box'>
                <div className='pan-con'>
                    Need Help ?
                    <ul className='pop-com help-con'>
                        <li><Link to='/terms&condition' className='pages'><img src={rarrow} alt='arr' />Terms & Conditions</Link></li>
                        <li><Link to='/about' className='pages'><img src={rarrow} alt='arr' />About</Link></li>
                        <li><Link to='/contactus' className='pages'><img src={rarrow} alt='arr' />Contact</Link></li>
                        <li><Link to='/help' className='pages'><img src={rarrow} alt='arr' />Help</Link></li>
                        <li><Link to='/faq' className='pages'><img src={rarrow} alt='arr' />FAQ</Link></li>
                        <li><Link to='/howtodownload' className='pages'><img src={rarrow} alt='arr' />Download Comics</Link></li>
                    </ul>
                </div>
            </div>
            <div className='pannel2 box'>
            <div className='pan-con'>
                    Subscribe
                    <div className='form-content'>
                        Subscribe to NewsLetter
                        <form>
                           <span className='input-con'>
                                <input type='text' placeholder='Name' />
                                <input type='text' placeholder='Email' />
                           </span>
                           <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <p>Copyright &copy;{date} <a href='/'>Minnal Comics</a> All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer