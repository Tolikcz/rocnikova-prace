import React, { useState } from 'react';
import Home from './pages/Home';
import GalleryPage from './pages/Gallery';
import LocationsPage from './pages/Locations';
import RestaurantPage from './pages/Restaurant';
import Rezervace from './pages/Rezervace';
import './styles/App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'gallery':
        return <GalleryPage setCurrentPage={setCurrentPage} />;
      case 'locations':
        return <LocationsPage setCurrentPage={setCurrentPage} />;
      case 'restaurant':
        return <RestaurantPage setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};


export default App;