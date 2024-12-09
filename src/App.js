import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState, Suspense } from 'react';
import Loadingpage from './pages/Loadingpage';

 // Import the loading page

// Lazy-loaded routes
const Home = React.lazy(() => import('./pages/Home'));
const Comicpage = React.lazy(() => import('./pages/Comicpage'));
const Comicread = React.lazy(() => import('./pages/Comicread'));
const Comics = React.lazy(() => import('./pages/Comics'));
const About = React.lazy(() => import('./pages/About'));
const Contactus = React.lazy(() => import('./pages/Contactus'));
const Join = React.lazy(() => import('./pages/Join'));
const Helpcenter = React.lazy(() => import('./pages/Helpcenter'));
const Terms = React.lazy(() => import('./pages/Terms'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Howto = React.lazy(() => import('./pages/Howto'));
const Downloadpage = React.lazy(() => import('./pages/Downloadpage'));
const Notfound = React.lazy(() => import('./pages/Notfound'));
const SearchResults =React.lazy(()=>import('./pages/Search'));

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Simulating loading page when the app is busy
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="App">
      {isLoading ? (
        <Loadingpage /> // Display loading page when loading state is true
      ) : (
        <Suspense fallback={<Loadingpage />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/comic/:id' element={<Comicpage />} />
            <Route path='/reader/:id' element={<Comicread />} />
            <Route path='/comics' element={<Comics />} />
            <Route path='/about' element={<About />} />
            <Route path='/contactus' element={<Contactus />} />
            <Route path='/join' element={<Join />} />
            <Route path='/help' element={<Helpcenter />} />
            <Route path='/terms&condition' element={<Terms />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/howtodownload' element={<Howto />} />
            <Route path='/download' element={<Downloadpage />} />
            <Route path='/search' element={<SearchResults />}/>
            <Route path='*' element={<Notfound />} />
          </Routes>
        </Suspense>
      )}
    </div>
  );
}

export default App;
