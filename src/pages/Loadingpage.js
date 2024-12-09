import React from 'react'
import './css/Loadingpage.css';
import logo from '../images/mc logo new.png'
const Loadingpage = () => {
  return (
    <div className='Loadingpage-container'>
        <div className='load-contnent'>
            <img src={logo} alt='' loading='eager' />
        </div>
        <div className='bar'>
        </div>
    </div>
  )
}

export default Loadingpage