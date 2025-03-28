import React from 'react';
import '../styles/App.css';

const LocationsPage = ({ setCurrentPage }) => {
  return (
    <div>
      <header>
        <h1>Lokace Stránka</h1>
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
        <h2>Naše Lokace</h2>
        <div className="map-container">
          <iframe
            title="Bazén v České republice"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.676947091251!2d14.42045931571578!3d50.08804097942656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e1b0b0b0b0%3A0x0!2zNTDCsDA1JzE3LjAiTiAxNMKwMjUnMTIuMCJF!5e0!3m2!1sen!2scz!4v1616581234567!5m2!1sen!2scz"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
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

export default LocationsPage;