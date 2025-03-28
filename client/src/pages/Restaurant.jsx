import React from 'react';
import '../styles/App.css';

const RestaurantPage = ({ setCurrentPage }) => {
  return (
    <div>
      <header>
        <h1>Restaurace Stránka</h1>
        <nav>
          <ul>
            <li><a href="#home" onClick={() => setCurrentPage('home')}>Domů</a></li>
            <li><a href="#gallery" onClick={() => setCurrentPage('gallery')}>Galerie</a></li>
            <li><a href="#locations" onClick={() => setCurrentPage('locations')}>Lokace</a></li>
            <li><a href="#restaurant" onClick={() => setCurrentPage('restaurant')}>Restaurace</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <p>Navštivte naši restauraci po plavání.</p>
      </main>
      <footer>
        
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/2023_Facebook_icon.svg.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/Instagram_logo_2022.svg.png" alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/R.png" alt="TikTok" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantPage;