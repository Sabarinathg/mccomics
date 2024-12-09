import React, { useEffect, useState } from 'react'
import './comp css/comic.css';
import bookdata from '../data/books.json';
import { NavLink } from 'react-router-dom';

const Comic = () => {
  

  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    setBooks([...bookdata].reverse());
   
  }, []);

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const releaseDate = new Date(dateString); // This is already in UTC

    const seconds = Math.floor((now - releaseDate) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(seconds / 3600);
    const days = Math.floor(seconds / 86400);
    const months = Math.floor(days / 30);

    if (months > 0) {
        return months === 1 ? "1 month ago" : `${months} months ago`;
    } else if (days > 0) {
        return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (hours > 0) {
        return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
        return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else {
        return "just now";
    }
};

  return (
    <div className='comic-container'>
        <h1>Comics</h1>
        <div className='comic-section'>
        {books.map((book) => {
          const hasLink = book.link ? true : false;
          return (
              <div className={`book ${!hasLink ? 'no-link' : ''}`} key={book.id}>
              <div className='gloss'></div>
              <img className='cover' src={book.coverImage} alt={book.title} loading='eager'/>
              <div className='description'>
                <h4>{book.title.split(" ")
                  .slice(0, 1)
                  .join(" ") + "..."}</h4>
                <div className='des-content'>
                  <p>
                    {book.description
                      .split(" ")
                      .slice(0, 25)
                      .join(" ") + "..."}
                  </p>
                  <NavLink 
                      className='comic-btn' 
                      to={`/comic/${book.id}`}>
                      <span>read...</span>
                  </NavLink>
                </div>
                <div className='comic-info'>
                  <span>Size: {book.size}</span><br />
                  <span>{formatTimeAgo(book.releaseDate)}</span>
                </div>
              </div>
            </div>
          );
        })}
        </div>
    </div>
  )
}

export default Comic