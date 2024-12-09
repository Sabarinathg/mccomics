import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './comp css/searchresult.css'; 

// Import your JSON data (replace with actual path to your data file)
import comicsData from '../data/books.json';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Use useNavigate instead of useHistory
  const query = new URLSearchParams(location.search).get("query");
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState(query || ""); // Allow user to search again

  // Filter comics based on the query
  useEffect(() => {
    const filteredResults = comicsData.filter(comic =>
      comic.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  }, [query]);

  const handleSearchSubmit = () => {
    // Update the query in the URL to trigger a new search
    navigate(`/search?query=${searchQuery}`);  // Use navigate to update the URL
  };

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
    <div className='searchresult-container'>
    <div className='sr-content'>
        <div className='sr-bar-head'>
          <h1>Search result</h1>
          <div className='sr-bar'>
              <input
              type="text"
              placeholder="Search Comics"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={handleSearchSubmit}><i class="fa-brands fa-searchengin"></i></button>
          </div>
          <p>CAN'T FIND WHAT YOU'RE LOOKING FOR? TRY AGAIN</p>
        </div>
        {/* Display Results */}
        <div className='sr-contnet-con'>
          {results.length ? (
          results.map((result) => 
            <div className='book' key={result.id}>
              <div className='gloss'></div>
              <img className='cover' src={result.coverImage} alt={result.title} loading='eager'/>
              <div className='description'>
                <h4>{result.title.split(" ")
                  .slice(0, 1)
                  .join(" ") + "..."}</h4>
                <div className='des-content'>
                  <p>
                    {result.description
                      .split(" ")
                      .slice(0, 25)
                      .join(" ") + "..."}
                  </p>
                  <NavLink 
                      className='comic-btn' 
                      to={`/comic/${result.id}`}>
                      <span>read...</span>
                  </NavLink>
                </div>
                <div className='comic-info'>
                  <span>Size: {result.size}</span><br />
                  <span>{formatTimeAgo(result.releaseDate)}</span>
                </div>
              </div>
            </div>)
            ) : (
              <div className='rs-nf'>
                <p>No results found</p>
              </div>  
            )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
