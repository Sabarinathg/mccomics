import React, { useEffect, useState, useRef } from "react";
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./comp css/reader.css";
import Loadingpage from "../pages/Loadingpage";

// Set the worker path to the locally hosted file
GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;

const Reader = ({ pdfUrl, title }) => {
  const [pdf, setPdf] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentImages, setCurrentImages] = useState({});
  const [currentSlide, setCurrentSlide] = useState(1);
  const [loadError, setLoadError] = useState(""); // State for load errors
  const swiperRef = useRef(null);
  const ctitle = title;
  const pageCache = {};
  const scale = 2;

  const renderPage = async (pageNumber, preload = false) => {
    if (!pdf) {
      console.error("PDF is not loaded yet.");
      return;
    }

    if (pageCache[pageNumber]) {
      setCurrentImages((prev) => ({ ...prev, [pageNumber]: pageCache[pageNumber] }));
      return;
    }

    try {
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale: preload ? 1 : scale });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({ canvasContext: context, viewport }).promise;
      const imgData = canvas.toDataURL();

      pageCache[pageNumber] = imgData;

      setCurrentImages((prev) => ({ ...prev, [pageNumber]: imgData }));
    } catch (error) {
      console.error(`Error rendering page ${pageNumber}:`, error);
    }
  };

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const loadedPdf = await getDocument(pdfUrl).promise;
        setPdf(loadedPdf);
        setPageCount(loadedPdf.numPages);

        const pageNumber = 1;
        const page = await loadedPdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport }).promise;
        const imgData = canvas.toDataURL();

        setCurrentImages({ [pageNumber]: imgData });
        pageCache[pageNumber] = imgData;

        renderPage(2, true);
        renderPage(3, true);
      } catch (error) {
        console.error("Error loading PDF:", error);
        setLoadError("Failed to load PDF. Please check the file or try again.");
      }
    };

    loadPdf();
  }, [pdfUrl]);

  const handleSlideChange = (swiper) => {
    const newSlide = swiper.activeIndex + 1;
    setCurrentSlide(newSlide);
    renderPage(newSlide);
  };

  return (
    <div className="reader-container">
      <div className="reader-content">
        <h3>{ctitle}</h3>
        {/* <div className="navigation-buttons">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={!swiperRef.current}
          >
            Previous
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={!swiperRef.current}
          >
            Next
          </button>
        </div> */}
        <div className="pdf-container">
          {loadError ? (
            <div className="error-container">
              <p>{loadError}</p>
            </div>
          ) : pdf && pageCount > 0 ? (
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              spaceBetween={50}
              slidesPerView={1}
            >
              {Array.from({ length: pageCount }, (_, i) => (
                <SwiperSlide key={i}>
                  {Math.abs(currentSlide - i - 1) <= 2 ? (
                    currentImages[i + 1] ? (
                      <img src={currentImages[i + 1]} alt={`Page ${i + 1}`} />
                    ) : (
                      <div className="loading-bar"></div>
                    )
                  ) : (
                    <p>Page {i + 1} (not loaded)</p>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <>
              <Loadingpage />
            </>
          )}
        </div>
        <div className="navigation-buttons">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={!swiperRef.current}
          >
            Previous
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={!swiperRef.current}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reader;
