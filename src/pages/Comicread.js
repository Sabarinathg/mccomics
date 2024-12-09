import React, { useState } from "react";
import "./css/home.css";
import Logo from "../components/Logo.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Sidebar from "../components/Sidebar.js";
import Footer from "../components/Footer.js";
import Reader from "../components/Reader.js";
import { Navigate, useParams } from "react-router-dom";
import bookdata from '../data/books.json';
import Backtotop from "../components/Backtotop.js";
import Searchbar from "../components/Searchbar.js";

const Comicread = () => {
  const { id } = useParams();
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setNavVisible(!isNavVisible);
  };
  const book = bookdata.find(book => book.id === Number(id));

 if (!book) {
        return <Navigate to='/404' replace />; // Handle case when book is not found
      }
  return (
    <div className="page-container">
      <div className="page-comp">
        <Searchbar />
        <Logo toggleNavVisibility={toggleNavVisibility} isNavVisible={isNavVisible} />
        <Navbar isNavVisible={isNavVisible} />
        <Banner />
        <Reader pdfUrl={book.link} title={book.title}/>
        <Sidebar />
        <Footer />
        <Backtotop />
      </div>
    </div>
  );
};

export default Comicread;
