import React, { useEffect, useState } from 'react';
import './comp css/Backtotop.css';

const Backtotop = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollTotop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const onScroll = () => {
            // Use requestAnimationFrame for better performance
            requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', onScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div
            className={`gototop ${visible ? 'visible' : ''}`}
            onClick={scrollTotop}
            aria-label="Back to Top"
        >
            <i className="fa-solid fa-caret-up"></i>
        </div>
    );
};

export default Backtotop;
