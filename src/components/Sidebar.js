import React, { useEffect, useState } from 'react'
import './comp css/sidebar.css';
import rarrow from '../images/arrow.png';
import tarrow from '../images/tab-arrow.png';
import bookdata from '../data/books.json';
const Sidebar = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    setBooks([...bookdata].reverse().slice(0, 4));
   
  }, []);

  const [activeTab, setActiveTab] = useState("tab1");

  // Function to handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className='sidebar-container'>
      <div className='sidebar-content'>
          <div className='category'>
            <h2>Categories</h2>
              <ul>
                <li><img src={rarrow} alt='arr' />Abstract comics</li>
                <li><img src={rarrow} alt='arr' />Crime</li>
                <li><img src={rarrow} alt='arr' />Design</li>
                <li><img src={rarrow} alt='arr' />Fantasy</li>
                <li><img src={rarrow} alt='arr' />Adult</li>
                <li><img src={rarrow} alt='arr' />Graphic</li>
                <li><img src={rarrow} alt='arr' />Horror</li>
                <li><img src={rarrow} alt='arr' />Non-fiction</li>
                <li><img src={rarrow} alt='arr' />Science fiction</li>
                <li><img src={rarrow} alt='arr' />Superhero</li>
                <li><img src={rarrow} alt='arr' />War comics</li>
              </ul>
          </div>
          <div className='archive'>
            <h2>Archive</h2>
              <ul>
                <li><img src={rarrow} alt='arr' />January</li>
                <li><img src={rarrow} alt='arr' />February</li>
                <li><img src={rarrow} alt='arr' />March</li>
                <li><img src={rarrow} alt='arr' />April</li>
                <li><img src={rarrow} alt='arr' />May</li>
                <li><img src={rarrow} alt='arr' />June</li>
                <li><img src={rarrow} alt='arr' />July</li>
                <li><img src={rarrow} alt='arr' />August</li>
                <li><img src={rarrow} alt='arr' />September</li>
                <li><img src={rarrow} alt='arr' />October</li>
                <li><img src={rarrow} alt='arr' />November</li>
                <li><img src={rarrow} alt='arr' />December</li>
              </ul>
          </div>
          <div className='posttabs'>
            <div className="tabs">
              <button
                className={activeTab === "tab1" ? "active" : ""}
                onClick={() => handleTabClick("tab1")}
              >
                <h2>Popular Post</h2>
                <img src={tarrow} alt='tab-arrow'/>
              </button>
              <button
                className={activeTab === "tab2" ? "active" : ""}
                onClick={() => handleTabClick("tab2")}
              >
                <h2>Recent Post</h2>
                <img src={tarrow} alt='tab-arrow'/>
              </button>
              <button
                className={activeTab === "tab3" ? "active" : ""}
                onClick={() => handleTabClick("tab3")}
              >
                <h2>Recent Comments</h2>
                <img src={tarrow} alt='tab-arrow'/>
              </button>
            </div>
            <div className="tab-content">
              {activeTab === "tab1" && 
                <div className='content-list'>
                  <ul>
                    {books.map((book, index) => (
                      <li key={index}>
                        <h6>{book.title}</h6>
                        <p>{book.description.slice(0, 90)}...</p>
                      </li>
                    ))}
                  </ul>
                </div>
              }
              {activeTab === "tab2" && 
                <div  className='content-list'>
                  <ul>
                  {books.map((book, index) => (
                      <li key={index}>
                        <h6>{book.title}</h6>
                        <p>{book.description.slice(0, 90)}...</p>
                      </li>
                    ))}
                  </ul>
                </div>
              }
              {activeTab === "tab3" && 
                <div  className='content-list'>
                  <ul>
                    <li>
                      <h6>pop-post 2</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore...</p>
                    </li>
                    <li>
                      <h6>pop-post 2</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore...</p>
                    </li>
                    <li>
                      <h6>pop-post 2</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore...</p>
                    </li>
                  </ul>
                </div>
              }
            </div>
          </div>
      </div>
    </div>
  )
}

export default Sidebar