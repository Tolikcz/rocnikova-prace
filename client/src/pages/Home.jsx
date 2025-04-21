import React from "react";
import "../styles/App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = ({ setCurrentPage }) => {
  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} />

      <main>
        <section className="hero-section">
          <h1>Vítejte v našem bazénovém centru</h1>
          <p>Relaxace, pohyb a zábava na jednom místě</p>
          <button onClick={() => setCurrentPage("rezervace")}>
            Rezervovat dráhu
          </button>
        </section>

        <section className="services-section">
          <h2>Naše služby</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Plavecký bazén</h3>
              <p>Ideální pro kondiční i rekreační plavání.</p>
            </div>
            <div className="service-card">
              <h3>Dětský bazének</h3>
              <p>Bezpečné brouzdaliště pro nejmenší návštěvníky.</p>
            </div>
            <div className="service-card">
              <h3>Wellness zóna</h3>
              <p>Vířivka, sauna a relaxační prostory pro vaše pohodlí.</p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="opening-hours">
            <h2>Otevírací doba</h2>
            <p>Pondělí Pátek: 6:00 21:00</p>
            <p>Sobota Neděle: 8:00 20:00</p>
          </div>
          <div className="contact-info">
            <h2>Kontaktujte nás</h2>
            <p>📍 Ulice 123, Město</p>
            <p>📞 +420 123 456 789</p>
            <p>✉️ info@bazennarezervace.cz</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
