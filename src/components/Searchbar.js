import React, { useEffect, useState } from 'react';
import './comp css/searchbar.css'; 

const Searchbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearchSubmit = () => {
    if (query.trim()) {
      // Redirect to the search results page with the query
      window.location.href = `/search?query=${encodeURIComponent(query)}`;
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = (e) => {
    if (e.target.className === 'modal-overlay') {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [modalOpen]);

  return (
    <div className='sr-container'>
      <button id='sr-m-btn' onClick={openModal}>
        <i class="fa-brands fa-searchengin"></i>
      </button>
      {modalOpen && (
        <div className="sr-modal-overlay" onClick={closeModal}>
          <div className="sr-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Search Here</h2>
            <div className='sr-m-mv'>
              <input
                type="text"
                placeholder="Search Comics"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button id='sr-btn'onClick={handleSearchSubmit}>
                <span>Search</span><i class="fa-brands fa-searchengin"></i>
              </button>
            </div>
            <button id='sr-close-btn' onClick={() => setModalOpen(false)}>
              <span>Close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
