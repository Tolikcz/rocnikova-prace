import React from 'react';
import '../styles/App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const GaleriePage = ({ setCurrentPage }) => {
  const gallerySections = [
    {
      title: 'Bazény',
      images: [
        '/images/galerie/bazen.jpg',
        '/images/galerie/bazen2.jpeg',
        '/images/galerie/bazen4.jpg',
        '/images/galerie/bazen3.jpeg',
      ],
    },
    {
      title: 'Wellness',
      images: [
        '/images/galerie/sauna.jpg',
        '/images/galerie/masaze.jpg',
        '/images/galerie/masazee.jpg',
        '/images/galerie/vino.webp',
      ],
    },
    {
      title: 'Venkovní relaxace',
      images: [
        '/images/galerie/lehatka.jpg',
        '/images/galerie/venbazen.jpg',
      ],
    },
  ];

  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} />

      <main>
        {gallerySections.map((section, idx) => (
          <section key={idx} className="gallery-section">
            <h2>{section.title}</h2>
            <div className="gallery">
              {section.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${section.title} ${i + 1}`}
                  className="gallery-img"
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default GaleriePage;
