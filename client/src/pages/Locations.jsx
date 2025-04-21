import React from 'react';
import '../styles/App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const LokacePage = ({ setCurrentPage }) => {
  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} />

      <main>
        <h2>Naše Lokace</h2>
        <div className="map-container">
          <iframe
            title="Bazén v České republice"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.676947091251!2d14.42045931571578!3d50.08804097942656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e1b0b0b0b0%3A0x0!2zNTDCsDA1JzE3LjAiTiAxNMKwMjUnMTIuMCJF!5e0!3m2!1sen!2scz!4v1616581234567!5m2!1sen!2scz"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LokacePage;
