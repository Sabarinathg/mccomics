import React from 'react'
import './comp css/comingsoon.css';
import cs from '../images/mc og 1.png';
const Comingsoon = () => {
  return (
    <div className='Comingsoon-container'>
        <div className='Comingsoon-content'>
            <div className='Comingsoon-left'>
                <img src={cs} alt='coming soon' loading='eager' />
            </div>
            <div className='Comingsoon-right'>
                <h1>Minnal Originals</h1>
                <h2>Coming Soon</h2>
                <p id='mcog-p'>
                    Get ready for an exciting journey into the world of <strong>original stories</strong>. 
                    Minnal Comics is bringing you fresh, thrilling tales with a unique twist.
                </p>
                <br/>
                <p>Stay tuned for</p>
                <ul>
                    <li>Action-packed adventures</li>
                    <li>Heartfelt stories</li>
                    <li>Innovative characters and artwork</li>
                </ul>
                <button class="notify-btn">Get Notified</button>
            </div>
        </div>
    </div>
  )
}

export default Comingsoon