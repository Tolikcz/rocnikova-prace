import React from 'react';
import '../styles/App.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="Left">
        <h2>Sociální sítě</h2>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/footer/2023_Facebook_icon.svg.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/footer/Instagram_logo_2022.svg.png" alt="Instagram" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/footer/R.png" alt="TikTok" />
        </a>
      </div>
      <div className="newsletter">
        <h3>Odebírejte novinky</h3>
        <form>
          <input type="email" placeholder="Váš email" required />
          <button type="submit">Odeslat</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
