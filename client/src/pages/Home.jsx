import React, { useState } from "react";
import "../styles/App.css";

const Home = ({ setCurrentPage }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rezervace potvrzena pro ${name} na ${date} v ${selectedTime}`);
    setShowForm(false);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="home-page">
      <header>
        <h1>Rezervační systém pro bazén</h1>
        <nav>
          <ul>
            <li>
              <a href="#home" onClick={() => setCurrentPage("home")}>
                Domů
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={() => setCurrentPage("gallery")}>
                Galerie
              </a>
            </li>
            <li>
              <a href="#locations" onClick={() => setCurrentPage("locations")}>
                Lokace
              </a>
            </li>
            <li>
              <a
                href="#restaurant"
                onClick={() => setCurrentPage("restaurant")}
              >
                Restaurace
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Otevírací doba</h2>
          <h2>Otevírací doba</h2>
          <h2>Otevírací doba</h2>
          <h2>Otevírací doba</h2>
          <h2>Otevírací doba</h2>
          <h2>Otevírací doba</h2>
          <h2>Otevírací doba</h2>
          <h2>Otevírací doba</h2>
          <h2>Otevírací doba</h2>
          <h2>Otevírací doba</h2>
          <h2>Otevírací doba</h2>
          <h2>Otevírací doba</h2>
          <h2>Otevírací doba</h2>
          <h2>Otevírací doba</h2>
          <h2>Rezervace dráhy</h2>
          <div className="reservation-table-container">
            <table className="reservation-table">
              <thead>
                <tr>
                  <th>Čas</th>
                  {[1, 2, 3, 4, 5].map((lane) => (
                    <th key={lane}>Dráha {lane}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[10, 11, 12, 13, 14, 15].map((hour) => (
                  <tr key={hour}>
                    <td>{hour}:00</td>
                    {[1, 2, 3, 4, 5].map((lane) => (
                      <td key={lane}>
                        <button
                          className="time-button"
                          onClick={() => handleTimeClick(`${hour}:00`)}
                        >
                          {hour}:00
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showForm && (
            <div className="overlay">
              <div className="reservation-form-container">
                <button className="close-button" onClick={handleCloseForm}>
                  X
                </button>
                <form onSubmit={handleSubmit} className="reservation-form">
                  <h3>Rezervace na {selectedTime}</h3>
                  <div>
                    <label>Jméno:</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Email:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Datum:</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Čas:</label>
                    <input type="time" value={selectedTime} readOnly />
                  </div>
                  <div className="form-buttons">
                    <button type="submit">Rezervovat</button>
                    <button type="button" onClick={handleCloseForm}>
                      Zrušit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>
      </main>
      <footer>
        <div className="Left">
          <h3>Kontakt</h3>
          <p>
            <strong>Adresa:</strong> Ulice 123, Město
          </p>
          <p>
            <strong>Telefon:</strong> +420 123 456 789
          </p>
          <p>
            <strong>Email:</strong> info@bazennarezervace.cz
          </p>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./client/public/images/2023_Facebook_icon.svg.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./client/public/images/Instagram_logo_2022.svg.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./client/public/images/R.png" alt="TikTok" />
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

export default Home;
