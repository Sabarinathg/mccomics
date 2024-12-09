import React from 'react'
import './comp css/hero.css';
import heroimg from '../images/mc hero.png';
import { useNavigate } from 'react-router-dom';
const Hero = () => {

    const navigate =useNavigate();

    const handleRead=()=>
    {
        navigate('/comics');
    }

    const handleJoin=()=>
        {
            navigate('/about');
        }

  return (
    <div className="hero-section">
        <div className="hero-image">
            <img src={heroimg} alt="Minnal Comics" loading='eager'/>
        </div>
        <div className="hero-content">
            <h1>
            Bringing Timeless Comics to Life in Tamil!
            </h1>
            <p >
            Discover translated classics and dive into the world of stories that transcend language and culture.  
            </p>
            <p>Free for everyone, forever!  </p>
            <div className="cta-buttons">
            <button className='read-btn' onClick={handleRead}>
                Read Comics
            </button>
            <button className='read-btn'  onClick={handleJoin}>
                Join Our Community
            </button>
            </div>
        </div>
    </div>
  )
}

export default Hero