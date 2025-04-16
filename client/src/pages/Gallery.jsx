import React from 'react';
import '../styles/App.css';

const GaleriePage = ({ setCurrentPage }) => {
  const gallerySections = [
    {
      title: 'Bazény',
      images: [
        './client/public/images/galerie/bazen.jpg',
        './client/public/images/galerie/bazen2.jpeg',
        './client/public/images/galerie/bazen4.jpg',
        './client/public/images/galerie/bazen3.jpeg',
      ],
    },
    {
      title: 'Wellness',
      images: [
        './client/public/images/galerie/sauna.jpg',
        './client/public/images/galerie/masaze.jpg',
        './client/public/images/galerie/masazee.jpg',
        './client/public/images/galerie/vino.webp',
      ],
    },
    {
      title: 'Venkovní relaxace',
      images: [
        './client/public/images/galerie/lehatka.jpg',
        './client/public/images/galerie/venbazen.jpg',
      ],
    },
  ];

  return (
    <div>
       <header>
        <h1>Umístění bazénu</h1>
        <nav>
          <ul>
            <li><a href="#home" onClick={() => setCurrentPage('o nas')}>O nás</a></li>
            <li><a href="#rezervace" onClick={() => setCurrentPage('rezervace')}>Rezervace dráhy</a></li>
            <li><a href="#galerie" onClick={() => setCurrentPage('galerie')}>Galerie</a></li>
            <li><a href="#lokace" onClick={() => setCurrentPage('lokace')}>Lokace</a></li>
            <li><a href="#restaurace" onClick={() => setCurrentPage('restaurace')}>Restaurace</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {gallerySections.map((section, index) => (
          <div key={index} className="gallery-section">
            <h2>{section.title}</h2>
            <div className="gallery">
              {section.images.map((src, imgIndex) => (
                <img key={imgIndex} src={src} alt={`${section.title} ${imgIndex + 1}`} className="gallery-img" />
              ))}
            </div>
          </div>
        ))}
      </main>
      <footer>
        <div className="Left">
          <h3>Kontakt</h3>
          <p><strong>Adresa:</strong> Ulice 123, Město</p>
          <p><strong>Telefon:</strong> +420 123 456 789</p>
          <p><strong>Email:</strong> info@bazennarezervace.cz</p>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./client/public/images/footer/2023_Facebook_icon.svg.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./client/public/images/footer/Instagram_logo_2022.svg.png" alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="./client/public/images/footer/R.png" alt="TikTok" />
          </a>
        </div>
        <div className="newsletter">
          <h3>Odebírejte novinky </h3>
          <form>
            <input type="email" placeholder="Váš email" required />
            <button type="submit">Odeslat</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default GaleriePage;
