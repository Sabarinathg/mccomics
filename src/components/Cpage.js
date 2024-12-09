import React from 'react'
import './comp css/cpage.css';
// import testban from '../images/mc slider 1.jpg'; 
import bookdata from '../data/books.json';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
const Cpage = () => {
    const { id } = useParams(); // Get the ID from URL parameters
    const navigate = useNavigate(); // For navigation
    const book = bookdata.find(book => book.id === Number(id));  // Get the passed book data
    if (!book) {
        return <Navigate to='/404' replace />; // Handle case when book is not found
      }
      const handleDownloadClick = () => {
        navigate('/download', { state: { book } }); // Pass the book data to the download page
      };
  return (
    <div className='Cpage-container'>
        <div className='page'>
            <img src={book.bannerImage}  alt='test'/>
            <h3>The Story - {book.title}</h3>
            <p><strong>{book.title} : </strong>{book.description}</p>
            <div className='down-links'>
                <h3>Free Download</h3>
                <p><strong>{book.title}</strong></p>
                <p>
                    <span><strong>Language : </strong>{book.language}</span>|
                    <span><strong>Year : </strong>{book.year}</span>|
                    <span><strong>Size : </strong>{book.size}</span>
                </p>
                <ul>
                    <li><a onClick={handleDownloadClick} className="online" href=' '>
                        <i className="fa-regular fa-circle-check"></i>Download</a></li>
                    <li>
                        <a href={book.teraLink || '#'} className='tera'>
                            {book.teraLink ? (
                                <i className="fa-regular fa-circle-check"></i>
                            ) : (
                                <i className="fa-regular fa-circle-xmark"></i> // Cross icon for no link
                            )}
                            TeraBox
                        </a>
                    </li>
                    <li>
                        <a href={book.teraLink || '#'} className='mega'>
                            {book.teraLink ? (
                                <i className="fa-regular fa-circle-check"></i>
                            ) : (
                                <i className="fa-regular fa-circle-xmark"></i> // Cross icon for no link
                            )}
                            mega
                        </a>
                    </li>
                    <li><a href={`/reader/${book.id}`} className="online"><i className="fa-regular fa-circle-check"></i>Read Online</a></li>
                </ul>
            </div>
            <div className='notes-des'>
                <h5>Notes :</h5>
                <ul>
                    <li>If you have any difficulties to download the files, please refer to this how-to <a href='/howtodownload'>download</a> page.</li>
                    <li>All the Comic Book Files are PDF formats</li>
                    <li>If you encounter any broken links or corrupt files, please message me through the contact form.</li>
                    <li>Want to see all the comic list? Please go to this page <a href='/comics'>Comics</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cpage