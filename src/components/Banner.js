import React, { useEffect, useState } from 'react'
import '../components/comp css/banner.css';
import imagesData from '../data/sliderimg.json';
import nxbtn from '../images/btn-next.png';
import prbtn from '../images/btn-prev.png';

const Banner = () => {
  const [images, setImages] = useState([]);

  // Load images from JSON when component mounts
  useEffect(() => {
    setImages([...imagesData]);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className='banner-container'>
      <div className="slider-container">
        <div className="slider">
          {images.map((image, index) => (
            <div
              className={`slide ${index === currentSlide ? "active" : ""}`}
              key={index}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <img src={image.images} alt={`Slide ${index + 1}`} loading='eager'/>
            </div>
          ))}
        </div>
        
    </div>
    <button
          className={`prev ${currentSlide === 0 ? "disabled" : ""}`}
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          <img src={prbtn} alt='pr-btn' loading='eager' />
        </button>
        <button
          className={`next ${currentSlide === images.length - 1 ? "disabled" : ""}`}
          onClick={nextSlide}
          disabled={currentSlide === images.length - 1}
        >
          <img src={nxbtn} alt='nxt-btn' loading='eager' />
        </button>
    </div>
  )
}

export default Banner