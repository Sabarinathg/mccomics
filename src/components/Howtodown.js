import React from 'react'
import './comp css/howto.css';
import hd1 from '../images/howto/how-1.jpg';
import hd2 from '../images/howto/how-2.jpg';
import hd3 from '../images/howto/how-3.jpg';
import hd4 from '../images/howto/how-4.png';
import hd5 from '../images/howto/how-5.jpg';
import hd6 from '../images/howto/how-6.jpg';
import hd7 from '../images/howto/how-7.jpg';

const Howtodown = () => {
  return (
    <div className='howtodown-container'>
        <h1>How to Download Comics</h1>
        <div className='howtodown-content'>
            <p>Downloading comics from Minnal Comics is simple! Follow the steps below to access your favorite stories in Tamil:</p>
            <h1>Steps to Download</h1>
            <strong id='hd-head'>Browse Our Library</strong>
            <p>Head to our Comic Library and explore a wide selection of classic comics translated into Tamil.</p>
            <div className='hd-img-cont'>
                <img src={hd1} alt='How-to-download'/>
            </div>
            <strong id='hd-head'>Select a Comic</strong>
            <p>Click on the comic you want to read and download. This will open the comic's dedicated page with more details.</p>
            <div className='hd-img-cont'>
                <img src={hd2} alt='How-to-download'/>
                <img src={hd3} alt='How-to-download'/>
                <img src={hd4} alt='How-to-download'/>
            </div>
            <strong id='hd-head'>Go to the Download Page</strong>
            <p>Look for the Download button on the comic's page. click the <strong>Download</strong> button to proceed to the download page.</p>
            <div className='hd-img-cont'>
                <img src={hd5} alt='How-to-download'/>
            </div>
            <strong id='hd-head'>Wait for 15 Seconds</strong>
            <p>On the download page, a timer will start. Wait for 15 seconds, and the file will automatically begin downloading as a PDF once the timer completes.</p>
            <div className='hd-img-cont'>
                <img src={hd6} alt='How-to-download'/>
                <img src={hd7} alt='How-to-download'/>
            </div>
            <strong id='hd-head'>Enjoy Offline Reading!</strong>
            <p>Once the download is complete, open the file on your device and dive into your favorite stories offline!</p>
            <br></br>
    <hr></hr>

            <div className='imp-note'>
            <h1>Important Notes</h1>
            <ul>
                <li>
                    <strong id='hd-head'>Personal Use Only </strong>
                    <p> Please use the downloaded comics for personal enjoyment and share the website link with others rather than the files themselves to support our work.</p>
                </li>
                <li>
                    <strong id='hd-head'>Respect the Original Creators </strong>
                    <p> All translations are done to bring stories to Tamil readers, with no commercial intent. Please respect the rights of original content creators.</p>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Howtodown