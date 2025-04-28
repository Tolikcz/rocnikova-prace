import React, { useState } from 'react';
import Home from './pages/Home';
import GaleriePage from './pages/Gallery';
import LokacePage from './pages/Locations';
import CenikPage from './pages/Cenik';
import RezervacePage from './pages/Rezervace';
import './styles/App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'o nas':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'galerie':
        return <GaleriePage setCurrentPage={setCurrentPage} />;
      case 'lokace':
        return <LokacePage setCurrentPage={setCurrentPage} />;
      case 'rezervace':
        return <RezervacePage setCurrentPage={setCurrentPage} />;
        case 'cenik':
        return <CenikPage setCurrentPage={setCurrentPage} />;
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