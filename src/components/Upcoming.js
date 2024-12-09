import React, { useEffect, useState } from 'react';
import bookdata from '../data/booksUpcom.json';
import './comp css/upcoming.css';

const Upcoming = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null); // To hold the book for the modal
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

    useEffect(() => {
        setBooks([...bookdata]);
    }, []);

    useEffect(() => {
        if (isModalOpen) {
          document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
          document.body.style.overflow = "auto"; // Enable scrolling
        }
    
        return () => {
          document.body.style.overflow = "auto"; // Cleanup on unmount
        };
      }, [isModalOpen]);
    const openModal = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedBook(null);
        setIsModalOpen(false);
    };

    return (
        <div className='upcoming-container'>
            <h1>Upcoming Comics</h1>
            <div className='comic-section'>
                {books.map((book) => (
                    <div className='book' key={book.id}>
                        <div className='gloss'></div>
                        <img className='cover' src={book.coverImage} alt={book.title} loading='eager' />
                        <div className='description'>
                            <h4>{book.title.split(" ").slice(0, 1).join(" ") + "..."}</h4>
                            <div className='des-content'>
                                <p>
                                    {book.description
                                        .split(" ")
                                        .slice(0, 27)
                                        .join(" ") + "..."}
                                </p>
                                <button className='comic-btn' onClick={() => openModal(book)}>
                                    <span>read...</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && selectedBook && (
                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                         <button className='close-btn' onClick={closeModal}>X</button>
                        <div className='book-layout'>
                            <div className='modal-l'>
                                <img className='modal-cover' src={selectedBook.coverImage} alt={selectedBook.title} />
                            </div>
                            <div  className='modal-r'>
                                <h2>{selectedBook.title}</h2>
                                <p>{selectedBook.description
                                        .split(" ")
                                        .slice(0, 50)
                                        .join(" ") + "..."}</p>
                                <p>Year: {selectedBook.year}</p>
                                <p>Original Language: {selectedBook.oglanguage}</p>
                                <p>Volumes: {selectedBook.volumes}</p>
                                <p>Language: {selectedBook.language}</p>
                                <p>Size: {selectedBook.size}</p>
                                <p>Release Date: {selectedBook.releaseDate || 'Coming Soon'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Upcoming;
