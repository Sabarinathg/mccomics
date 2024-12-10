import React, { useState, useEffect } from 'react';
import './comp css/Downpage.css';

const Downpage = ({ book }) => {
  const [timeLeft, setTimeLeft] = useState(15);
  const [isDownloaded, setIsDownloaded] = useState(false);

  useEffect(() => {
    if (!book) return;

    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdown);
          triggerDownload();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [book]);

  const triggerDownload = () => {
    if (book.link) {
      const anchor = document.createElement('a');
      anchor.href = book.link;
      anchor.download = book.title || 'file'; // Default filename fallback
      anchor.click();
      setIsDownloaded(true);
    }
  };

  return (
    <div className="Down-container">
      <div className="Down-cont">
        {!isDownloaded ? (
          <>
            <h2>Your download will start in:</h2>
            <div className='d-circle'>
                <div className='d-c-c'>
                    <h1>{timeLeft}</h1>
                </div>
            </div>
            <p>Please wait while we prepare your download...</p>
          </>
        ) : (
          <>
           
            <h2>Download Success!</h2>
                <div className="circle-timer">
                <div className="circle tick">
                    <i className="fa fa-check"></i>
                </div>
                </div>
            <p>Your file has been downloaded successfully. Enjoy reading!</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Downpage;
